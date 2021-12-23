import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"



import Box from "@mui/system/Box";
import useForm from "../../hooks/useForm";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'
import { getCategories } from "../../lib/api/category";
import { toPlainString } from "../../lib/utils/stringTools";
import FormTemplate from "../elements/FormTemplate"

const NewCategsForm = ({ onSubmit, error }) => {

    const { formValue, handleChange, handleSubmit, setFormValue } = useForm({
        category_1_isNew: false,
        category_1: '',
        category_2: '',


    });

    const { category_1, category_2, category_1_isNew } = formValue;

    const [categories, setCategories] = React.useState({
        categories_1: [],
        categories_2: [],

    })

    const { categories_1, categories_2 } = categories

    const [isNew, setIsNew] = React.useState(true);


    const isFirstRender = React.useRef(true)

    //Tras el primer render, setea las categorías de nivel 1
    React.useEffect(() => {
        setCategs({ level: 1 }, 'categories_1')
    }, [])

    /**
     * CUando 
     */

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setFormValue({
            ...formValue,
            category_1: '',
            category_1_isNew: !category_1_isNew
        })

    }, [isNew])



    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del backend
     */
    const setCategs = async (filter, categoriesToChange) => {
        const res = await getCategories(filter)
        const newArray = res.map(category => category.name)
        console.log('query  1', res)
        await setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
        console.log('cattt', categories)
    }

    error && console.log('HAY ERROR ', error)


    const column1Elements = (
        <Box>
            <FormControl component='fieldset' variant="standard" margin='normal'>
                <FormLabel component="legend">Añadir categoria de nivel 1</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={isNew}
                                onChange={e => setIsNew(e.target.checked)}
                            />
                        }
                        label='Usar categoría de nivel 1 existente'
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                // classes={lovelyStyles}
                                checked={!isNew}
                                onChange={e => setIsNew(!e.target.checked)}
                            />
                        }
                        label='Crear nueva categoría de nivel 1'
                        labelPlacement="end"
                    />
                    {isNew ?
                        <FormControl size="small" fullWidth>
                            <InputLabel >Seleccione la categoría 1</InputLabel>
                            <Select
                                required
                                labelId="cat1-label"
                                id="cat1"
                                name='category_1'
                                value={category_1}
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
                            fullWidth
                            size="small"
                            label="Nombre de la categoría 2"
                            variant="outlined"
                            name='category_2'
                            onChange={handleChange}
                            value={category_1}
                        />
                    }
                </FormGroup>
            </FormControl>
        </Box>
    )

    const column2Elements = (
        <Box>
            <FormControl component='fieldset' variant="standard" margin='normal'>
                <FormLabel component="legend">Añadir categoria de nivel 2</FormLabel>
                <FormGroup>
                    <TextField

                        autoComplete='off'
                        fullWidth
                        size="small"
                        label="Nombre de la categoría 2"
                        variant="outlined"
                        name='category_2'
                        onChange={handleChange}
                        value={category_2}
                    />

                </FormGroup>
            </FormControl>
        </Box>

    )
    const fullWidthElements = (
        <Box>

            <FormControl component='fieldset' variant="standard" margin='normal'>
                <Button type="submit" >Crear Categoría</Button>
                <SaveAndLoadButton></SaveAndLoadButton>
            </FormControl>

            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}
        </Box>
    )

    const onSubmitProp = handleSubmit(onSubmit)

    return (
        <FormTemplate
            onSubmit={onSubmitProp}
            sx={{
                backgroundColor: 'dimGray',
                '& .MuiFormControl-root': { mb: 2, width: '100%' },
                '& .MuiTextField-root': { mb: 2, width: '100%' }
            }}
            column1Elements={column1Elements}
            column2Elements={column2Elements}
            fullWidthElements={fullWidthElements}
        />


    )
}

export default NewCategsForm