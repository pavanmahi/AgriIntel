import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About This Project</h2>
      <p>
        This project focuses on classifying soil types using image data and convolutional neural networks (CNNs).
        It involves loading a dataset of soil images, performing data augmentation to improve model generalization,
        building a CNN model with convolutional, pooling, and dense layers, training the model to classify the images
        into distinct soil categories (Alluvial, Black, Clay, and Red), and evaluating its performance on a test set.
        The trained model is then saved for future use in soil classification tasks.
      </p>
    </div>
  );
};

export default About;
