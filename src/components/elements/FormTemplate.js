/**
 * Este componente es una plantilla para los formularios principales. Consta de dos columnas principales
 * y, debajo de ellas y ocupando todo el ancho, una tercera columna con el resto de elementos
 * column1Elements: elementos jsx de la columna izquierda
 * column2Elements: elementos jsx de la columna derecha
 * fullWidthElements: elementos jsx en una sola columna
 */

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

const FormTemplate = ({ column1Elements, column2Elements, fullWidthElements, ...props }) => {
    return (
        <Container

            component='form'
            sx={{ minHeight: 'calc(100vh - 488.02px)' }}
            {...props}
        >

            <Grid

                // sx={{ backgroundColor: 'beige', }} 
                container spacing={3} columns={2}>
                <Grid item xs={6} sm={4} md={3} lg={1} >
                    {column1Elements}
                </Grid>
                <Grid
                    //  sx={{ backgroundColor: 'floralWhite' }} 
                    item xs={6} sm={4} md={3} lg={1} >
                    {column2Elements}
                </Grid>
            </Grid>
            {fullWidthElements}
        </Container >
    )
}

export default FormTemplate