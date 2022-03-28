import { createTheme } from "@mui/material/styles";
import { bgcolor } from "@mui/system";



const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            sm750: 750,
            md950: 950
        },
    },
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
        MuiContainer: {
            defaultProps: {
                // The default props to change

                // height: '100vh',
            },
            styleOverrides: {
                root: {
                    // apply theme's border-radius instead of component's default
                    // minHeight: 'calc(100vh - 488.02px)'

                },
            },
        },
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