import { useState } from "react";

const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="image-gallery" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <button className="arrow left" onClick={previousImage}> &lt; </button>
            <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} del proyecto`}
                aria-label={`Imagen ${currentImageIndex + 1} de ${images.length}`}
                style={{
                    maxWidth: "28rem", 
                    height: "auto",   
                    borderRadius: "8px",
                    objectFit: "fill", 
                }}
            />
            <button className="arrow right" onClick={nextImage}> &gt; </button>
        </div>
    );
};

export default ImageGallery;
