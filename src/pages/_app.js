
import React, { useEffect, useState } from 'react'

import axios from "axios";
import Head from 'next/head'
import SuperTokensReact from 'supertokens-auth-react'
import * as SuperTokensConfig from '../../config/frontendConfig'
import Session from 'supertokens-auth-react/recipe/session'
import { redirectToAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { AppProvider } from '../components/context'
import theme from '../assets/theme'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import { getUser } from '../lib/api/user'
import useUser from '../hooks/swrHooks/useUser'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../app/store'
import { getAuth, getCart } from '../app/store/selectors'
import { authLoginAdmin, authLoginUser } from '../app/store/authSlice'
import { cartSet } from '../app/store/cartSlice'

import createEmotionCache from '../lib/createEmotionCache'
import { CacheProvider } from '@emotion/react';

// eslint-disable-next-line
//import "swiper/css/bundle";
import "../styles/globals.css"
import { restartCategsss } from '../lib/init-db'
import { useAddOrderMutation } from '../app/store/services/baseApi';

Session.addAxiosInterceptors(axios);
//Material UI-Next.js
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

//restartCategsss()



/*
fetch('/api/orders/createOrder', {
  // Adding method type
  method: "POST",

  // Adding body or contents to send
  body: JSON.stringify({
    firstName: 'aaaaaaaaaaa',
    lastName: 'hola'
  }),

  // Adding headers to the request
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
*/
/*
axios.post('/api/orders/createOrder', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
//Supertokens logic
async function initNode() {
  const supertokensNode = await import('supertokens-node')
  const { backendConfig } = await import('../../config/backendConfig')
  supertokensNode.init(backendConfig())
}

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig())
} else {
  initNode().catch(console.error)
}

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  /*
    const [addOrder, result] = useAddOrderMutation()
    const handleSubmit = () => {
      //ev.preventDefault();
      //console.log('@@@@@@@@@@@@@@@@@@@', order)
      try {
        // const { result: ok, message } = await createOrder(order)
        addOrder(
          JSON.stringify({
            firstName: 'aaaaaaaaaaa',
            lastName: 'hola'
          })
        )
        // console.log('@@@@@@@@@@@@@@@@@@@', result)
        if (ok) {
          //console.log('@@@@@@@@@@@@@@@@@@@', order)
          localStorage.removeItem('cart')
          dispatch(cartSet([]))
          handleClickOpen()
        }
      } catch (error) {
        console.log('ERROR ADD ORDER EN CARRITO.JS', error)
      }
    };
  */
  //REDUX
  /*
    axios({
      method: 'post',
      url: '/api/orders/createOrder',
      data: {
        firstName: 'Finn',
        lastName: 'Williams'
      }
    }).then(console.log).catch(console.log)
  */
  const { isLogged, isAdmin, authId } = useSelector(getAuth)
  const { cartProducts } = useSelector(getCart)
  const { user, isLoading: isLoadingUser, isError: isErrorUser, mutate: mutateUser } = useUser(authId)
  //console.log(mutateUser)
  // console.log('## app ', user)
  //Guarda productos que se van añádiendo o quitando del carrito
  //const [cart, setCart] = React.useState([])


  const dispatch = useDispatch()

  //Supertokens logic
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === 'needs-refresh') {
        if (await Session.attemptRefreshingSession()) {
          location.reload()
        } else {
          // user has been logged out
          redirectToAuth()
        }
      }
    }
    doRefresh()

  }, [pageProps.fromSupertokens])

  useEffect(() => {
    /*
        addOrder(
          {
            firstName: 'aaaaaaaaaaa',
            lastName: 'hola',
          }
        )
        console.log('====================', result)
    */
    /*
        axios({
          method: 'post',
          url: '/api/orders/createOrder',
          data: {
            firstName: 'Finn',
            lastName: 'Williams'
          }
        }).then(console.log).catch(console.log)
    */

    const storedCart = JSON.parse(localStorage.getItem("cart"));
    storedCart && dispatch(cartSet(storedCart))
    const checkSession = async () => {
      //Si existe una sesión activa, la promesa devuelve true
      // setIsLogged(await Session.doesSessionExist())
      if (await Session.doesSessionExist()) {
        /**
             * Si el userId del usuario logado tiene asignado el rol de administrador, admin=true
             * userdId es el identificador de usuario en la bdd de supertokens. Se obtiene y se renombra a authID
             * authId es un identificador de usuario en la bdd de la app. Permite relacionar el usuario logado
             * con supertokens con su perfil de usuario en la bdd de la app.
             */
        const { admin, userId: authId } = await Session.getAccessTokenPayloadSecurely()
        //const info = state && await Session.getAccessTokenPayloadSecurely()
        //const user = await getUser(authId)
        //Convierte el valor admin en booleano porque, cuando no es true, devuelve undefined
        // setIsLogged({ state, admin: !!admin, authId: authId ? authId : '', user: user })
        //setIsLogged({ state: true, admin: !!admin, authId: authId ? authId : '' })
        //console.log('@@@@@@@@@@@@@@@@@@@@@@@@', admin)
        !!admin ? dispatch(authLoginAdmin(authId)) : dispatch(authLoginUser(authId))

      }


    }
    checkSession()
  }, [])
  /*
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
   
    }, [cart])
  */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts))

  }, [cartProducts])

  if (pageProps.fromSupertokens === 'needs-refresh') {
    return null
  }

  //const appProps = { authId: isLogged.authId, isLogged, setIsLogged, cart, setCart, user, isLoadingUser, isErrorUser, mutateUser }
  //const appProps = { cart, setCart, user, isLoadingUser, isErrorUser, mutateUser }
  const appProps = { user, isLoadingUser, isErrorUser, mutateUser }

  pageProps.hola = 'adios'

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="google-site-verification" content="zbvzA8Zrgps5RRh86gp797a6HsdJkBRhP5vY0K0KkjQ" />
        <title>Sevimatic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppProvider {...appProps}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {
            //pageProps solo bajan a la página que entra como Component, si quieres alguna pageProp
            // en algún componente de la página, o lo baja esa página como prop al componente
            //o el componente lo pilla directamente de un provider como AppProvider
          }
          <Component id={'aa'} {...pageProps} />
        </ThemeProvider >
      </AppProvider>
    </CacheProvider>



  )
}

//export default App

export default wrapper.withRedux(App)

