
import styles from '../styles/Home.module.css'
import IconCorpName from '../components/IconCorpName';
import GridCard from '../components/GridCard';
import ProductsGrid from "../components/ProductsGrid"
import { Container } from '@mui/material';
import MainMosaic from '../components/MainMosaic';
export default function Home() {
  return (

    // <div className={styles.container}>
    <div>
      <MainMosaic />
      <Container>
        <ProductsGrid></ProductsGrid>
      </Container>






    </div>
  )
}
