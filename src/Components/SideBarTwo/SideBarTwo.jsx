import React, { Component } from 'react'
import { Fragment } from "react"
import "./SideBarTwo.css"
import { AccountBalance, Dashboard, Settings, PowerSettingsNew } from '@material-ui/icons';
import {Link} from "react-router-dom"

export default class SideBarTwo extends Component {
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
                                <div className="list icons_classes">
                                    <Dashboard className="icons" />
                                    <span className="font_size">Dashboard</span>
                                </div>
                            </Link>
                            </li>

                            <li className="margin_top">
                            <Link to ="/SideBarProps" className="linkcolourtwo">
                                <div className="list icons_classes">
                                    <AccountBalance className="icons" />
                                    <span className="font_size">My properties </span>
                                </div>
                            </Link>
                            </li>
                            <li className="margin_top">
                                <div className="list icons_classes" >
                                    <Settings className="icons" />
                                    <span className="font_size">Settings</span>
                                </div>
                            </li>
                            <li className="margin_top icons_classes">
                               <Link  to ="/" className="linkcolourtwo">
                                    <div className="list icons_classes">
                                        <PowerSettingsNew className="icons" />
                                        <span className="font_size">log out </span>
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
                                    <Dashboard className="icons" />
                                    <span className="font_size">Dashboard</span>
                                </div>
                        </Link>
                    </div>
                    <div>
                        <Link to ="/SideBarProps" className="linkcolourtwo">
                            <div className="list icons_classes link_second">
                                <AccountBalance className="icons" />
                                <span className="font_size">My properties </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                       <div className="list icons_classes link_second" >
                            <Settings className="icons" />
                            <span className="font_size">Settings</span>
                        </div>
                    </div>
                    <div>
                        <Link  to ="/" className="linkcolourtwo">
                            <div className="list icons_classes link_second">
                                <PowerSettingsNew className="icons" />
                                <span className="font_size">log out </span>
                            </div>
                        </Link>
                    </div>
                </div>
             
             </Fragment>
        
        )
    }
}
