import { useState, useEffect } from 'react';

/**
 * Device capability detection hook.
 * Returns quality tier: 'high', 'medium', or 'low'
 * 
 * High: Desktop, modern phones (>4GB RAM, >4 cores)
 * Medium: Mid-range devices (2-4GB RAM, 2-4 cores)
 * Low: Budget devices (<=2GB RAM, <=2 cores)
 */
export function useDeviceCapability() {
  const [capability, setCapability] = useState(() => detectCapability());

  useEffect(() => {
    // Re-check on resize (orientation change may reveal device type)
    const handleResize = () => setCapability(detectCapability());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
}

function detectCapability() {
  const memory = navigator.deviceMemory || 4; // Default to 4 if unavailable
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const screenWidth = window.innerWidth;
  const isSmallScreen = screenWidth < 768;

  // WebGL capability check
  let webglTier = 2;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      webglTier = 0;
    } else {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
        // Detect integrated/low-end GPUs
        if (renderer.includes('mali-4') || renderer.includes('adreno 3') || 
            renderer.includes('powervr sgx') || renderer.includes('vivante')) {
          webglTier = 0;
        } else if (renderer.includes('mali-t') || renderer.includes('adreno 4') || 
                   renderer.includes('adreno 5')) {
          webglTier = 1;
        }
      }
      // Clean up
      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    }
  } catch (e) {
    webglTier = 1;
  }

  // Determine quality tier
  if (webglTier === 0 || memory <= 2 || (isMobile && cores <= 2)) {
    return {
      tier: 'low',
      isMobile: true,
      canRender3D: webglTier > 0,
      memory,
      cores,
      dpr: [1, 1],
      shadows: false,
      antialias: false,
      maxLights: 2,
      loadBird: false,
      loadPlane: false,
      reducedAnimations: true,
      frameloop: 'demand',
    };
  }

  if (isMobile || isSmallScreen || memory <= 4 || cores <= 4 || webglTier === 1) {
    return {
      tier: 'medium',
      isMobile,
      canRender3D: true,
      memory,
      cores,
      dpr: [1, 1.5],
      shadows: false,
      antialias: false,
      maxLights: 3,
      loadBird: true,
      loadPlane: true,
      reducedAnimations: true,
      frameloop: 'always',
    };
  }

  return {
    tier: 'high',
    isMobile: false,
    canRender3D: true,
    memory,
    cores,
    dpr: [1, 2],
    shadows: true,
    antialias: true,
    maxLights: 5,
    loadBird: true,
    loadPlane: true,
    reducedAnimations: false,
    frameloop: 'always',
  };
}

export default useDeviceCapability;
