import React, { forwardRef, useRef } from "react";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import { Vector2 } from "three";
import fragmentShader from "../../shaders/fragment.glsl";
import vertexShader from "../../shaders/vertex.glsl";
import { extend, useFrame, useThree } from "@react-three/fiber";

export const SmallPlantMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
    uResolution: new Vector2(0, 0),
    uPixelSize: 2.5,
  },
  vertexShader,
  fragmentShader,
);

extend({ SmallPlantMaterial });

interface IProps {
  shaders?: boolean;
  pixelSize?: number;
}

export const PlantModel = (props: IProps) => {
  const { shaders = false, pixelSize = 2.5 } = props;
  const { nodes, materials } = useGLTF("/models/plant-transformed.glb") as any;
  const { height, width } = useThree((state) => state.size);

  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref) {
      ref.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_2"
        geometry={nodes.Object_2.geometry}
        // material={materials.model_Material_u1_v1}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={shaders}
      >
        {/* @ts-ignore */}
        <smallPlantMaterial
          ref={ref}
          uTexture={materials.model_Material_u1_v1.map}
          uResolution={new Vector2(width, height)}
          uPixelSize={pixelSize}
          // wireframe
          stencilWrite={true}
          stencilRef={1}
          stencilFunc="equal"
        />
      </mesh>

      <mesh
        name="Object_2"
        geometry={nodes.Object_2.geometry}
        // material={materials.model_Material_u1_v1}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={!shaders}
      >
        <meshBasicMaterial map={materials.model_Material_u1_v1.map} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/plant-transformed.glb");
