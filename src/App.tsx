import React from "react";
import ThreeDCanvas from "./components/ThreeDCanvas";
import AiCam from "./components/AiCam";
export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 240,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <AiCam />
      </div>
      <ThreeDCanvas />
    </div>
  );
}
