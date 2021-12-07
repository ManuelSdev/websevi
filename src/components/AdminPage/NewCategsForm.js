import { Button, Container, Grid, Input, InputLabel, MenuItem, Select, TextField, FormControl, Stack, Typography, Switch, FormGroup, FormControlLabel, FormLabel } from "@mui/material"
import { Box } from "@mui/system";
import useForm from "../../hooks/useForm";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'
import { getCategs } from "../../lib/api/categorie";
import toPlainString from "../../lib/utils/plainString";

const NewCategsForm = ({ onSubmit, error }) => {

    const { formValue, handleChange, handleSubmit, setFormValue } = useForm({
        categ_1_isNew: false,
        categ_2_isNew: false,
        categorie_1: '',
        categorie_2: '',
        categorie_3: '',


    });

    const { categorie_1, categorie_2, categorie_3, categ_1_isNew, categ_2_isNew } = formValue;

    const [categories, setCategories] = React.useState({
        categories_1: [],
        categories_2: [],
        categories_3: []
    })

    const { categories_1, categories_2, categories_3 } = categories

    const [toggled_1, setToggled_1] = React.useState(true);
    const [toggled_2, setToggled_2] = React.useState(true);

    const firstRenderForCateg_2 = React.useRef(true);
    const firstRenderForCateg_3 = React.useRef(true);

    const firstRenderFor = React.useRef({
        categ_1: true,
        categ_2: true,
        toggled_1: true,
        toggled_2: true
    })

    //Tras el primer render, setea las categorías de nivel 1
    React.useEffect(() => {
        setCategs({ level: 1 }, 'categories_1')
    }, [])

    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_1
     * Mantiene el valor del formulario product salvo el valor de categorie_2, que vuelve a ser ''
     */
    React.useEffect(() => {
        if (firstRenderFor.current.categ_2) {
            firstRenderFor.current.categ_2 = false;
            return;
        }
        if (!toggled_1) return
        setFormValue({
            ...formValue,
            categorie_2: '',
            categorie_3: ''
        })
        setCategs({ path: toPlainString(categorie_1) }, 'categories_2')
    }, [categorie_1])

    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia categorie_2
     * Mantiene el valor del formulario product salvo el valor de categorie_3, que vuelve a ser ''
     */
    React.useEffect(() => {
        if (firstRenderFor.current.categ_3) {
            firstRenderFor.current.categ_3 = false;
            return;
        }
        if (!toggled_2 || categorie_2 === '') return
        setFormValue({
            ...formValue,
            categorie_3: ''
        })
        setCategs({ path: toPlainString(categorie_2) }, 'categories_3')
    }, [categorie_2])


    React.useEffect(() => {
        if (firstRenderFor.current.toggled_1) {
            firstRenderFor.current.toggled_1 = false;
            return;
        }
        setFormValue({
            ...formValue,
            categorie_1: '',
            categ_1_isNew: !categ_1_isNew
        })
        !toggled_1 && setToggled_2(false)
    }, [toggled_1])

    React.useEffect(() => {
        if (firstRenderFor.current.toggled_2) {
            firstRenderFor.current.toggled_2 = false;
            return;
        }
        setFormValue({
            ...formValue,
            categorie_2: '',
            categ_2_isNew: !categ_2_isNew
        })
    }, [toggled_2])

    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del backend
     */
    const setCategs = async (filter, categoriesToChange) => {
        const query = await getCategs(filter)
        const newArray = query.map(categorie => categorie.name)
        console.log('query  1', query)
        await setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
        console.log('cattt', categories)
    }

    error && console.log('HAY ERROR ', error)


    return (
        <Container maxWidth='xs' component='form' onSubmit={handleSubmit(onSubmit)}>
            <FormControl component='fieldset' variant="standard" margin='normal'>
                <FormLabel component="legend">Añadir categoria de nivel 1</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={toggled_1}
                                onChange={e => setToggled_1(e.target.checked)}
                            />
                        }
                        label='Usar categoría de nivel 1 existente'
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={!toggled_1}
                                onChange={e => setToggled_1(!e.target.checked)}
                            />
                        }
                        label='Crear nueva categoría de nivel 1'
                        labelPlacement="start"
                    />
                    {toggled_1 ?
                        <FormControl size="small" fullWidth>
                            <InputLabel >Seleccione la categoría 1</InputLabel>
                            <Select
                                required
                                labelId="cat1-label"
                                id="cat1"
                                name='categorie_1'
                                value={categorie_1}
                                label="Seleccione la categoría 1"
                                onChange={handleChange}
                            >
                                {categories_1.map(categ =>
                                    <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        :
                        <TextField
                            autoComplete='off'
                            required
                            fullWidth
                            size="small"
                            label='Nombre de la categoría 1'
                            variant="outlined"
                            name='categorie_1'
                            onChange={handleChange}
                            value={categorie_1}
                        />
                    }

                </FormGroup>
            </FormControl>

            <FormControl component='fieldset' variant="standard" margin='normal'>
                <FormLabel component="legend">Añadir categoria de nivel 2</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={toggled_2}
                                onChange={e => toggled_1 && setToggled_2(e.target.checked)}
                            />
                        }
                        label='Usar categoría de nivel 2 existente'
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={!toggled_2}
                                onChange={e => toggled_1 && setToggled_2(!e.target.checked)}
                            />
                        }
                        label='Crear nueva categoría de nivel 2'
                        labelPlacement="start"
                    />
                    {toggled_2 ?
                        <FormControl size="small" fullWidth>
                            <InputLabel >Seleccione la categoría 2</InputLabel>
                            <Select
                                //required
                                labelId="cat2-label"
                                id="cat2"
                                name='categorie_2'
                                value={categorie_2}
                                label="Seleccione la categoría 2"
                                onChange={handleChange}
                            >
                                {categories_2.map(categ =>
                                    <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        :

                        <TextField
                            autoComplete='off'
                            fullWidth
                            size="small"
                            label="Nombre de la categoría 2"
                            variant="outlined"
                            name='categorie_2'
                            onChange={handleChange}
                            value={categorie_2}
                            margin='dense'
                        />
                    }

                </FormGroup>
                {/**TODO: afina este margen.... */}
                <FormControl component='fieldset' variant="standard" margin='normal'>
                    <FormLabel component="legend">Añadir categoria de nivel 3</FormLabel>
                    <FormGroup>
                        <TextField
                            margin='dense'
                            autoComplete='off'
                            fullWidth
                            size="small"
                            label="Nombre de la categoría 3"
                            variant="outlined"
                            name='categorie_3'
                            onChange={handleChange}
                            value={categorie_3}
                        />

                    </FormGroup>
                </FormControl>
            </FormControl>



            <FormControl component='fieldset' variant="standard" margin='normal'>
                <Button type="submit" >Crear Categoría</Button>
                <SaveAndLoadButton></SaveAndLoadButton>
            </FormControl>





            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}


        </Container >

    )
}

export default NewCategsForm