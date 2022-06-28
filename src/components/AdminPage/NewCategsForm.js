import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from "@mui/system/Box";
import useForm from "../../hooks/useForm";
import React from "react";
import { getCategories } from "../../lib/api/category";
import FormTemplate from "../elements/FormTemplate"
import { Typography } from "@mui/material"

const NewCategsForm = ({ onSubmit, error }) => {

    const { formValue, handleChange, handleSubmit, setFormValue } = useForm({
        category_1_isNew: false,
        category_1: '',
        category_2: '',
        fields: ''
    });

    const { category_1, category_2, category_1_isNew, fields } = formValue;

    const [categories, setCategories] = React.useState({
        categories_1: [],
    })

    const { categories_1 } = categories

    const [isNew, setIsNew] = React.useState(true);

    const isFirstRender = React.useRef(true)

    //Tras el primer render, setea las categorías de nivel 1
    React.useEffect(() => {
        //Uso de función cleanUP
        let mounted = true;
        mounted && setCategs({ level: 1 }, 'categories_1')
        return () => {
            mounted = false;
        };
    }, [])

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        let mounted = true;
        mounted && setFormValue({
            ...formValue,
            category_1: '',
            category_1_isNew: !category_1_isNew
        })
        return () => {
            mounted = false;
        };
    }, [isNew])

    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del backend
     */
    const setCategs = async (filter, categoriesToChange) => {
        const res = await getCategories(filter)
        const newArray = res.map(category => category.name)
        await setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
    }

    error && console.log('HAY ERROR ', error)

    const column1Elements = (
        <Box>
            <FormControl component='fieldset' variant="standard" margin='normal'>
                <Typography variant='h6'>Añadir categoria de nivel 1</Typography>
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
                            label="Nombre de la categoría 1"
                            variant="outlined"
                            name='category_1'
                            onChange={handleChange}
                            value={category_1}
                        />
                    }
                </FormGroup>
                <Typography variant='h6'>Añadir categoria de nivel 2</Typography>
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

    const column2Elements = (
        <Box>
            <FormControl component='fieldset' variant="standard" margin='normal'>
                <Typography variant='h6'>Añadir campos</Typography>
                <FormGroup>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        size="small"
                        label={'Marca:marca1/marca2,' + '\n Color:color1/color2,'}
                        variant="outlined"
                        name='fields'
                        value={fields}
                        onChange={handleChange}
                        helperText="Los campos creados estarán disponibles al 
                        crear un producto perteneciente a este árbol de categorías. En el ejemplo,
                        superior, se han creado dos campos: Marca y Color. El campo Marca ofrece dos opciones, marca1 y marca2.
                        El campo Color ofrece dos opciones, color1 y color2. Debe separar las opciones con '/' y el nombre  
                        del campo con ':' . Los distintos campos se separan con ',' "
                    />
                </FormGroup>
            </FormControl>
        </Box>

    )

    const fullWidthElements = (
        <Box>
            <Button type="submit" >Crear Categoría</Button>
            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}
        </Box>
    )

    const onSubmitProp = handleSubmit(onSubmit)

    return (
        <FormTemplate
            onSubmit={onSubmitProp}
            sx={{
                // backgroundColor: 'dimGray',
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