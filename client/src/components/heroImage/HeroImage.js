import React from 'react';
import { image } from "./heroImagesData";

function HeroImage() {


    const random = (image) => {

        return Math.floor(Math.random() * image.length -1) + 1;
    }

    
    return (
        <>
        <img src={image[random(image)]} alt="homepage hero" />
        </>
    )
}

export default HeroImage
