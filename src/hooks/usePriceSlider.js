/**
 * Este hook permite manejar el componente Slider de Material UI
 * de manera personalizada
 */

import { useState } from 'react';

function usePriceSlider(initialSelectedPricesRange) {

    const [selectedPricesRange, setSelectedPricesRange] = useState(initialSelectedPricesRange);

    const handlePrice = (event, newValue) => {
        setSelectedPricesRange(newValue);
        // console.log('=========', newValue)
    }

    function valuetext(value) {
        return `${value} €`;
    }
    /**
     *  marks pasa como prop al slider. La clave value representa en que punto del slider, de 0 100, se pinta el label. 
     */


    return {
        selectedPricesRange,
        handlePrice,
        valuetext,
    };
}

export default usePriceSlider;