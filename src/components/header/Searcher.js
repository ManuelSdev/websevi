
import TextField from "@mui/material/TextField"
import Box from '@mui/system/Box'
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from '@mui/icons-material/Search';
import useForm from "../../hooks/useForm";
import { useRouter } from "next/router";
import { IconButton, Stack } from "@mui/material";
import HeaderButton from "./HeaderButton";
import { styled } from "@mui/system";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Searcher = ({ StyledButton, md950Up, sm750Up, handleClosen }) => {

    const { formValue, handleChange, handleSubmit, validate, setFormValue } = useForm({
        searchKeys: ''
    })

    const { searchKeys } = formValue

    const onSubmit = async () => {
        router.push(`/buscar/${searchKeys}`)
    }

    const resetSearchKeys = () => {
        setFormValue({ searchKeys: '' })
    }
    const router = useRouter()

    return (
        <>

            <Box
                component='form'
                direction="row"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                    // bgcolor: 'corpWhite.main',
                    //mt: '-1em', pb: '0.3em'
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
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                {sm750Up ||
                                    <IconButton
                                        onClick={resetSearchKeys}
                                        sx={{ mr: '1em' }}
                                    >
                                        <HighlightOffIcon />
                                    </IconButton>
                                }
                                <IconButton type='submit'>
                                    <SearchIcon />
                                </IconButton>

                            </InputAdornment>,

                    }}
                />
            </Box>










        </>


    )
}

export default Searcher