import ProductsGrid from "./ProductsGrid";
import FiltersBar from "../filtersSideBar/FiltersBar";
import SidebarLayout from "../layouts/SidebarLayout";
import ProductsTopBar from "./ProductsTopBar";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import {useEffect} from "react";

const ProductsSection = ({products: prods, ...props}) => {
  const [products, setProducts] = useState([]);
  useEffect;
  useEffect(() => {
    setProducts([...prods]);

    return () => {
      setProducts([]);
    };
  }, [prods]);

  console.log("###### PRODUCTOS", products);
  const compareLower = (a, b) => a - b;
  const sortLower = () => {
    const sorted = products.sort((a, b) => a.price - b.price);
    return setProducts([...sorted]);
  };

  const sortHigher = () => {
    const sorted = products.sort((a, b) => b.price - a.price);
    return setProducts([...sorted]);
  };
  const handleClick = (key) => {
    switch (key) {
      case 1:
        return () => sortLower();
        break;
      case 2:
        return () => sortHigher();

        break;
    }
  };
  return (
    <SidebarLayout
      elevationPaper={0}
      sidebar={
        <Paper sx={{mb: 15}}>
          <FiltersBar {...props} />
        </Paper>
      }
      content={
        <>
          <ProductsTopBar
            handleSort={handleClick}
            {...props}
          />
          <ProductsGrid
            products={products}
            {...props}
          />
        </>
      }
    />
  );
};
export default ProductsSection;
