/**
 * Este hook permite manejar el componente Slider de Material UI
 * de manera personalizada
 */

import { useState } from 'react';

function usePriceSlider(initialMaxPrice) {
    const [priceRange, setPriceRange] = useState([0, initialMaxPrice]);
    const [minPrice, maxPrice] = priceRange
    const handlePrice = (event, newValue) => {
        setPriceRange(newValue);
        // console.log('=========', newValue)
    }

    function valuetext(value) {
        return `${value} €`;
    }
    /**
     *  marks pasa como prop al slider. La clave value representa en que punto del slider, de 0 100, se pinta el label. 
     */
    const marks = [
        {
            value: 0,
            label: `${minPrice}`,
        },

        {
            value: initialMaxPrice,
            label: `${maxPrice}`,
        },
    ];

    return {
        priceRange,
        handlePrice,
        valuetext,
        marks,
        initialMaxPrice
    };
}

export default usePriceSlider;