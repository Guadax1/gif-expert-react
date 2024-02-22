// Un Hook no es más que una función que regresa algo

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';


/**
 * 
 * @param {String} category 
 * @returns {object}
 */
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    };

    useEffect( () => {
        getImages();
    }, [] );

    return {
        images,
        isLoading
    };
}
