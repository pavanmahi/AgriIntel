# 🌱 Agri Intel – Soil Classifier

**Agri Intel** is an intelligent, web-based soil classification system that uses deep learning to identify soil types from images.
This project empowers farmers, agronomists, and agricultural planners by providing precise insights into soil characteristics along with tailored agricultural and industrial recommendations.

🔗 **Live Demo:** [Agri Intel Soil Classifier](https://agriintel.onrender.com)
---

## 🌍 What It Does

- 📸 Accepts a soil image uploaded by the user.
- 🧠 Utilizes a trained **Convolutional Neural Network (CNN)** to classify the image into one of several soil types: **Alluvial**, **Black**, **Clay**, or **Red**.
- 📋 Returns **agricultural** and **industrial** usage recommendations based on the predicted soil type.
- 🧑‍🌾 Assists farmers in selecting the right crops and helps industries assess material suitability.

---

## 🔗 Backend & Model Deployment

- The backend is built using **Flask**, which handles image requests from the frontend.
- The trained CNN model is hosted on **Hugging Face Spaces** for fast, scalable, and serverless predictions.
- The frontend connects to the Hugging Face API to send soil images, receive the predicted soil type, and dynamically render relevant insights.
- No complex setup or heavy backend server required – it's cloud-based and efficient.

---

## 🧠 Model Highlights

- Developed using **TensorFlow** and **Keras**
- Trained on a curated dataset of soil images
- Optimized for lightweight deployment and near real-time prediction
- High classification accuracy on test samples

---
## 🔮 Future Scope

- 📌 Include more regional and micro-level soil types  
- 🧪 Suggest fertilizers and irrigation patterns based on soil nutrients  
- 🗺️ Integrate GIS or satellite imagery for wider coverage  
- 🌐 Add support for regional languages and offline access  

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to enhance features, feel free to fork the repo and submit a pull request.

---

## 🙌 Acknowledgments

- **TensorFlow & Keras** for model development  
- **Hugging Face Spaces** for free and scalable model hosting  
- **Farmers, soil scientists, and open datasets** that inspired this application
