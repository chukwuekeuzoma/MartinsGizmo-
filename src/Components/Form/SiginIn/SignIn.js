import React from 'react'
import { Button, TextField } from "@material-ui/core"
import { useStyles } from "../RegisterCss"
import {Link} from "react-router-dom"

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
                        variant="outlined" />
                </div>
                <br />
                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        multiline
                        variant="outlined" />
                </div>
                <br />
                <div>
                  <Link to="/SideBarDash" className="linkcolour">
                    <Button className={classes.Button}>Sign in</Button>
                  </Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn
