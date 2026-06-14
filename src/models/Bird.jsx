import { useEffect, useRef, memo } from "react";
import { useFrame, invalidate } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

/**
 * Bird model - purely decorative.
 * Loaded lazily after main scene is ready.
 * On reduced-animation devices, uses slower movement and frame skipping.
 */
export const Bird = memo(function Bird({ reducedAnimations = false }) {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  const frameCount = useRef(0);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
      if (reducedAnimations) {
        actions["Take 001"].timeScale = 0.6;
      }
    }
    return () => {
      if (actions["Take 001"]) {
        actions["Take 001"].stop();
      }
    };
  }, [actions, reducedAnimations]);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return;

    // Skip frames on reduced-animation mode (render every 3rd frame)
    frameCount.current++;
    if (reducedAnimations && frameCount.current % 3 !== 0) return;

    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    const speed = reducedAnimations ? 0.006 : 0.01;
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += speed;
      birdRef.current.position.z -= speed;
    } else {
      birdRef.current.position.x -= speed;
      birdRef.current.position.z += speed;
    }

    invalidate();
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
});
