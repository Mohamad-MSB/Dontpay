import React from 'react';
import { image } from "./heroImagesData";

function HeroImage() {


    const random = (image) => {
        console.log('random generating is :', image)
        return Math.floor(Math.random() * image.length -1) + 1;
    }

    
    return (
        <div>
        <img src={image[random(image)]} alt="homepage hero" style={{width:"100%", margin:"15px 0"}}/>


       
        </div>

      
    )
}

export default HeroImage
