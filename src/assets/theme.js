import { createTheme } from "@mui/material/styles";



export default createTheme({
    //Paleta de colores
    palette: {
        /*
        primary: {
            // Rojo.
            main: "#009CAC",
        },
        secondary: {
            // Amarillo
            main: '#FFF200',
        },
        */
        corpGreen: {
            // This is green.A700 as hex.
            main: '#009CAC',
        },
        corpWhite: {
            // This is green.A700 as hex.
            main: '#FFFFFF',
        },
        corpBlack: {
            // This is green.A700 as hex.
            main: '#000000',
        },
    },
    components: {
        // Name of the component ⚛️
        MuiButton: {
            defaultProps: {
                // The default props to change

                variant: 'contained',
            }
        },
        MuiLink: {
            defaultProps: {
                // The default props to change
                underline: "none"
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    // apply theme's border-radius instead of component's default
                    //  alignItems: 'center'
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {

                    // apply theme's border-radius instead of component's default
                    //  alignItems: 'center'
                },
            },
        }

    },

});
