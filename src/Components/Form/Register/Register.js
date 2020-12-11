import React from 'react'
import { Button, TextField } from "@material-ui/core"
import {useStyles}  from "../RegisterCss"

 const Register = () => {

        const classes = useStyles()
        return (
            <div>
                 <form>
                    <div >
                       <TextField
                        className={classes.TextField}
                        id="outlined-textarea"
                        label="Full Name"
                        placeholder="Full Name"
                        multiline
                        variant="outlined"/>
                    </div>
                    <br/>
                    <div>
                       <TextField
                        className={classes.TextField}
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        multiline
                        variant="outlined"/>
                    </div>
                    <br />
                    <div>
                        <TextField
                        className={classes.TextField}
                        id="outlined-number"
                        label="Number"
                        placeholder="Number"
                        type="number"
                        // InputLabelProps={{
                        //     shrink: false,
                        // }}
                        multiline
                        variant="outlined"/>
                    </div>
                    <br/>
                    <div>
                    <TextField
                       className={classes.TextField}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        multiline
                        placeholder="password"
                        autoComplete="current-password"
                        variant="outlined"/>
                    </div>
                    <br/>
                    <div>
                        <Button className={classes.Button}>Create account</Button>
                    </div>
                 </form>
            </div>
        )
    }


export default Register;
