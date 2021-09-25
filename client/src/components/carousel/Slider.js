


import React from 'react'
import './carousel.css';
import heroOne from '../../Images/heroImages/1.png'
import heroTwo from '../../Images/heroImages/2.png'
import heroThree from '../../Images/heroImages/3.png'
import heroFour from '../../Images/heroImages/4.png'



const images = [heroOne, heroTwo,  heroThree,heroFour];
const delay = 10000;

function Slider() {


    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


    return (


        <div>

<div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
       <img src={heroOne} alt="" />
       <img src={heroTwo} alt="" />
       <img src={heroThree} alt="" />
       <img src={heroFour} alt="" />
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
            
        </div>
    )
}

export default Slider


// {images.map((backgroundImage, index) => (
//     <div
//       className="slide"
//       key={index}
//       style={{ backgroundImage }}
//     ></div>
//   ))}