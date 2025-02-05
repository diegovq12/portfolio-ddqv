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
        <div className="image-gallery">
            <button className="arrow left" onClick={previousImage}><IoIosArrowBack /></button>
            <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} del proyecto`}
                aria-label={`Imagen ${currentImageIndex + 1} de ${images.length}`}
            />
            <button className="arrow right" onClick={nextImage}><IoIosArrowForward /></button>
            <style jsx>{`
                .image-gallery {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1rem;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    object-fit: fill;
                    padding: 1rem;
                    margin-left: auto;
                    margin-right: auto;
                }

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
                    padding: 1rem;
                    margin-right: -10px;
                }

                .right {
                    margin-left: -20px;
                }

                @media (max-width: 768px) {
                    .arrow {
                        font-size: 1.5rem;
                    }

                    img {
                        max-width: 90%;
                    }
                }

                @media (max-width: 480px) {
                    .arrow {
                        font-size: 1.2rem;
                    }

                    img {
                        max-width: 80%;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImageGallery;
