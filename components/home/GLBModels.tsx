"use client";

import { useGLTF, Center } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import type { Object3D } from "three";
import { GLB } from "./glbPaths";

type GLBPartProps = {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

function applyMeshDefaults(root: Object3D) {
  root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if (!mat) continue;
        if ("side" in mat) mat.side = THREE.DoubleSide;
        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
          if (mat.envMapIntensity !== undefined && mat.envMapIntensity < 0.55) {
            mat.envMapIntensity = 1.15;
          }
        }
      }
    }
  });
}

function GLBPrimitive({
  url,
  fitSize,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  maxUniformScale,
}: {
  url: string;
  fitSize: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** Hard ceiling on applied scale (fixes bad GLB bounds / extreme zoom). */
  maxUniformScale?: number;
}) {
  const { scene } = useGLTF(url) as { scene: Object3D };

  const { clone, uniformScale } = useMemo(() => {
    const c = scene.clone();
    applyMeshDefaults(c);
    c.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(c);
    const size = new THREE.Vector3();
    box.getSize(size);
    let maxDim = Math.max(size.x, size.y, size.z, 1e-6);
    /** Degenerate or absurd bbox — assume ~1 unit asset so scaling stays sane */
    if (maxDim < 1e-4 || maxDim > 1e5 || !Number.isFinite(maxDim)) {
      maxDim = 1;
    }
    let uniformScale = (fitSize / maxDim) * scale;
    if (!Number.isFinite(uniformScale) || uniformScale < 1e-4) {
      uniformScale = fitSize * scale;
    }
    uniformScale = Math.min(uniformScale, fitSize * 6);
    if (maxUniformScale !== undefined) {
      uniformScale = Math.min(uniformScale, maxUniformScale);
    }
    return { clone: c, uniformScale };
  }, [scene, fitSize, scale, maxUniformScale]);

  return (
    <group position={position} rotation={rotation}>
      <Center>
        <primitive object={clone} scale={uniformScale} />
      </Center>
    </group>
  );
}

Object.values(GLB).forEach((u) => useGLTF.preload(u));

export function GoogleLogoGLB({ scale = 1, position, rotation }: GLBPartProps) {
  return <GLBPrimitive url={GLB.googleLogo} fitSize={1.05} scale={scale} position={position} rotation={rotation} />;
}

export function MinimalPhoneGLB({ scale = 1, position, rotation }: GLBPartProps) {
  return <GLBPrimitive url={GLB.minimalPhone} fitSize={2} scale={scale} position={position} rotation={rotation} />;
}

export function MapPointerGLB({ scale = 1, position, rotation }: GLBPartProps) {
  return <GLBPrimitive url={GLB.mapPointer} fitSize={1} scale={scale} position={position} rotation={rotation} />;
}

export function FolderIconGLB({ scale = 1, position, rotation }: GLBPartProps) {
  return (
    <GLBPrimitive
      url={GLB.iconFolder}
      fitSize={0.2}
      scale={scale}
      maxUniformScale={0.32}
      position={position}
      rotation={rotation}
    />
  );
}
