import { Button, Container, Grid, Input, InputLabel, MenuItem, Select, TextField, FormControl } from "@mui/material"

import useForm from "../../hooks/useForm";


const NewProductForm = ({ onSubmit }) => {

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

    const { name, brand, price, categorie_1, categorie_2, categorie_3, ean, description } = product;
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
                                labelId="cat1-label"
                                id="cat1"
                                name='categorie_1'
                                value={categorie_1}
                                label="Categoría 1"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>

                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={12} >
                    <TextField fullWidth multiline size="small" label="Descripción" variant="outlined" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12}>
                    <TextField size="small" label="Precio" variant="outlined" type='number' />

                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12} >
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" style={{ display: 'none' }} type="file" />
                        <Button variant="contained" component="span">
                            Cargar imagen
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={12}>
                    <Button type="submit" >Subir anuncio</Button>
                </Grid>

            </Grid>

        </Container>

    )
}

export default NewProductForm