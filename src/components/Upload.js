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
      const response = await fetch("https://chintu67-AgriIntel.hf.space/predict", {
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
        <div style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Prediction Results: <strong>{soilInfo.soil_type}</strong>
          </h3>
          {Object.entries(soilInfo.recommendations).map(([category, items], index) => (
            <div key={index} style={{ marginBottom: "20px" , alignItems:"center"}}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>
                {category.charAt(0).toUpperCase() + category.slice(1)} Recommendations
              </h4>
              <ul style={{ marginBottom: "20px" , display : "flex" , justifyContent : "center" }}>
                <div style={{textAlign:"left"}}>
                {items.map((item, i) => (
                  <li key={i} style={{ marginBottom: "5px" }}>{item}</li>
                ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
      )}
      {}
    </div>
  );
};

export default Upload;
