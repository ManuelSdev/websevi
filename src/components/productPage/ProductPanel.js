
import React from 'react';
import Box from "@mui/system/Box";
import ProductButtons from './ProductButtons'
import ProductInfo from './ProductInfo'

const ProductPanel = ({ product }) => {

    return (
        <Box sx={{ flexGrow: 1, background: "white" }}>
            <ProductInfo product={product} />
            <ProductButtons product={product}></ProductButtons>
        </Box >
    )
}

export default ProductPanel

