import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [soilInfo, setSoilInfo] = useState(null);

  const handleFileUpload = async (event) => {
    console.log("came");

    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUploaded(true);
      await sendImageToBackend(file);
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setImage(imageUrl);
      setUploaded(true);
      await sendImageToBackend(files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const sendImageToBackend = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://nithin521-soil-classifier-2.hf.space/predict", {
        method: "POST",
        body: formData,
        cors: "cors",
        headers: {
          Accept: "application/json",
        },
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch soil information");
      }
      const data = await response.json();
      console.log(data);
      setSoilInfo(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to get soil information. Please try again.");
    }
  };

  return (
    <div
      className={`upload ${dragging ? "dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      id="upload"
    >
      <h2>{uploaded ? "Upload soil image" : "Upload soil Image"}</h2>
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="uploadButton">
        Upload Image
      </label>
      <div className="drop-area">
        <p>
          {uploaded
            ? "Drag and drop more images here"
            : "Drag and drop your image here"}
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt="Uploaded Preview"
          style={{ marginTop: "20px", maxWidth: "350px", height: "350px" }}
        />
      )}
      {soilInfo && console.log(soilInfo.score)}
      {soilInfo && soilInfo.recommendations && (
        <div>
          <h3>
            Prediction Results: <span>{soilInfo.soil_type}</span>
          </h3>
          {Object.values(soilInfo.recommendations).map(
            (recommendation, index) => (
              <div key={index}>
                <h4>{index === 0 ? "Agriculture" : "Industrial"}</h4>
                <p>{recommendation}</p>
              </div>
            )
          )}
        </div>
      )}
      {}
    </div>
  );
};

export default Upload;
