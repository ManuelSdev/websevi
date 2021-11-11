import React from 'react';
import useStateWithCb from './useStateWithCb';



/**
 * Los nombres de las claves responden a los nombres de los event.target.type que 
 * se usan en los formularios de la app
 * El valor de cada clave es una función que recibirá un objeto event.target del cual
 * toma y devuelve solo la propiedad que contiene el dato final que nos interesa para pasarlo
 * al objeto/estado formValue que enviamos en la petición al back
 * 
 * Así, el método getValueByType[event.target.type] devolverá la función que solo devuelve
 * la propiedad que nos interesa de cada target.type
 * 
 * Esta función según el type se guarda en const valueGetter, que es a la que finalmente llamamos
 * pasandole el objeto target "entero" para que saque solo la propiedad/valor que nos interesa
 */
const getValueByType = {
  checkbox: ({ checked }) => checked,

  number: ({ value }) => Number(value),

  'select-multiple': ({ selectedOptions }) =>
    [...selectedOptions].map(({ value }) => value),

  radio: ({ value }) => value === "sell" ? true : false,

  file: ({ files }) => files[0] || null,

};

const defaultGetValue = ({ value }) => value;

function useForm(initialFormValue) {

  //const [formValue, setFormValue] = React.useState(initialFormValue);
  const [formValue, setFormValue] = useStateWithCb(initialFormValue)
  const updateFormValue = (name, value) => {
    setFormValue(currentFormValue => ({

      ...currentFormValue,
      [name]: value,
    }));

    /*
     setFormValue(currentFormValue => {
       // const a = [name]
       // console.log("00000000000000000", name);
       //console.log("11111111111111111", value);
       currentFormValue[name] = value;
 
       //console.log("222222222222222222", currentFormValue);
       return { ...currentFormValue }
     });
 */

  };
  /*
    React.useEffect(() => {
      console.log("USE EFFECT DE useFORM : CAMBIO EN formValue y pasan a ser: ", formValue)
    }, [formValue]);
  */
  const handleChange = ev => {
    //console.log("EVENT TARGET")
    // console.log("EVENT TARGET TYPE", ev.target.value)
    //console.log("EVENT TARGET NAME", ev.target.name)
    // console.log("EVENT TARGET TYPE", ev.target.type)
    // console.log("llamada a handleChange de useForm")
    const valueGetter = getValueByType[ev.target.type] || defaultGetValue;
    updateFormValue(ev.target.name, valueGetter(ev.target));
    //console.log("EVENT TARGET NAME", ev.target.name)
    //console.log("VALOR VALUE GETTER", valueGetter(ev.target))
    //console.log("FORM VALUE", formValue)

  };

  const handleSubmit = onSubmit => ev => {
    // console.log("9999999999999999999999999999999999", formValue)
    ev.preventDefault();
    onSubmit(formValue);
  };
  /**
   * El método every de un array devuelve una función que recibé como parametro true si todos
   * los elementos del array son true
   * const validate recibira como párametros las distintas funciones de validación de los valores
   * RECUERDA: (...validations) es REST PARAMETERS y guardará en el array validations todos los 
   * parametros de entrada que no se declaran explicitamente
   * map toma el array con las distintas funciones de validación y las ejecuta pasando el objeto/estado formValue entero
   * CLAVE: las funciones de validación reciben el objeto formValue entero y cada una extrae la propiedad que valida
   * y trabaja con ella y devuelve el valor que comprueba every()
   *  EJ: const validName = ({ name }) => name;
   *    si name="", every lo tomará como false, devolverá false y validate será false
   */
  const validate = (...validations) =>
    validations.map(validation => validation(formValue)).every(valid => valid);

  return {
    formValue,
    setFormValue,
    handleChange,
    handleSubmit,
    validate,
  };
}

export default useForm;
