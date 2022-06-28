import FormTemplate from "./FormTemplate"
import Box from "@mui/system/Box"
import TextField from "@mui/material/TextField"
import useForm from "../../hooks/useForm"
import InputFile from "./InputFile"
import { Button } from "@mui/material"
import SaveAndLoadButton from './SaveAndLoadButton'

const UserDataForm = ({ user, onSubmit }) => {

    const { formValue, handleChange, handleSubmit, validate, setFormValue } = useForm({
        address: '',
        addresseeFullName: '',
        addresseePhone: "",
        phone: '',
        postCode: '',
        city: '',
        region: '',
        country: '',
        moreInfo: '',
    });

    const { name, lastName, idCard, phone, company, address, postCode, city, region, country, moreInfo, defaultAddress } = formValue

    const column1Elements = (
        <Box>
            <TextField
                required
                fullWidth
                size="small"
                label="Nombre completo"
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
                fullWidth
                size="small"
                label="Empresa"
                variant="outlined"
                name='company'
                onChange={handleChange}
                value={company}
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
            <Button type="submit" >Guardar datos</Button>
            <SaveAndLoadButton></SaveAndLoadButton>
            {/**TODO: refina el tema de errores */}
            {/*error && <Box>{error}</Box>*/}
        </Box>
    )

    return (
        <FormTemplate
            onSubmit={handleSubmit(onSubmit)}
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

export default UserDataForm