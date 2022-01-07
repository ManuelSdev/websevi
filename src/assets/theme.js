import { createTheme } from "@mui/material/styles";
import { bgcolor } from "@mui/system";



const theme = createTheme({
    //Paleta de colores
    palette: {

        primary: {
            // Rojo.
            main: "#009CAC",
        },
        /*
        secondary: {
            // Amarillo
            main: '#FFF200',
        },
        */
        background: {
            default: "white"
        },
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

                variant: "contained",
            },
            styleOverrides: {
                root: {
                    // apply theme's border-radius instead of component's default
                    alignItems: 'center',
                    marginBottom: '1em'

                },
            },
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
        },

        MuiStepIcon: {

            styleOverrides: {

                root: {
                    //color: '#CCCCCC',
                    '&.Mui-active': {
                        color: 'black',
                    },
                    '&.Mui-completed': {
                        color: 'black',
                    },

                },

            },
        },

        MuiStepConnector: {

            styleOverrides: {


                root: {
                    '&.Mui-active .MuiStepConnector-line': {
                        color: 'black',
                        borderColor: 'black',

                    },
                    '&.Mui-completed .MuiStepConnector-line': {
                        color: 'black',
                        borderColor: 'black',

                    },
                    '& .MuiStepConnector-line': {
                        color: 'black',
                        borderColor: '#bdbdbd',

                    },

                },



            },
        },



    },

});

theme.spacing(9)

export default theme