import React, {useEffect, useState} from 'react';
import { image } from "./heroImagesData";
import './heroImage.scss';

function HeroImage() {

    const [index, setIndex] = useState(0)


    const random = () => {

        return Math.floor(Math.random() * 8);

    }
    
    useEffect(() => {
        setIndex(random())
    }, [])
    
    return (
        <div className="hero_banner">
        <img  src={image[index]} alt="homepage hero" style={{}}/>

        <h1> Exchange free & <br></br>
             And Enjoy the Moment</h1>
        </div>
    )
}

export default HeroImage
