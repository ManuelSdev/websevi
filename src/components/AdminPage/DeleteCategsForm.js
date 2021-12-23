import { Button, Container, Grid, Input, InputLabel, MenuItem, Select, TextField, FormControl, Stack, Typography, Switch, FormGroup, FormControlLabel, FormLabel, Checkbox } from "@mui/material"
import { Box } from "@mui/system";
import useForm from "../../hooks/useForm";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'
import { getCategs } from "../../lib/api/category";

const DeleteCategsForm = ({ onSubmit, error }) => {

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
    /*
    React.useEffect(() => {
        console.log('USEEEEEEEEEEEEEEEEEEEEEEEEE')
        setCategs()
    }, [])
*/


    /**
     * Recibe un objeto filter para filtrar categorías en bdd
     * Recibe un array categories_x que será el único 
     * seteado en el estado "categories" con la respuesta del back
     */
    const setCategs = async () => {
        const query = await getCategs()

        query.map(categorie =>
            categorie.level === 1 ?
                setCategories({
                    ...categories,
                    categories_1: [...categories.categories_1, categorie]
                })
                :
                categorie.level === 2 ?
                    setCategories({
                        ...categories,
                        categories_2: [...categories.categories_2, categorie]
                    })
                    :
                    setCategories({
                        ...categories,
                        categories_3: [...categories.categories_3, categorie]
                    })

        )
        console.log('cattt', categories)
    }
    const setCategsZZ = async (filter, categoriesToChange) => {
        const query = await getCategs(filter)
        const newArray = query.map(categorie => categorie._id)
        console.log('query  1', query)
        await setCategories({
            ...categories,
            [categoriesToChange]: newArray
        })
        console.log('cattt', categories)
    }
    const test = async e => {
        e.preventDefault();
        const query = await getTree()
        console.log('   queryyyy', query)
    }

    error && console.log('HAY ERROR ', error)


    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };



    return (
        //<Container maxWidth='xs' component='form' onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth='xs' component='form' onSubmit={test}>
            <>
                <FormControlLabel
                    label="Padre"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Hijo 1"
                        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Hijo 2"
                        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    />
                </Box>
            </>


            <FormControl component='fieldset' variant="standard" margin='normal'>
                <Button type="submit" >Eliminar cat</Button>
                <SaveAndLoadButton></SaveAndLoadButton>
            </FormControl>





            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}


        </Container >

    )
}

export default DeleteCategsForm

/*

    {categories_1.map(categ =>
                <Box>
                    hola

                </Box>
            )
            }
            {categories_1 && console.log(categories_1[0])}

            {categories_1 && categories_1.map(ca => {
                console.log('CA', ca.level)
                return <Box>{ca.level}</Box>
            })}
            {categories_1.map(function () {
                return <Box>ohslkhlkhslkhl</Box>;
            })}
            {categories_1.map(categ =>
                <MenuItem key={categ} value={categ}>{categ.level}</MenuItem>
            )}


            */