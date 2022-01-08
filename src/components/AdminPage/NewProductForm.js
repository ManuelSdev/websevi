import Button from "@mui/material/Button"

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
import { Stack, Typography } from "@mui/material"

const NewProductForm = ({ onSubmit, error }) => {

    const { formValue: product, handleChange: handleChangeProduct, setFormValue: setProduct } = useForm({
        name: '',
        specs: '',
        price: "",
        ean: "",
        category_1: '',
        category_2: '',
        description: '',
        image_0: null,
        image_1: null,
        image_2: null,
        image_3: null,


    });
    const { formValue: fields, handleChange: handleChangeFields, setFormValue: setFields } = useForm({

    });


    const [options, setOptions] = React.useState({
        categories_1: [],
        categories_2: [],
        dynamicFields: []

    })

    const { name, price, category_1, category_2, ean, description, specs } = product;
    const images = { images: [product.image_0, product.image_1, product.image_2, product.image_3] }
    const { categories_1, categories_2, dynamicFields } = options

    //Recibe onSubmit en props desde el componente superior
    const handleSubmit = onSubmit => ev => {
        ev.preventDefault();

        const newProductData = { name, price, category_1, category_2, ean, description, specs, ...images, ...fields }
        onSubmit(newProductData);
    };

    const allowUseEffects = React.useRef({
        effect1: true,
        effect2: true,
        effect3: true,
        effect4: true,
    });


    //Tras el primer render, usa el método setCategs para obtener los nombres de las categorías
    //de nivel 1 y mostrarlas en el desplegable del formulario
    React.useEffect(() => {
        let mounted = true;
        mounted && setCategs({ level: 1 }, 'categories_1')
        return () => {
            mounted = false;
        };
    }, []);

    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia category_1. Cuando se selecciona
     * una categoría de nivel 1 en el despleglable del formulario, usa el método setCategs para obtener 
     * las subcategorías correspondientes de nivel 2, setear el estado 'categories_2' con ellas 
     * y mostrarlas en el despleglable del formulario
     * 
     * 
     */
    React.useEffect(() => {
        // console.log('c1', category_1)
        if (allowUseEffects.current.effect1) {
            allowUseEffects.current.effect1 = false;
            return;
        }
        //console.log('USE 2----')
        let mounted = true;
        mounted && resetFields()
        mounted && setCategs({ parent: toPlainString(category_1) }, 'categories_2')

        mounted && setProduct({
            ...product,
            category_2: ''
        })
        return () => {
            mounted = false;
        };
    }, [category_1]);

    /**
     * No se ejecuta tras el primer render, solo se ejecuta cuando cambia category_2. Cuando se selecciona
     * una categoría de nivel 2 en el despleglable del formulario, usa el método setFields para obtener 
     * los campos correspondientes a esa categoría  de nivel 2, setear el estado 'fields' con ellos
     * y mostrar los despleglables en del formulario
     * 
     * 
     */
    React.useEffect(() => {
        if (allowUseEffects.current.effect2) {
            allowUseEffects.current.effect2 = false;
            return;
        }

        if (!category_2) return
        let mounted = true;
        const createFields = async (filter) => {
            mounted && resetFields()
            //La promesa devuelve un array con una sola categoría
            const [categoryRes] = await getCategories(filter)
            const { fields: categoryFields } = categoryRes
            //Crea el estado fields
            const fieldsToObject = {}
            categoryFields.map(field => {
                const key = Object.keys(field)

                //  fieldsToObject[`${key}`] = field[`${key}`]
                fieldsToObject[`${key}`] = ''
            })

            mounted && setFields({ ...fieldsToObject })
            //Añade dynamicFields al estado options. Los valores almacenados en dynamicFields 
            //se muestrán como opciones en los desplegables dinámicos 
            mounted && setOptions({
                ...options,
                dynamicFields: [...categoryFields]
            })
        }

        //Uso de función cleanUP

        createFields({ path: toPlainString(category_2) })
        return () => {
            //console.log("4- Tira a mounted false")
            mounted = false;
        };


    }, [category_2]);

    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "options" con la respuesta del back
     */
    const setCategs = async (filter, categoryToChange) => {
        const categoriesRes = await getCategories(filter)
        const categoriesNames = categoriesRes.map(category => category.name)

        setOptions({
            ...options,
            dynamicFields: [],
            [categoryToChange]: categoriesNames
        })
    }
    //Reestablece los estados relacionados con los fields para evitar mutaciones de componentes controlados a no controlados
    const resetFields = () => {
        setOptions({
            ...options,
            dynamicFields: []
        })
        setFields({})
    }

    //const onSubmitProp = handleSubmit(onSubmit)

    const column1Elements = (
        <Box>
            <TextField
                required
                fullWidth
                size="small"
                label="Nombre del producto"
                variant="outlined"
                name='name'
                onChange={handleChangeProduct}
                value={name}
            />

            <TextField
                required
                fullWidth
                size="small"
                label="Código EAN"
                variant="outlined"
                type='number'
                name='ean'
                onChange={handleChangeProduct}
                value={ean}
            />
            <TextField
                required
                size="small"
                label="Precio"
                variant="outlined"
                type='number'
                name='price'
                value={price}
                onChange={handleChangeProduct}
            />
            <FormControl size="small" fullWidth>
                <InputLabel id="cat1-label">Categoría 1</InputLabel>
                <Select
                    required
                    labelId="cat1-label"
                    id="cat1"
                    name='category_1'
                    value={category_1}
                    label="Categoría 1"
                    onChange={handleChangeProduct}
                >
                    {categories_1.map(categ =>
                        <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                    )}
                </Select>
            </FormControl>


            <FormControl size="small" fullWidth>
                <InputLabel id="cat2-label">Categoría 2</InputLabel>
                <Select
                    required
                    labelId="cat2-label"
                    id="cat2"
                    name='category_2'
                    value={category_2}
                    label="Categoría 2"
                    onChange={handleChangeProduct}
                >
                    {categories_2.map(categ =>
                        <MenuItem key={categ} value={categ}>{categ}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    )

    const column2Elements = (
        <Box>


            {dynamicFields?.length > 0 && dynamicFields.map(field => {
                const key = Object.keys(field)
                return (
                    <FormControl key={key} size="small" fullWidth>
                        <InputLabel id={`${key}-label`}>{`${key}`}</InputLabel>
                        <Select
                            required
                            labelId={`${key}-label`}
                            id={`${key}`}
                            name={`${key}`}
                            value={fields[`${key}`]}
                            label={`${key}`}
                            onChange={handleChangeFields}
                        >
                            {field[`${key}`].map(value =>
                                <MenuItem key={`${value}`} value={value}>{value}</MenuItem>
                            )}
                        </Select>
                    </FormControl>)
            })}

        </Box>
    )

    const fullWidthElements = (
        <Box>
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Descripción"
                variant="outlined"
                name='description'
                value={description}
                onChange={handleChangeProduct}
            />

            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Especificaciones"
                variant="outlined"
                name='specs'
                value={specs}
                onChange={handleChangeProduct}
                helperText="Las especificaciones se muestran en una lista. Separe el texto de cada especificación
                o característica con '//"
            />
            <Typography mt={1} mb={1}>Debe seleccionar, como mínimo, una imagen para crear el producto.</Typography>
            <Typography mb={1}>Si selecciona más de una imagen, la primera será la imagen principal del producto.</Typography>
            <Stack direction='row' spacing={2} mb={2}>
                <InputFile
                    //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                    //y que salga el aviso de mui
                    name="image_0"
                    accept="image/*" id="contained-button-file"
                    // editableSrc={product?.images ?? null}
                    onChange={handleChangeProduct}

                />
                <InputFile
                    //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                    //y que salga el aviso de mui
                    name="image_1"

                    accept="image/*" id="contained-button-file"
                    // editableSrc={product?.images ?? null}
                    onChange={handleChangeProduct}
                />
                <InputFile
                    //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                    //y que salga el aviso de mui
                    name="image_2"


                    accept="image/*" id="contained-button-file"
                    // editableSrc={product?.images ?? null}
                    onChange={handleChangeProduct}
                />
                <InputFile
                    //TODO: Mete un componente Input mui o algo para que poder ponerle "required"
                    //y que salga el aviso de mui
                    name="image_3"


                    accept="image/*" id="contained-button-file"
                    // editableSrc={product?.images ?? null}
                    onChange={handleChangeProduct}
                />
            </Stack>
            <Button type="submit"
                //Si no se selecciona ninguna imagen(todas son null), el botón es disabled
                disabled={images.images.every(value => value === null)}
            >Crear producto</Button>


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


