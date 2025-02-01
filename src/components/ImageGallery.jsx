import { useState } from "react";
import { IoIosArrowBack , IoIosArrowForward  } from 'react-icons/io';

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
            <button className="arrow left" onClick={previousImage}><IoIosArrowBack /></button>
            <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} del proyecto`}
                aria-label={`Imagen ${currentImageIndex + 1} de ${images.length}`}
                style={{
                    maxWidth: "28rem", 
                    height:"20rem",
                    borderRadius: "8px",
                    objectFit: "fill",
                    padding:"1rem",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            />
            <button className="arrow right" onClick={nextImage}><IoIosArrowForward /></button>
            <style jsx>{`
                .arrow {
                    background-color: transparent;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    color: #fff;
                    transition: color 0.3s ease;
                }

                .arrow:hover {
                    color: #456a8d;
                }

                .left {
                    padding:1rem;
                    margin-right:-10px;
                }

                .right {
                    margin-left: -20px;
                }
            `}</style>
        </div>
    );
};

export default ImageGallery;
