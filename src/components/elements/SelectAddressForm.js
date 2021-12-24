
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

const SelectAddressForm = ({ user }) => {

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };




    return (

        <FormControl component="fieldset">
            <FormLabel component="legend">Dirección de envío</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                {user.addresses.map(addressObject =>
                    <FormControlLabel value={addressObject._id} control={<Radio />} label={addressObject.address} />
                )}

            </RadioGroup>
        </FormControl>


    )
}

export default SelectAddressForm