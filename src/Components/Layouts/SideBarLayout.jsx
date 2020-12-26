import React, { Component } from 'react'
import SideBarTwo from "../../Components/SideBarTwo/SideBarTwo"
import "./Layout.css"




export default class SideBarLayout extends Component {
    render() {
        return (
            <div className="Dashboard_styling_bac">
                 <SideBarTwo/>
                 <div className="margin_left">
                    {this.props.children}
                 </div>
                  
            </div>
        )
    }
}
