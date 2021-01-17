import { Button } from "@material-ui/core"
import React, { useState } from "react"
import "./Dashboard.css"
import { useStyles } from "./DashboardCss"
import Register from "../Form/Register/Register"
import SiginIn from "../Form/SiginIn/SignIn"
import { Link } from "react-router-dom"
import { ArrowBack } from '@material-ui/icons';
import {AuthProvider} from "../Authentication/AuthContext"



const Dashboard  = () =>{
  const classes = useStyles();
  const [CurrentForm, setCurrentFrom] = useState(true);
    
     return (
    <AuthProvider>
      <div style={{ position: "relative" }}>
        <div className="box">

          <div className=" box-two">
            <section className="section_box_one">
              <div className="martins">Martins</div>
              <div className="martins_second">
                Search for beautiful houses for sale or rent and also put up your houses
                for sale or rent all around Nigeria
                  </div>
            </section>
            <div style={{ paddingRight: "0px", marginTop: "0px", position: "absolute" }}>
              <Link to="/" className="linkcolour">
                <ArrowBack style={{ fontSize: "30px" }} />
              </Link>
            </div>
            <section className="section_box_two">


              <div className="welcome">Welcome</div>
              <div style={{ width: "60%", display: "flex", justifyContent: 'center', }}>
                <div style={{ width: "30%" }} id="button">
                  <Button className={`${classes.section_box_two_button}  ${CurrentForm?classes.active:null}`}
                    onClick={() => { setCurrentFrom(true) }}>Sign in</Button>
                  <div className={CurrentForm?"active_indicatior": null}></div>
                </div>
                <div style={{ width: "30%"}} id="button">
                  <Button className={`${classes.section_box_two_button}  ${CurrentForm?null:classes.active}`}
                    onClick={() => { setCurrentFrom(false) }}>Register</Button>
                  <div className={CurrentForm? null:"active_indicatior"}></div>
                </div>
              </div> 
              <div style={{marginTop: "30px"}} className="width_50">
                {CurrentForm?
                  <div className="Signin_animation">
                    <SiginIn />
                  </div>
                  :
                  <div className="Register_animation">
                    <Register />
                  </div>}
              </div>
            </section>
          </div>
        </div>
      </div>
    </AuthProvider>
    )
  
}
export default Dashboard;













