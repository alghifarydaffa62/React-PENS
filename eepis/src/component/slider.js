import React, { useState } from "react";
import "../App.css"; // Pastikan file CSS terhubung
import image1 from "../img/pmb.jpg";
import image2 from "../img/ham.png";

const Slider = () => {
  const images = [image1, image2]; // Array gambar
  const [currentIndex, setCurrentIndex] = useState(0);// Menyimpan arah geser

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
        <div className="slider-container">
            <button onClick={prevSlide} className="slider-btn prev">
                &#10094;
            </button>

            <div className="slider-wrapper">
                <div
                className="slider-inner"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                >
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="slider-img"
                    />
                ))}
                </div>
            </div>

            <button onClick={nextSlide} className="slider-btn next">
                &#10095;
            </button>
        </div>
    </div>
    
  );
};

export default Slider;


