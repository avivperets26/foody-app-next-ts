"use client";
import { useRef, useState } from "react";
import styledClasses from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickImage, setPickImage] = useState(null);
  const imageInputRef = useRef();
  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={styledClasses.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styledClasses.controls}>
        <div className={styledClasses.preview}>
          {!pickImage && <p>No image picked yet.</p>}
          {pickImage && (
            <Image src={pickImage} alt="The image selected by the user." fill />
          )}
        </div>
        <input
          className={styledClasses.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={styledClasses.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
