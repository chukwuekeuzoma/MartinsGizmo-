import React, { Component } from 'react'
import SideBarTwo from "../../Components/SideBarTwo/SideBarTwo"




export default class SideBarLayout extends Component {
    render() {
        return (
            <div className="Dashboard_styling_bac">
                 <SideBarTwo/>
                 <div style={{marginLeft:"17%",width:"80%"}}>
                    {this.props.children}
                 </div>
                  
            </div>
        )
    }
}
