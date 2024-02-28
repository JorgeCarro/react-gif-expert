import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
 

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages (newImages);
        setIsLoading(false);

    };

    //useEffect se lanza para comprobar efectos secundarios
    useEffect(()=>{
        getImages();
    }, [ ]);

    return {
        //si es images: images, puedes cambiar a solo images
        images,
        isLoading
    }
}
