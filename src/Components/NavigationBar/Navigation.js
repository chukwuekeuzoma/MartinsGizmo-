import React from "react"
import "./Navigation.css"
import {Link} from "react-router-dom"
import {AppBar,Toolbar,Typography,Button} from "@material-ui/core"
import {useStyles} from "./NavigationCss"


const Navigation = () =>{
    const classes = useStyles()
    return(
       <div>
            <AppBar className={classes.Appbar} >
                <Toolbar className={classes.Toolbar}>
                    <Typography  className="space" style={{fontSize:"12px",fontWeight:"bolder"}}>
                        Martins
                    </Typography>
                    <div className={classes.martins}>
                            <div className="space">
                                <Link to="/" className="space">Home</Link>
                            </div>
                            <div className="space">
                                <Link to= "/about" className="space">About</Link>
                            </div> 
                
                        <Button variant="contained" 
                             className={classes.Button}> 
                            <Link className="linkcolour" to="/Dashboard">Dashboard</Link>  
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    
    )
}

export default Navigation;