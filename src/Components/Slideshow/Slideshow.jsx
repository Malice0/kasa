import slideArrow from '../../assets/dropdown.svg'
import { useState, useEffect } from 'react'
import '../../Styles/SlideShow.css'

function Slideshow({ data, alt }) {
    const [isIndex, setIsIndex] = useState(0)
    const images = data.pictures

    const nextSlide = () => {
        setIsIndex(isIndex + 1)
        if (isIndex === images.length - 1) setIsIndex(0)
    }

    const prevSlide = () => {
        setIsIndex(isIndex - 1)
        if (isIndex === 0) setIsIndex(images.length - 1)
    }

    return (
        <div>
            {images.length > 1 && (
                <div className="img">
                    <div id="arrow" className="prevImg">
                        <img
                            src={slideArrow}
                            alt="image précèdante"
                            onClick={prevSlide}
                        />
                    </div>
                    <div className="imgBullet">
                        <img
                            src={data.pictures[isIndex]}
                            alt={alt}
                            className="imgSlider"
                        />
                        <p key={isIndex}>
                            {isIndex + 1}/{images.length}
                        </p>
                    </div>
                    <div id="arrow" className="nextImg">
                        <img
                            src={slideArrow}
                            alt="image suivante"
                            onClick={nextSlide}
                        />
                    </div>
                </div>
            )}
            {images.length === 1 && (
                <div className="img">
                    <img
                        src={data.pictures[isIndex]}
                        alt={alt}
                        className="imgSlider"
                    />
                </div>
            )}
        </div>
    )
}

export default Slideshow
