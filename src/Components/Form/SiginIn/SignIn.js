import React from 'react'
import { Button, TextField } from "@material-ui/core"
import {useStyles}  from "../RegisterCss"

function SignIn() {
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
                <br/>
                    <div>
                        <Button className={classes.Button}>Create account</Button>
                    </div>
            </form>
        </div>
    )
}

export default SignIn
