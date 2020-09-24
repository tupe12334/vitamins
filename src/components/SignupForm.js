import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Radio, RadioGroup, FormControl, FormControlLabel, TextField } from '@material-ui/core';
import { blue, green, orange, pink, red } from '@material-ui/core/colors';

import 'fontsource-roboto';

const BlueRadio = withStyles({
    root: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
const PinkRadio = withStyles({
    root: {
        color: pink[400],
        '&$checked': {
            color: pink[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


export default function SignupForm() {
    const [UserName, setUserName] = React.useState(localStorage.getItem('UserName') || null)
    const [UserGender, setUserGender] = React.useState(localStorage.getItem('UserGender'))
    const saveUserData = () => {
        localStorage.setItem('UserName', UserName);
        localStorage.setItem('UserGender', UserGender);
    }

    const handleChange = (event) => {
        setUserGender(event.target.value);

    };
    const onChange = event => setUserName(event.target.value);
    return <FormControl dir="rtl">
        <Typography variant="h3">טופס שמירת נתונים אישיים</Typography>
        <br />
        <br />
        <TextField label="שם מלא" value={UserName} onChange={onChange} />
        <br />
        <RadioGroup aria-label="gender" name="gender1" value={UserGender} onChange={handleChange}>
            <FormControlLabel value="זכר" control={<BlueRadio />} label="זכר" />
            <FormControlLabel value="נקבה" control={<PinkRadio />} label="נקבה" />
        </RadioGroup>
        <br />
        <Button variant="contained" onClick={saveUserData}>שמור נתונים</Button>
    </FormControl>
}
