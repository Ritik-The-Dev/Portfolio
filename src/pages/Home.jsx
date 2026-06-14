import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState, useCallback, useMemo, lazy } from "react";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

import { HomeInfo } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { useDeviceCapability } from "../hooks/useDeviceCapability";
import StaticHero from "../components/StaticHero";

// Lazy load 3D models - they won't be in the initial bundle
const Island = lazy(() => import("../models/Island").then(m => ({ default: m.Island })));
const Sky = lazy(() => import("../models/Sky").then(m => ({ default: m.Sky })));
const Bird = lazy(() => import("../models/Bird").then(m => ({ default: m.Bird })));
const Plane = lazy(() => import("../models/Plane").then(m => ({ default: m.Plane })));

// Lightweight inline loader (avoids importing Html from drei in main bundle)
function CanvasLoader() {
  return null; // Three.js Suspense - canvas shows nothing until ready
}

const Home = () => {
  const capability = useDeviceCapability();
  const audioRef = useRef(null);

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [showBird, setShowBird] = useState(false);

  // Lazy-load audio only when user requests it
  useEffect(() => {
    if (isPlayingMusic && !audioRef.current) {
      import("../assets/sakura.mp3").then((module) => {
        const audio = new Audio(module.default);
        audio.volume = 0.4;
        audio.loop = true;
        audioRef.current = audio;
        audio.play();
      });
    } else if (isPlayingMusic && audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlayingMusic]);

  // Load bird after main scene is ready (delayed decorative element)
  useEffect(() => {
    if (sceneReady && capability.loadBird) {
      const timer = setTimeout(() => setShowBird(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [sceneReady, capability.loadBird]);

  const adjustBiplaneForScreenSize = useCallback(() => {
    if (window.innerWidth < 768) {
      return [[1.5, 1.5, 1.5], [0, -1.5, 0]];
    }
    return [[3, 3, 3], [0, -4, -4]];
  }, []);

  const adjustIslandForScreenSize = useCallback(() => {
    if (window.innerWidth < 768) {
      return [[0.9, 0.9, 0.9], [0, -6.5, -43.4]];
    }
    return [[1, 1, 1], [0, -6.5, -43.4]];
  }, []);

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  // Canvas GL config based on device capability
  const glConfig = useMemo(() => ({
    antialias: capability.antialias,
    powerPreference: "high-performance",
    alpha: true,
    stencil: false,
    depth: true,
    // Limit pixel ratio for low-end
    pixelRatio: capability.tier === 'low' ? 1 : undefined,
  }), [capability]);

  // If device cannot render WebGL at all, show static fallback
  if (!capability.canRender3D) {
    return <StaticHero />;
  }

  return (
    <section className='w-full h-screen relative'>
      {/* Loading skeleton shown until scene is interactive */}
      {!sceneReady && (
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100'>
          <div className='w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin' />
          <p className='mt-4 text-blue-500 font-medium text-sm'>Loading 3D scene...</p>
        </div>
      )}

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        dpr={capability.dpr}
        performance={{ min: 0.5 }}
        frameloop={capability.frameloop}
        gl={glConfig}
        onCreated={() => setSceneReady(true)}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Reduced lighting for low-end devices */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {capability.tier !== 'low' && (
            <pointLight position={[10, 5, 10]} intensity={2} />
          )}
          {capability.tier === 'high' && (
            <>
              <spotLight
                position={[0, 50, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <hemisphereLight
                skyColor='#b1e1ff'
                groundColor='#000000'
                intensity={1}
              />
            </>
          )}
          {capability.tier === 'medium' && (
            <hemisphereLight
              skyColor='#b1e1ff'
              groundColor='#000000'
              intensity={1}
            />
          )}

          {/* Sky - always loaded, lightweight */}
          <Sky isRotating={isRotating} />

          {/* Island - core interactive element */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />

          {/* Plane - skip on low-end */}
          {capability.loadPlane && (
            <Plane
              isRotating={isRotating}
              position={biplanePosition}
              rotation={[0, 20.1, 0]}
              scale={biplaneScale}
            />
          )}

          {/* Bird - decorative, loaded last */}
          {showBird && (
            <Bird reducedAnimations={capability.reducedAnimations} />
          )}
        </Suspense>

        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
