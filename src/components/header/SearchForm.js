
import TextField from "@mui/material/TextField"
import Box from '@mui/system/Box'
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from '@mui/icons-material/Search';
import useForm from "../../hooks/useForm";
import { useRouter } from "next/router";
import { IconButton, Stack } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useBreakpoints from "../../hooks/useBreakpoints"

const SearchForm = ({ handleClose }) => {

    const { sm750Up, sm750Down } = useBreakpoints()

    const { formValue, handleChange, handleSubmit, validate, setFormValue } = useForm({
        searchKeys: ''
    })

    const { searchKeys } = formValue

    const onSubmit = async () => {
        router.push(`/buscar/${searchKeys}`)
        handleClose && handleClose()
    }

    const resetSearchKeys = () => {
        setFormValue({ searchKeys: '' })
    }

    const router = useRouter()

    return (
        <Box
            component='form'
            direction="row"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',

            }}
        >
            <TextField
                required
                sx={{
                    width: sm750Up ? '75%' : "100%", height: '20% ', display: 'flex', alignItems: 'stretch'
                }}
                id="standard-basic"
                label="Buscar en el catálogo"
                variant={sm750Up ? "standard" : "outlined"}
                color="corpGreen"
                name='searchKeys'
                value={searchKeys}
                onChange={handleChange}
                size="small"
                //TODO jodido 
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            {/**TODO jodido solo el del sm750up */}
                            {sm750Down &&
                                <IconButton
                                    onClick={resetSearchKeys}
                                // sx={{ mr: '1em' }}
                                >
                                    <HighlightOffIcon />
                                </IconButton>
                            }
                            <IconButton type='submit'>
                                <SearchIcon
                                    sx={{ mr: 0 }}
                                />
                            </IconButton>
                        </InputAdornment>,
                    style: {
                        paddingRight: 0
                    }
                }}
            />
        </Box>
    )
}

export default SearchForm