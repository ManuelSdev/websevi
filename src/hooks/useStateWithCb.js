import React, { useEffect, useRef, useState } from "react";

//Permite usar el hook useState (asincróno) pasando una callback 
//y asegura que la callback solo se ejecuta una vez modificado el estado
function useStateWithCb(initialState) {
    const [state, setState] = useState(initialState);
    const callbackRef = useRef(null)
    const handleSetState = (updatedState, cb) => {
        callbackRef.current = cb ? cb : null;
        setState(updatedState);
    };

    useEffect(() => {
        if (callbackRef.current !== null) {
            callbackRef.current(state);
            callbackRef.current = null;
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