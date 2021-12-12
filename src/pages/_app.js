
import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import SuperTokensReact from 'supertokens-auth-react'
import * as SuperTokensConfig from '../../config/frontendConfig'
import Session from 'supertokens-auth-react/recipe/session'
import { redirectToAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { AppProvider } from '../components/context'
//import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

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


function App({ Component, pageProps }) {

  const [isLogged, setIsLogged] = React.useState({ state: false, admin: false })
  //cart =[{}]
  //Guarda productos que se van añádiendo o quitando del carrito
  const [cart, setCart] = React.useState([])
  /*
    const firstRender = React.useRef(true);
  
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
    }
  
  
    }, [cart])
  */

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
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    storedCart && setCart(storedCart)
    console.log('STOREDDDD', storedCart)
    //
    const checkSession = async () => {

      //Si existe una sesión activa, la promesa devuelve true
      // setIsLogged(await Session.doesSessionExist())
      const state = await Session.doesSessionExist()
      console.log('SESIOONNNN ++++++++++++++', state)

      const { admin } = state && await Session.getAccessTokenPayloadSecurely()
      const info = state && await Session.getAccessTokenPayloadSecurely()
      // console.log('INFO EN FRONT @@@@@@@@@@@@@@', info)
      //Convierte el valor admin en booleano porque, cuando no es true, devuelve undefined
      setIsLogged({ state, admin: !!admin })

    }
    checkSession()
  }, [])

  useEffect(() => {
    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart])

  if (pageProps.fromSupertokens === 'needs-refresh') {
    return null
  }
  //console.log('@@@@@@@@@@@@@@@@@@@@', cart)

  const appProps = { isLogged, cart, setCart }
  //pageProps.isLogged = isLogged
  // pageProps.cart = [...cart]
  //pageProps.setCart = setCart
  pageProps.hola = "hola"
  //console.log('LOGIN', isLogged)
  return (
    <>

      <Head>
        <meta name="google-site-verification" content="zbvzA8Zrgps5RRh86gp797a6HsdJkBRhP5vY0K0KkjQ" />
        <title>Sevimatic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppProvider {...appProps}>
        <Component {...pageProps} />
      </AppProvider>





    </>
  )

}

export default App

