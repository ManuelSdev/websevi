import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

import FormControl from "@mui/material/FormControl"

import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField"

import useForm from "../../hooks/useForm";
import InputFile from "../elements/InputFile";
import { getCategories } from "../../lib/api/category";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'
import FormTemplate from "../elements/FormTemplate"
import { toPlainString } from "../../lib/utils/stringTools"

const NewProductForm = ({ onSubmit, error }) => {

    const { formValue: product, handleChange, handleSubmit, validate, setFormValue } = useForm({
        name: '',
        brand: '',
        price: "",
        ean: "",
        category_1: '',
        category_2: '',
        description: '',
        images: null
    });

    const [categories, setCategories] = React.useState({
        categories_1: [],
        categories_2: []
    })

    const { name, brand, price, category_1, category_2, ean, description } = product;
    const { categories_1, categories_2 } = categories

    const firstRender = React.useRef(true);


    //Tras el primer render, setea las categorías de nivel 1
    React.useEffect(() => {
        setCategs({ level: 1 }, 'categories_1')
    }, []);

    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_1
     * Mantiene el valor del formulario product salvo el valor de categorie_2
     * y categorie_3, que vuelven a ser ''
     */
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        setCategs({ parent: toPlainString(category_1) }, 'categories_2')

        setFormValue({
            ...product,
            category_2: ''
        })
    }, [category_1]);

    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del back
     */
    const setCategs = async (filter, categoriesToChange) => {
        const res = await getCategories(filter)
        const newArray = res.map(category => category.name)
        setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
    }

    //const onSubmitProp = handleSubmit(onSubmit)

    const column1Elements = (
        <Box>
            <TextField
                fullWidth
                size="small"
                label="Nombre del producto"
                variant="outlined"
                name='name'
                onChange={handleChange}
                value={name}
            />
            <TextField
                fullWidth
                size="small"
                label="Marca"
                variant="outlined"
                name='brand'
                onChange={handleChange}
                value={brand}

            />
            <TextField
                fullWidth
                size="small"
                label="Código EAN"
                variant="outlined"
                type='number'
                name='ean'
                onChange={handleChange}
                value={ean}
            />
        </Box>
    )

    const column2Elements = (
        <Box>
            <FormControl size="small" fullWidth>
                <InputLabel id="cat1-label">Categoría 1</InputLabel>
                <Select
                    //required
                    labelId="cat1-label"
                    id="cat1"
                    name='category_1'
                    value={category_1}
                    label="Categoría 1"
                    onChange={handleChange}
                >
                    {categories_1.map(categ =>
                        <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                    )}
                </Select>
            </FormControl>


            <FormControl size="small" fullWidth>
                <InputLabel id="cat2-label">Categoría 2</InputLabel>
                <Select
                    labelId="cat2-label"
                    id="cat2"
                    name='category_2'
                    value={category_2}
                    label="Categoría 2"
                    onChange={handleChange}
                >
                    {categories_2.map(categ =>
                        <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                    )}
                </Select>
            </FormControl>

        </Box>
    )

    const fullWidthElements = (
        <Box>
            <TextField
                fullWidth
                multiline
                size="small"
                label="Descripción"
                variant="outlined"
                name='description'
                value={description}
                onChange={handleChange}
            />

            <TextField
                size="small"
                label="Precio"
                variant="outlined"
                type='number'
                name='price'
                value={price}
                onChange={handleChange}
            />


            <InputFile
                //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                //y que salga el aviso de mui
                name="images"
                accept="image/*" id="contained-button-file"
                // editableSrc={product?.images ?? null}
                onChange={handleChange}
            />

            <Button type="submit" >Subir anuncio</Button>
            <SaveAndLoadButton></SaveAndLoadButton>

            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}
        </Box>
    )
    error && console.log('HAY ERROR ', error)

    return (
        <FormTemplate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                //backgroundColor: 'dimGray',
                '& .MuiFormControl-root': { mb: 2, width: '100%' },
                '& .MuiTextField-root': { mb: 2, width: '100%' }
            }}
            column1Elements={column1Elements}
            column2Elements={column2Elements}
            fullWidthElements={fullWidthElements}
        />

    )
}

export default NewProductForm


/*
 <label htmlFor="contained-button-file">
  <Input
                            name="images"
                            accept="image/*" id="contained-button-file" style={{ display: 'none' }} type="file" />
                        <Button variant="contained" component="span">
                            Cargar imagen
                        </Button>
                    </label>
                    */


/*
const handleChange = ev => {
console.log("EVENT ", ev.target)
// console.log("EVENT TARGET TYPE", ev.target.value)
//console.log("EVENT TARGET NAME", ev.target.name)
// console.log("EVENT TARGET TYPE", ev.target.type)
// console.log("llamada a handleChange de useForm")

//const valueGetter = getValueByType[ev.target.type] || defaultGetValue;
//updateFormValue(ev.target.name, valueGetter(ev.target));

//console.log("EVENT TARGET NAME", ev.target.name)
//console.log("VALOR VALUE GETTER", valueGetter(ev.target))
//console.log("FORM VALUE", formValue)

};
*/