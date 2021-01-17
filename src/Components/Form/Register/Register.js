import React, { useRef, useState } from 'react'
import { Button, TextField } from "@material-ui/core"
import { useStyles } from "../RegisterCss"
import { useAuth } from "../../Authentication/AuthContext"
import Alert from '@material-ui/lab/Alert';

const Register = () => {
    const emailRef = useRef(null)
    const passWordRef = useRef(null)
    const ConfirmPasswordRef = useRef(null)
    const { createAccount} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("No") 
    const [success, setSuccess] = useState("")



    async function handelSubmit(e) {
        e.preventDefault();
        
        emailRef.current.focus();
        passWordRef.current.focus();
        ConfirmPasswordRef.current.focus();

        if (passWordRef.current.value !== ConfirmPasswordRef.current.value) {
            return setError("password do not match")
        }else if(passWordRef.current.value.length < 6){
            return setError("password must be more than six characters")
        };
        
        try {
            
            setError("")
            setLoading("Yes")
            await createAccount(emailRef.current.value, passWordRef.current.value)
        } catch {
            setError("failed to create an account")
        }
            setLoading("No")
            setSuccess("Account created you can sign in") 
        
    }

    const classes = useStyles()
    return (
        <div>
            <form onSubmit={handelSubmit} >
                <div>
                    <TextField
                        className={classes.TextField}
                        id="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        variant="outlined"
                        autoComplete="email"
                        inputRef={emailRef}
                        required
                        autoFocus
                    />
                </div>
                <br />
                <div>
                    <TextField
                        className={classes.TextField}
                        id="password"
                        label="password"
                        type="password"
                        placeholder="password"
                        autoComplete="current-password"
                        variant="outlined"
                        inputRef={passWordRef}
                        required
                        autoFocus
                       
                    /> 
                </div>
                <br />
                <div>
                    <TextField
                        className={classes.TextField}
                        id="password-confirm"
                        label="ConfirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        autoComplete="current-password"
                        variant="outlined"
                        inputRef={ConfirmPasswordRef}
                        required
                        autoFocus
                       
                    />
                </div>
                <br />
                <div>
                    <Button className={classes.Button}
                        type="submit"
                        disable={loading}
                    >Create account</Button>
                </div>
            </form>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <div className={classes.l_active}>
                Already have an account? Sign in
            </div>
        </div>
    )
}
export default Register;


