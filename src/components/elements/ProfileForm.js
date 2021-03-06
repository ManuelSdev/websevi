import FormTemplate from "./FormTemplate"
import Box from "@mui/system/Box"
import TextField from "@mui/material/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@mui/material"
import React from "react"


const UserDataForm = ({ user, onSubmit, buttonIsActive, setButtonIsActive }) => {

    const { formValue, handleChange, handleSubmit, validate, setFormValue } = useForm({
        name: '',
        lastName: '',
        idCard: "",
        phone: '',
        address: '',
        postCode: '',
        city: '',
        region: '',
        country: '',
        moreInfo: '',
    });

    const { name, lastName, idCard, phone, address, postCode, city, region, country, moreInfo } = formValue
    const formValueInArray = [name, lastName, idCard, phone, address, postCode, city, region, country, moreInfo]

    const column1Elements = (
        <Box>
            <TextField
                required
                fullWidth
                size="small"
                label="Nombre"
                variant="outlined"
                name='name'
                onChange={handleChange}
                value={name}
            />
            <TextField
                required
                fullWidth
                size="small"
                label="DNI/CIF/NIF"
                variant="outlined"
                name='idCard'
                onChange={handleChange}
                value={idCard}
            />
        </Box>
    )
    const column2Elements = (
        <Box>
            <TextField
                required
                fullWidth
                size="small"
                label="Apellidos"
                variant="outlined"
                name='lastName'
                onChange={handleChange}
                value={lastName}
            />
            <TextField
                required
                fullWidth
                size="small"
                label="Móvil"
                variant="outlined"
                type='number'
                name='phone'
                onChange={handleChange}
                value={phone}
            />
        </Box>
    )

    const fullWidthElements = (
        <Box>
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Dirección"
                variant="outlined"
                name='address'
                value={address}
                onChange={handleChange}
            />
            <TextField
                size="small"
                label="Información opcional"
                variant="outlined"
                name='moreInfo'
                value={moreInfo}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="País"
                variant="outlined"
                name='country'
                value={country}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Población"
                variant="outlined"
                name='city'
                value={city}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Provincia"
                variant="outlined"
                name='region'
                value={region}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                multiline
                size="small"
                label="Código postal"
                variant="outlined"
                type='number'
                name='postCode'
                value={postCode}
                onChange={handleChange}
            />
            <Button
                type="submit" >
                Guardar datos</Button>
        </Box>
    )

    return (
        <FormTemplate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                //  backgroundColor: 'dimGray',
                '& .MuiFormControl-root': { mb: 2, width: '100%' },
                '& .MuiTextField-root': { mb: 2, width: '100%' }
            }}
            column1Elements={column1Elements}
            column2Elements={column2Elements}
            fullWidthElements={fullWidthElements}
        />
    )
}

export default UserDataForm