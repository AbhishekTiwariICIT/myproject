import { useState } from 'react';
import styles from '../css/Carousel.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

export default function Carousel({ children }) {

    const CarouselBoxRef = useRef();
    const intervalRef = useRef(0);

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const { slides, count } = getSlidesInfo();
        slides[0].setAttribute("data-active", "true");

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const { slides, count } = getSlidesInfo();
                const newIndex = prev === count - 1 ? 0 : prev + 1;

                [...slides].forEach((slide, index) => {
                    slide.setAttribute('data-active', index === newIndex);
                })
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(intervalRef.current);   // cleanup
    }, []);

    function startSlider() {

    }
    function handlePrevious() {
        // stop interval
    clearInterval(intervalRef.current);

    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });


    setCurrentIndex(newIndex);
    }

   

    function handleNext() {
        clearInterval(intervalRef);
        const { slides, count } = getSlidesInfo();
        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
        [...slides].forEach((slide, index) => {
            slide.setAttribute('data-active', index === newIndex);
        });
        setCurrentIndex(newIndex)
    }

    function getSlidesInfo() {
        const CarouselBox = CarouselBoxRef.current;
        const slides = CarouselBox.children;

        const count = slides.length;

        return { slides, count };
    }

    return (
        <div className={styles.caouselcontainer}>

            
            <div className={styles.imagebox} ref={CarouselBoxRef}>
                {children}
            </div>
            <div className={`${styles.sliderBtn}`}>
                <div className={`${styles.sliderBtnEffect} ${styles.sliderLeftBtn}`} onClick={handlePrevious}>
                    <FaLessThan />
                </div>

                <div className={`${styles.sliderBtnEffect} ${styles.sliderLeftBtn}`} onClick={handleNext}>
                    <FaGreaterThan />
                </div>



            </div>
       </div>
    )
}

