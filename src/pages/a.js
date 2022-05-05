import { Counter } from "../features/counter/Counter"
import { wrapper } from "../app/store"
import { increment, incrementByAmount } from "../features/counter/counterSlice"

const A = ({ prueba }) => {
    return (
        <Counter a={prueba}></Counter>
    )
}

export default A

/*
export async function getStaticProps(context) {
    console.log('@@@@@@@@@@@@@@@', context.params)


    return {
        props: { prueba: 'prueba' }, // will be passed to the page component as props

    }

}
*/
export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
    //  store.dispatch(serverRenderClock(true))
    store.dispatch(incrementByAmount(15))
    // console.log('ST', store)

    return {
        props: { prueba: 'prueba' }, // will be passed to the page component as props

    }
})
