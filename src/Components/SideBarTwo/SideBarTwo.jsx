import React, { Component } from 'react'
import { Fragment } from "react"
import "./SideBarTwo.css"
import { AccountBalance, Dashboard, Settings, PowerSettingsNew } from '@material-ui/icons';
import {Link} from "react-router-dom"

// var active = document.getElementById()

export default class SideBarTwo extends Component {
   constructor(){
       super();
       this.state ={
           change:"General"
       };
   }
   
   Dash = () => {
    this.setState({
      change:"Dash"
     })
    }

   Account = () =>{
       this.setState({
           change:"Account"
       })
    }
    
    Power = () =>{
        this.setState({
            change:"Power"
        })
     }

    setting = () =>{
        this.setState({
            change:"setting"
        })
    }

    render() {
        return (
            
            <Fragment >
             
                <div className="side_display_flex">
                    <nav className="nav_one">
                        <div>
                            <h2>Martins</h2>
                        </div>
                        <ul className="list_style">
                            <li className="margin_top">
                            <Link to="SideBarDash" className="linkcolourtwo">
                                <div onClick={this.Dash} className={`${this.state.change === "Dash"?"list_active icons_classes":"list icons_classes"}`}>
                                    <Dashboard />
                                    <span className={`${this.state === "Dash"?"font_size":"font_size"}`}>Dashboard</span>
                                </div>
                            </Link>
                            </li>

                            <li className="margin_top" >
                            <Link to ="/SideBarProps" className="linkcolourtwo">
                                <div onClick={this.Account} className={`${this.state.change === "Account"?"list_active icons_classes":"list icons_classes"}`}>
                                  <AccountBalance/> 
                                    <span className={`${this.state === "Account"?"font_size":"font_size"}`}>My properties</span>
                                </div>
                            </Link>
                            </li>
                            <li className="margin_top">
                                <div onClick={this.setting} className={`${this.state.change === "setting"?"list_active icons_classes":"list icons_classes"}`}>
                                    <Settings/>
                                    <span className={`${this.state === "setting"?"font_size":"font_size"}`}>Settings</span>
                                </div>
                            </li>
                            <li className="margin_top icons_classes">
                               <Link  to ="/" className="linkcolourtwo">
                                    <div onClick={this.Power} className={`${this.state.change === "Power"?"list_active icons_classes":"list icons_classes"}`}>
                                        <PowerSettingsNew/>
                                        <span className={`${this.state === "Power"?"font_size":"font_size"}`}>log out </span>
                                    </div>
                               </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="second">
                    <div>
                        <Link to="SideBarDash" className="linkcolourtwo">
                                <div className="list icons_classes link_second">
                                    <Dashboard/>
                                    <span className="font_size">Dashboard</span>
                                </div>
                        </Link>
                    </div>
                    <div>
                        <Link to ="/SideBarProps" className="linkcolourtwo">
                            <div className="list icons_classes link_second">
                                <AccountBalance/>
                                <span className="font_size">My properties </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                       <div className="list icons_classes link_second" >
                            <Settings/>
                            <span className="font_size">Settings</span>
                        </div>
                    </div>
                    <div>
                        <Link  to ="/" className="linkcolourtwo">
                            <div className="list icons_classes link_second">
                                <PowerSettingsNew/>
                                <span className="font_size">log out </span>
                            </div>
                        </Link>
                    </div>
                </div>
             
             </Fragment>
        
        )
    }
}
