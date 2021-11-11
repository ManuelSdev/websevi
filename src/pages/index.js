
import styles from '../styles/Home.module.css'
import IconCorpName from '../components/elements/IconCorpName';
import GridCard from '../components/modules/productGrid/GridCard';
import ProductsGrid from "../components/modules/productGrid/ProductsGrid"
import { Container } from '@mui/material';
import MainMosaic from '../components/elements/MainMosaic';
import fs from 'fs'
import deco from '../../decode'
import { test } from '../../xmlToObject';



console.log(unescape('sPerif&#xE9;ricos'))


export default function Home({ pp }) {

  return (

    // <div className={styles.container}>
    <div>

      <MainMosaic />
      <Container>
        <ProductsGrid></ProductsGrid>
      </Container>
      {pp}
    </div>
  )
}




//console.log(a)
export async function getStaticProps() {
  //const b = test()
  //console.dir(test())
  //test(console.log)
  return {
    props: {
      pp: 'holiii'
    }
  }
}