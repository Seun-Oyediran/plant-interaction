import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group } from "three";
import { PlantModel } from "../models/plant";

interface IWorldPlant {
  shaders: boolean;
  pixelSize?: number;
}

export const Plant = (props: IWorldPlant) => {
  const { shaders, pixelSize } = props;
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.75;
    }
  });

  return (
    <group ref={groupRef} position-y={-1.4} scale={0.15}>
      <PlantModel shaders={shaders} pixelSize={pixelSize} />
    </group>
  );
};
