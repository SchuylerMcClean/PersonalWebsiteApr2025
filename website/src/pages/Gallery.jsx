import React, { useState, useRef, useEffect } from "react";

const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > images.length - 1) newIndex = images.length - 1;
    setIndex(newIndex);
  };

  useEffect(() => {
    const imageWidth = galleryRef.current?.clientWidth;
    if (galleryRef.current && imageWidth) {
      galleryRef.current.style.transform = `translateX(${
        -index * imageWidth
      }px)`;
    }
  }, [index]);

  return (
    <div className="gallery-container">
      <button className="nav left" onClick={() => scrollGallery(-1)}>
        ❮
      </button>
      <div className="gallery-wrapper">
        <div className="gallery" ref={galleryRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
      <button className="nav right" onClick={() => scrollGallery(1)}>
        ❯
      </button>
    </div>
  );
};

export default Gallery;
