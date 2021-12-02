import { Button, Container, Grid, Input, InputLabel, MenuItem, Select, TextField, FormControl, Stack, Typography, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { Box } from "@mui/system";
import useForm from "../../hooks/useForm";
import React from "react";
import SaveAndLoadButton from '../elements/SaveAndLoadButton'

const NewCategsForm = ({ onSubmit, error }) => {

    const { formValue: categorie, handleChange, handleSubmit, setFormValue } = useForm({
        categorie_1: '',
        categorie_2: '',
        categorie_3: '',
        categ_1_isNew: false,
        categ_2_isNew: false,



    });
    const { categorie_1, categorie_2, categorie_3 } = categorie;

    const [toggled, setToggled] = React.useState(true);
    error && console.log('HAY ERROR ', error)


    return (
        <Container maxWidth='xs' component='form' onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Usar categoría de nivel 1 existente</Typography>
                <Switch
                    // classes={lovelyStyles}
                    checked={toggled}
                    onChange={e => setToggled(e.target.checked)}
                />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">

                <Typography>Crear nueva categoría de nivel 1</Typography>
                <Switch
                    //    classes={lovelyStyles}
                    checked={!toggled}
                    onChange={e => setToggled(!e.target.checked)}
                />
            </Stack>

            <TextField
                fullWidth
                size="small"
                label="Categoría 1"
                variant="outlined"
                name='categorie_1'
                onChange={handleChange}
                value={categorie_1}
            />

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
            <TextField
                fullWidth
                size="small"
                label="Categoría 2"
                variant="outlined"
                name='categorie_2'
                onChange={handleChange}
                value={categorie_2}

            />

            <TextField
                fullWidth
                size="small"
                label="Categoría 3"
                variant="outlined"
                name='categorie_3'
                onChange={handleChange}
                value={categorie_3}

            />




            <Button type="submit" >Subir anuncio</Button>
            <SaveAndLoadButton></SaveAndLoadButton>

            {/**TODO: refina el tema de errores */}
            {error && <Box>{error}</Box>}


        </Container >

    )
}

export default NewCategsForm