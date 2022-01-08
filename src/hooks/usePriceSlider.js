/**
 * Este hook permite manejar el componente Slider de Material UI
 * de manera personalizada
 */

import { useState } from 'react';

function usePriceSlider(initialSelectedPricesRange) {

    const [selectedPricesRange, setSelectedPricesRange] = useState(initialSelectedPricesRange);

    const handlePrice = (event, newValue) => {
        setSelectedPricesRange(newValue);
    }

    function valuetext(value) {
        return `${value} €`;
    }

    return {
        selectedPricesRange,
        handlePrice,
        valuetext,
        setSelectedPricesRange,
    };
}

export default usePriceSlider;