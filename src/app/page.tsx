"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/shared";
import { Stats } from "@react-three/drei";

export default function Home() {
  return (
    <div className="">
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        camera={{
          position: [0, 0, 2],
        }}
      >
        <Experience />
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
}
