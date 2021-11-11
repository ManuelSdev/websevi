import React, { useEffect, useRef, useState } from "react";

//import React from 'react'

function useStateWithCb(initialState) {

    const [state, setState] = useState(initialState);
    const callbackRef = useRef(null)
    /*
    console.log("ACTIVA HOOK!!!!!!!!!!!")
    console.log(state)
    console.log(callbackRef.current)
*/
    const handleSetState = (updatedState, cb) => {
        /*
        console.log("VIEJO STATE", state)
        console.log("UPDATE STATE", updatedState)
        console.log("CALLBACK RECIBIDA", cb)
        */
        //cb()
        callbackRef.current = cb ? cb : null;
        setState(updatedState);
        //console.log("=========================================================================", state)

    };

    useEffect(() => {
        //console.log(callbackRef.current)
        // console.log("USE EFFECT DEL HOOK")

        if (callbackRef.current !== null) {
            //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", state)
            callbackRef.current(state);
            callbackRef.current = null;
            //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", state)
        }

    }, [state]);


    return [state, handleSetState];
}


export default useStateWithCb

/**
 *  Si creo esta función
 * const fn =a=>b=>{
 *   console.log(a)
 *   console.log(b)
 * }
 * A) fn("hola") es una funcion que acepta un parámetro "b" y ejecuta console.log("hola") y luego console.log(b)
 * b) La ejecución completa sería fn("hola") ("adios")
 *
 *
 */