import Container from "@mui/material/Container"


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import CartStep from "./CartStep";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"


const steps = [
    'Carrito',
    'Envío',
    'Pago',
    'Resumen'
];

export default function CartStepper({ cartTotalPrice }) {
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
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                :
                activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

    return (
        <Container>
            <Box sx={{ width: '100%', background: "red" }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box sx={{ flexGrow: 1, background: "orange", marginTop: '30px' }}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} sm={12} md={8} lg={8} >

                        {activeStep === 0 ?
                            <CartStep />
                            :
                            activeStep === 1 ?
                                <Box>PASO 2</Box>
                                :
                                activeStep === 2 ?
                                    <Box>PASO 3</Box>
                                    :
                                    <Box>PASO 4</Box>
                        }


                    </Grid>
                    <Grid item sx={{ background: "grey" }} xs={12} sm={12} md={4} lg={4} >
                        <Paper>
                            <Typography>TOTAL: {cartTotalPrice}</Typography>
                            <Button
                                onClick={handleNext}
                            >CONTINUAR</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Button
                onClick={handleBack}
            >ATRÁS</Button>
        </Container >
    );
}