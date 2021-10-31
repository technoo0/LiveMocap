/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.SkinnedMesh;
    wiest: THREE.Bone;
    hellikkL: THREE.Bone;
    hellikkR: THREE.Bone;
  };
  materials: {};
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/src/BASEmodel.glb") as GLTFResult;
  useEffect(() => {
    const changeBone = () => {
      nodes.Cube.skeleton.bones[6].rotation.x += 1 * (Math.PI / 180);
    };
    const onMouseMove = (e: any) => {
      console.log(e);
      if (e.key == "s") {
        changeBone();
      }
    };
    window.addEventListener("keydown", onMouseMove);
    return () => {
      window.removeEventListener("keydown", onMouseMove);
    };
  }, []);
  console.log(nodes.Cube.skeleton);
  return (
    <Suspense fallback={null}>
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 2.35, 0.09]}>
          <primitive object={nodes.wiest} />
          <primitive object={nodes.hellikkL} />
          <primitive object={nodes.hellikkR} />
          <skinnedMesh
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            skeleton={nodes.Cube.skeleton}
          />
        </group>
      </group>
    </Suspense>
  );
}

useGLTF.preload("/BASEmodel.glb");
