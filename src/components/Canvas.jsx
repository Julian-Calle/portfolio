import React, { useContext, useRef, useState, useEffect } from "react";

export default function Canvas() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1500;
    canvas.height = 1500;
    canvas.style.width = "100%"; //`${window.innerWidth}px`;
    canvas.style.height = "100%"; //`${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 50;
    context.fillStyle = "green";
    contextRef.current = context;
  }, []);

  const startDrawing = (e) => {
    console.log(e);
    console.log(window);
    const { layerX, layerY } = e.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(layerX, layerY);

    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { layerX, layerY } = nativeEvent;
    contextRef.current.lineTo(layerX, layerY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    ></canvas>
  );
}

// import React from "react";
// import { useRef } from "react";
// import CanvasDraw from "react-canvas-draw";

// export default function Canvas() {
//   return (
//     <div>
//       <CanvasDraw brushRadius={1} hideGrid={true}>
//         <h1>hola</h1>
//       </CanvasDraw>
//     </div>
//   );
// }
