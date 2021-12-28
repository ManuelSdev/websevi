
import * as React from 'react';
import Paper from "@mui/material/Paper"
import Box from "@mui/system/Box"
import Checkbox from '@mui/material/Checkbox';
import useForm from "../../hooks/useForm";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconVisa from './IconVIsa';
import IconMaster from './IconMaster';
import IconPaypal from './IconPaypal';
import { Stack } from '@mui/material';
const SelectPayment = ({ user }) => {

    const [value, setValue] = React.useState('Tarjeta');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (

        <FormControl component="fieldset">
            <FormLabel component="legend">Dirección de envío</FormLabel>
            <RadioGroup
                aria-label="payment"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value={'Tarjeta'} control={<Radio />} label={
                    <Stack direction="row" spacing={2}>
                        <IconVisa viewBox="0 0 1000.046 323.653"
                            sx={{ fontSize: 100 }}
                        ></IconVisa>,
                        <IconMaster viewBox="0 0 190 120.4146"
                            sx={{ fontSize: 100 }}
                        ></IconMaster>
                    </Stack>

                } >
                </FormControlLabel>
                <FormControlLabel value={'PayPal'} control={<Radio />} label={

                    <IconPaypal viewBox="0 0 660 100"
                        sx={{ fontSize: 200 }}
                    ></IconPaypal>



                } >

                </FormControlLabel>

            </RadioGroup>
        </FormControl>


    )
}

export default SelectPayment
/*
{user.addresses.map(addressObject =>
    <FormControlLabel value={addressObject._id} control={<Radio />} label={addressObject.address} />
)}
*/