
import { Input, InputLabel, Paper } from "@mui/material"
import { Box } from "@mui/system"
import useForm from "../../hooks/useForm"
const ImportBlock = () => {
    const { formValue: searchKeys, handleChange, handleSubmit, validate, setFormValue } = useForm({})

    return (
        <form>
            <InputLabel htmlFor='input-file'>Selecciona importar</InputLabel>
            <Input
                id='input-file'
                inputProps={{ type: 'file' }}
                placeholder='ksjksjksjksj'
            />
        </form >


    )
}

export default ImportBlock

/*
<form>
            <label >First name:</label>

            <input defaultValue="Hello world" type="file" name="resume"

                type="file"



            />
            <button
                //El submit será el onSubmit={handleSubmit}
                type="submit"
            >
                Crear una cuenta</button>
        </form>

*/