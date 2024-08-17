import { useState } from "react";
import left from "../../assets/images/VectorLeft.png";
import right from "../../assets/images/VectorRight.png";
import '../../styles/Carrousel.css'

function Carrousel({ slides }) {
   console.log("slides",slides)
        const [current, setCurrent] = useState(0); 
        const longeur = slides.length; 

    
        const nextSlide = () => {
            setCurrent(current === longeur- 1 ? 0 : current + 1); 
        };
        const prevSlide = () => {
            setCurrent(current === 0 ? longeur- 1 : current - 1); 
        };
    
        return (
            <section id="carrousel-container">
                {longeur> 1 && (
                    <img
                        src={left} 
                        alt="gauche"
                        onClick={prevSlide}
                        className="leftArrow"
                    />
                )}
                {longeur> 1 && (
                    <img
                        src={right}
                        alt="droite"
                        onClick={nextSlide}
                        className="rightArrow"
                    />
                )}
                {slides.map((slide, index) => (
                    <div
                        key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
                        className={
                            current === index
                                ? "slider  active-anim"
                                : "slider "
                        }
                    >
                        {index === current && <img src={slide} alt="appartement à louer" />}
                        {index === current && (
                            <span className="slider__number">
                                {current + 1}/{longeur}
                            </span>
                        )}
                    </div>
                ))}
            </section>
        );
    }
  export default Carrousel;