import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function SignupForm() {
    const [UserName, setUserName] = React.useState(null)
    const saveName = () => {
        localStorage.setItem('UserName', UserName);
    }
    const onChange = event => setUserName(event.target.value);
  return <form dir="rtl">
      <TextField label="שם מלא" value={UserName} onChange={onChange}/>
      <br/>
      <Button variant="contained" onClick={saveName}>הרשם</Button>
  </form>
}
