import React,{useRef, useState} from 'react'
import { useAuth } from "../../Authentication/AuthContext"
import { Button, TextField } from "@material-ui/core"
import { useStyles } from "../RegisterCss"
import {Link, useHistory} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';

function SignIn() {
    const classes = useStyles()


    const emailRef = useRef(null)
    const passWordRef = useRef(null)
    const {SignIn} = useAuth()
    const [error, setError] = useState("")
    // const [loading, setLoading] = useState("No") 
    const history = useHistory();
 



    async function handelSubmit(e) {
        e.preventDefault();
        
        emailRef.current.focus();      
        passWordRef.current.focus();
    

        // if (passWordRef.current.value !== ConfirmPasswordRef.current.value) {
        //     return setError("password do not match")
        // }else if(passWordRef.current.value.length < 6){
        //     return setError("password must be more than six characters")
        // };
        
        try {
            
            setError("")
            // setLoading("Yes")
            await  SignIn(emailRef.current.value, passWordRef.current.value)
            history.push("/SideBarDash")
        } catch {
            setError("invalid email or password")
        }
        // setLoading("No")
     
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div >
                    <TextField
                       className={classes.TextField}
                        id="outlined-textarea"
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
                        id="outlined-password-input"
                        label="Password"
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
                  {/* <Link to="/SideBarDash" className="linkcolour"> */}
                    <Button className={classes.Button} type="submit">Sign in</Button>
                  {/* </Link> */}
                </div>
            </form>
            {error && <Alert severity="error">{error}</Alert>}
            <div className={classes.l_active}>
                Need an account?Register
            </div>
        </div>
    )
}

export default SignIn
