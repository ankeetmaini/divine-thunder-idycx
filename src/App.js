import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function App(props) {
  const [size, setSize] = useState(0);
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
     calculateSize(dataUri);
  }

  function calculateSize(dataUri) {
    var file = dataURLtoBlob(dataUri);
    var size = file.size;

    var sizeMB = size / 1000000;
    setSize(sizeMB);
  }

  function dataURLtoBlob(dataURL) {
    //http://mitgux.com/send-canvas-to-server-as-file-using-ajax
    // Decode the dataURL
    var binary = atob(dataURL.split(",")[1]);
    // Create 8-bit unsigned array
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    // Return our Blob object
    return new Blob([new Uint8Array(array)], { type: "image/png" });
  }

  return (
    <>
      <Camera
        onTakePhoto={dataUri => {
          handleTakePhoto(dataUri);
        }}
      />
      <h1 style={{ background: "tomato", height: 60 }}>Size: {size}</h1>
    </>
  );
}

export default App;
