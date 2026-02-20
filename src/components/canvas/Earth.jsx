import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    earth.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const position = child.geometry.attributes.position;
        if (position) {
          let hasNaN = false;
          for (let i = 0; i < position.count; i++) {
            if (
              isNaN(position.getX(i)) ||
              isNaN(position.getY(i)) ||
              isNaN(position.getZ(i))
            ) {
              hasNaN = true;
              break;
            }
          }
          if (hasNaN) {
            child.geometry.boundingSphere = new THREE.Sphere(
              new THREE.Vector3(0, 0, 0),
              1
            );
          } else {
            child.geometry.computeBoundingSphere();
          }
        }
      }
    });
  }, [earth.scene]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("THREE.BufferGeometry.computeBoundingSphere")
  ) {
    return;
  }
  originalConsoleError(...args);
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 1, 6.5],
      }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;