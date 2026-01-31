import React, { Fragment } from "react";
import { DragControls, MeshPortalMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { Plant } from "./plant";

export function Experience() {
  const { pixelSize, isSwapped } = useControls({
    pixelSize: {
      value: 2.5,
      min: 0.5,
      max: 5,
      step: 0.1,
      label: "Pixel Size",
    },
    isSwapped: {
      value: false,
      label: "Swap Materials",
    },
  });

  return (
    <Fragment>
      <Plant shaders={isSwapped} pixelSize={pixelSize} />

      <DragControls>
        <mesh position={[0, 0, 0.9]}>
          <boxGeometry args={[0.5, 0.5, 0.02]} />
          {/* <circleGeometry args={[0.2, 32]} /> */}
          <MeshPortalMaterial worldUnits>
            <color attach="background" args={["#fff"]} />
            <Plant shaders={!isSwapped} pixelSize={pixelSize} />
          </MeshPortalMaterial>
        </mesh>
      </DragControls>
    </Fragment>
  );
}
