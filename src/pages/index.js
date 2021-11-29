
import styles from '../styles/Home.module.css'
import IconCorpName from '../components/elements/IconCorpName';
import GridCard from '../components/modules/productGrid/GridCard';
import ProductsGrid4 from "../components/modules/productGrid/ProductsGrid"
import { Container } from '@mui/material';
import MainMosaic from '../components/elements/MainMosaic';
import fs from 'fs'
import deco from '../../decode'
import { test, csv } from '../../xmlToObject';



console.log(unescape('sPerif&#xE9;ricos'))


export default function Home({ pp, o }) {
  //o(console.log)
  console.log(pp)
  return (

    // <div className={styles.container}>
    <div>

      <MainMosaic />
      <Container>
        <ProductsGrid4></ProductsGrid4>
      </Container>
      {pp}
    </div>
  )
}




//console.log(a)
export async function getStaticProps() {
  // const b = () => csv()
  // console.dir(csv())
  test(console.log)
  return {
    props: {
      pp: 'holiii',

    }
  }
}