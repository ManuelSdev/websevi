import Container from "@mui/material/Container"


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import CartStep from "./CartStep";
import ShipmentStep from './ShipmentStep'
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import PaymentStep from "./PaymentStep";
import ResumeStep from "./ResumeStep";
import { Divider, Stack } from "@mui/material";

const steps = [
    'Carrito',
    'Envío',
    'Pago',
    'Resumen'
];

export default function CartStepper({ order, setOrder, cartTotalPrice, isLogged, user, mutate, isLoading, handleSubmit }) {


    //GESTIÓN DEL STEPPER
    const waitingForChangeIsLogged = React.useRef(false);

    const [activeStep, setActiveStep] = React.useState(0);

    const [completed, setCompleted] = React.useState({});


    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                :
                activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        activeStep > 0 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    /**
     * Si, en el paso 2 (activeStep=1) el usuario no está logado, se le redirige a la página de login
     * Una vez logado, la propiedad redirectBack: true lo volverá a traer a este punto
     * Guarda la clave 'step1Anchor' en el sessionStorage para avanzar al paso 2 (activeStep=1)  al volver 
     * tras la redirección
     * Cuando vuelve y el stepper se situa en el paso 2 (activeStep=1) , la clave es borrada
     * Como useState no cambia el estado de isLogged de forma síncrona, usa waitingForChangeIsLogged
     * como ancla para asegurar que la autenticación se ha realizado y loggin.state=true
     *  no entrar en bucle en el tercer if
     */
    React.useEffect(() => {
        //Controla la redirección al paso 2(step=1) tras el login
        if (waitingForChangeIsLogged.current && isLogged.state) {
            waitingForChangeIsLogged.current = false;
            return;
        }
        if (sessionStorage.getItem('step1Anchor')) {
            waitingForChangeIsLogged.current = true
            sessionStorage.removeItem('step1Anchor')
            setActiveStep(1)
        }
        if (activeStep === 1 && !isLogged.state && !waitingForChangeIsLogged.current) {
            sessionStorage.setItem('step1Anchor', true)
            redirectToAuth({ redirectBack: true })
        }
    }, [activeStep])

    return (
        <Container>
            <Box pt={2} pb={2} sx={{ width: '100%', background: "#009CAC" }}>
                <Stepper
                    activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box mb={2} sx={{ flexGrow: 1, marginTop: '30px' }}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} sm={12} md={8} lg={8} >
                        {activeStep === 0 ?
                            <CartStep />
                            :
                            activeStep === 1 ?
                                <Paper sx={{ flexGrow: 1, p: 2, pt: 1.5 }}>
                                    <ShipmentStep
                                        user={user}
                                        mutate={mutate}
                                        isLoading={isLoading}
                                    />
                                </Paper>
                                :
                                activeStep === 2 ?
                                    <Paper sx={{ flexGrow: 1, p: 2, pt: 1.5 }}>
                                        <PaymentStep order={order} setOrder={setOrder} />
                                    </Paper>
                                    :

                                    <ResumeStep
                                        order={order}
                                        user={user}
                                    />
                        }
                    </Grid>
                    <Grid item sx={{}} xs={12} sm={12} md={4} lg={4} >
                        <Paper sx={{ p: 2, }} >
                            <Stack direction='row' justifyContent='space-between' sx={{ mb: 1 }}  >
                                <Typography variant='h5' sx={{ fontWeight: 'bold' }} >TOTAL: </Typography>
                                <Typography
                                    variant='h5'
                                    sx={{ fontWeight: 'bold' }}>{cartTotalPrice} €</Typography>
                            </Stack>
                            <Divider sx={{ mb: 2 }} ></Divider>
                            {activeStep === 1 && !user?.hasProfile ?
                                <Button fullWidth disabled onClick={handleNext}> CONTINUAR</Button>
                                :
                                activeStep === 3 ?
                                    <Button fullWidth onClick={handleSubmit}> PAGAR Y FINALIZAR</Button>
                                    :
                                    <Button fullWidth onClick={handleNext}> CONTINUAR</Button>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            {activeStep > 0 &&
                <Button
                    onClick={handleBack}
                >ATRÁS</Button>
            }

        </Container >
    );
}