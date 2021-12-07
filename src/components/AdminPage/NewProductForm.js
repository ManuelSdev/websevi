import { Button, Container, Grid, Input, InputLabel, MenuItem, Select, TextField, FormControl } from "@mui/material"
import { Box } from "@mui/system";

import useForm from "../../hooks/useForm";
import InputFile from "../elements/InputFile";
import { getCategs } from "../../lib/api/categorie";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'

const NewProductForm = ({ onSubmit, error }) => {

    const { formValue: product, handleChange, handleSubmit, validate, setFormValue } = useForm({
        name: '',
        brand: '',
        price: "",
        ean: "",
        categorie_1: '',
        categorie_2: '',
        categorie_3: '',
        description: '',
        images: null,
    });

    const [categories, setCategories] = React.useState({
        categories_1: [],
        categories_2: [],
        categories_3: []
    })

    const { name, brand, price, categorie_1, categorie_2, categorie_3, ean, description } = product;
    const { categories_1, categories_2, categories_3 } = categories

    const firstRenderForCateg_2 = React.useRef(true);
    const firstRenderForCateg_3 = React.useRef(true);

    //Tras el primer render, setea las categorías de nivel 1

    const useEffect_1 = () => {
        console.log('USE 1')
        setCategs({ level: 1 }, 'categories_1', 'cat 1')
    }
    React.useEffect(useEffect_1, [])
    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_1
     * Mantiene el valor del formulario product salvo el valor de categorie_2
     * y categorie_3, que vuelven a ser ''
     */

    const useEffect_2 = () => {
        console.log('USE 2')
        if (firstRenderForCateg_2.current) {
            firstRenderForCateg_2.current = false;
            return;
        }

        setCategs({ path: categorie_1 }, 'categories_2', 'cat 2')

        setFormValue({
            ...product,
            categorie_2: '',
            categorie_3: ''
        })
    }
    React.useEffect(useEffect_2, [categorie_1])
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
        if (categorie_2 === '') return

        setCategs({ path: categorie_2 }, 'categories_3', 'cat 3')
        setFormValue({
            ...product,
            categorie_3: ''
        })
    }
    React.useEffect(useEffect_3, [categorie_2])
    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del back
     */
    const setCategs = async (filter, categoriesToChange, renderBy) => {
        // console.log('RENDER DE ', renderBy)
        const query = await getCategs(filter)
        const newArray = query.map(categorie => categorie._id)

        //  console.log(`QUERY DE ${renderBy}`, query)
        setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
        //console.log('cattt', categories)
    }




    error && console.log('HAY ERROR ', error)

    return (
        <Container component='form' onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={2} columns={2}>
                <Grid item container spacing={2} xs={6} sm={4} md={3} lg={1} >
                    <Grid item xs={6} sm={4} md={3} lg={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Nombre del producto"
                            variant="outlined"
                            name='name'
                            onChange={handleChange}
                            value={name}
                        />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={12}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Marca"
                            variant="outlined"
                            name='brand'
                            onChange={handleChange}
                            value={brand}

                        />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={12}>
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
                </Grid>

                <Grid item container spacing={2} xs={6} sm={4} md={3} lg={1} >
                    <Grid item xs={6} sm={4} md={3} lg={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="cat1-label">Categoría 1</InputLabel>
                            <Select
                                //required
                                labelId="cat1-label"
                                id="cat1"
                                name='categorie_1'
                                value={categorie_1}
                                label="Categoría 1"
                                onChange={handleChange}
                            >
                                {categories_1.map(categ =>
                                    <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                                )}
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="cat2-label">Categoría 2</InputLabel>
                            <Select
                                labelId="cat2-label"
                                id="cat2"
                                name='categorie_2'
                                value={categorie_2}
                                label="Categoría 2"
                                onChange={handleChange}
                            >
                                {categories_2.map(categ =>
                                    <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                                )}
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="cat-label">Categoría 3</InputLabel>
                            <Select
                                labelId="cat3-label"
                                id="cat3"
                                name='categorie_3'
                                value={categorie_3}
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

                <Grid item xs={6} sm={4} md={3} lg={12} >
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
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12}>
                    <TextField
                        size="small"
                        label="Precio"
                        variant="outlined"
                        type='number'
                        name='price'
                        value={price}
                        onChange={handleChange}
                    />

                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12} >
                    <InputFile
                        //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                        //y que salga el aviso de mui
                        name="images"
                        accept="image/*" id="contained-button-file"
                        // editableSrc={product?.images ?? null}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12}>
                    <Button type="submit" >Subir anuncio</Button>
                    <SaveAndLoadButton></SaveAndLoadButton>
                </Grid>
                {/**TODO: refina el tema de errores */}
                {error && <Box>{error}</Box>}
            </Grid>

        </Container>

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