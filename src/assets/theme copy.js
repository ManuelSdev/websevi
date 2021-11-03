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
        // Name of the component
        MuiButton: {
            defaultProps: {
                // The props to change the default for.

                variant: 'contained',
                disableRipple: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '2rem',
                },
            },
        },
        //EJemplos sin uso
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '8rem',
                    color: 'black',

                },
            },
        },
        MuiToolbar: {
            defaultProps: {
                // The props to change the default for.
                minHeight: "10px"
            },
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    minHeight: "10px"

                },
            },
        },
    },
    typography: {
        button: {
            fontSize: '1rem',
        },
    },
});


