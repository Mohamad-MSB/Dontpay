import React, {useEffect, useState} from 'react';
import { image } from "./heroImagesData";

function HeroImage() {

    const [index, setIndex] = useState(0)


    const random = () => {

        return Math.floor(Math.random() * 8);

    }
    
    useEffect(() => {
        setIndex(random())
    }, [])
    
    return (
        <>
        <img src={image[index]} alt="homepage hero" style={{width:"100%", margin:"15px 0"}}/>
        </>
    )
}

export default HeroImage
