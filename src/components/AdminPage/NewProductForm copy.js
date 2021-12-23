import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Box from "@mui/system/Box";

import useForm from "../../hooks/useForm";
import InputFile from "../elements/InputFile";
import { getCategories } from "../../lib/api/category";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'
import FormTemplate from "../elements/FormTemplate"

const NewProductForm = ({ onSubmit, error }) => {

    const { formValue: product, handleChange, handleSubmit, validate, setFormValue } = useForm({
        name: '',
        brand: '',
        price: "",
        ean: "",
        category_1: '',
        category_2: '',
        category_3: '',
        description: '',
        images: null,
    });

    const [categories, setCategories] = React.useState({
        categories_1: [],
        categories_2: [],
        categories_3: []
    })

    const { name, brand, price, category_1, category_2, category_3, ean, description } = product;
    const { categories_1, categories_2, categories_3 } = categories

    const firstRenderForCateg_2 = React.useRef(true);
    const firstRenderForCateg_3 = React.useRef(true);

    //Tras el primer render, setea las categorías de nivel 1

    const useEffect_1 = () => {
        //console.log('USE 1')
        setCategs({ level: 1 }, 'categories_1', 'cat 1')
    }
    React.useEffect(useEffect_1, [])
    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_1
     * Mantiene el valor del formulario product salvo el valor de categorie_2
     * y categorie_3, que vuelven a ser ''
     */

    const useEffect_2 = () => {
        // console.log('USE 2')
        if (firstRenderForCateg_2.current) {
            firstRenderForCateg_2.current = false;
            return;
        }

        setCategs({ path: category_1 }, 'categories_2', 'cat 2')

        setFormValue({
            ...product,
            category_2: '',
            category_3: ''
        })
    }
    React.useEffect(useEffect_2, [category_1])
    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_2, siempre que 
     * este cambio sea del string vacío "" a cualquier otro string no vacío. Esta condición
     * evita lanzar este useEffect cuando, el useEffect de arriba, setea categorie_2 a ""
     * Mantiene el valor del formulario product salvo el valor de categorie_3, que vuelve a ser ""
     */

    const useEffect_3 = () => {
        console.log('USE 3')
        if (firstRenderForCateg_3.current) {
            firstRenderForCateg_3.current = false;
            return;
        }
        if (category_2 === '') return

        setCategs({ path: category_2 }, 'categories_3', 'cat 3')
        setFormValue({
            ...product,
            category_3: ''
        })
    }
    React.useEffect(useEffect_3, [category_2])
    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del back
     */
    const setCategs = async (filter, categoriesToChange, renderBy) => {
        // console.log('RENDER DE ', renderBy)
        const query = await getCategories(filter)
        const newArray = query.map(category => category._id)

        //  console.log(`QUERY DE ${renderBy}`, query)
        setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
        //console.log('cattt', categories)
    }




    error && console.log('HAY ERROR ', error)

    return (
        <Container
            component='form'
            sx={{
                backgroundColor: 'dimGray',
                '& .MuiFormControl-root': { mb: 2, width: '100%' },
                '& .MuiTextField-root': { mb: 2, width: '100%' }
            }}
            onSubmit={handleSubmit(onSubmit)}>

            <Grid sx={{ backgroundColor: 'beige', }} container spacing={3} columns={2}>
                <Grid item xs={6} sm={4} md={3} lg={1} >

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

                </Grid>



                <Grid sx={{ backgroundColor: 'floralWhite' }} item xs={6} sm={4} md={3} lg={1} >

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

                    <FormControl size="small" fullWidth>
                        <InputLabel id="cat-label">Categoría 3</InputLabel>
                        <Select
                            labelId="cat3-label"
                            id="cat3"
                            name='category_3'
                            value={category_3}
                            label="Categoría 3"
                            onChange={handleChange}
                        >
                            {categories_3.map(categ =>
                                <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


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


        </Container >

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