import { Button } from "@material-ui/core"
import React,{Component} from "react"
import "./Dashboard.css"
import { withStyles } from '@material-ui/core/styles'
import Register from "../Form/Register/Register"
import SiginIn from "../Form/SiginIn/SignIn"


const useStyles = () => ({
  section_box_two_button:{
    width:"100%",
    fontSize:"0.7em", 
      "&:active":{
        color: "#1c528a !important",
        transition: "transform 2s",}
     },
       martins:{
        height:"4px",
        backgroundColor:"#1c528a",
        borderRadius:"20px",
        animationName:"$active_tab",
        animationDuration:"0.7s",
       },
      tab__btn :{
        color: "#c4c4c4",
        outline: "none",
        width: "50%",
        borderBottom: "3px solid transparent",
        paddingBottom: "4px"
      },
      Register:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"80%"
      },
      "@keyframes active_tab":{
        from:{
          width:"0%"
        },
        to:{
          width:"100%",
        }
      },
})

class Dashboard extends Component{

  state={
    CurrentForm:true
 };
  
  render(){
      // console.log(Form);

    const {classes} = this.props;
    // const {CurrentForm} = this.state
  return(
        <div className="box">
          <div className=" box-two">
              <section className="section_box_one">
                  <div className="martins">Martins</div>
                  <div className="martins_second">
                  Search for beautiful houses for sale or rent and also put up your houses 
                  for sale or rent all around Nigeria
                  </div>
               </section>
              <section className="section_box_two">
                    <div className="welcome">Welcome</div>
                    <div style={{width:"60%",display:"flex",justifyContent:'center',}}>
                        <div style={{width:"30%"}}>
                          <Button className={classes.section_box_two_button} 
                          onClick={()=>{this.setState({CurrentForm:true})}}>Sign in</Button>
                            <div className={`active_indicatior`}></div>
                        </div>
                          <div style={{width:"30%"}}>
                            <Button className={classes.section_box_two_button}  
                            onClick={()=>{this.setState({CurrentForm:false})}}>Register</Button>
                            <div className={`active_indicatior`}></div>
                          </div>
                    </div>
                    <div style={{width:"50%",marginTop:"30px"}}>
                     {this.state.CurrentForm?<SiginIn/>:<Register/>}
                    </div>
                    
                      
              </section>
           </div>
        </div>
      )
  }
}
export default  withStyles(useStyles)(Dashboard)



 