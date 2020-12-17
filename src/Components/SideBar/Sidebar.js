import React from 'react'
import {Fragment,useState} from "react"
import {AccountBalance,Dashboard,Settings,PowerSettingsNew} from '@material-ui/icons';
import "./SideBar.css"
// import {Grid} from '@material-ui/core';
// import SideBarDashBoard from "./SideBarDashBoard/Sidebardashboard"
import SideBarProperties from "./SideBarProperties/SideBarProperties"




export default function Sidebar() {
    const [Component, SetComponent] = useState({ CurrentForm:"Dash"})
    return (
        <Fragment >
           <div className="display_flex Dashboard_styling_bac">
             <nav className="nav_one">
                 <div>
                   <h2>Martins</h2>
                 </div> 
                 <ul className="list_style">
                     <li className="margin_top"> 
                        <div className="list icons_classes" onClick={() => {SetComponent({ CurrentForm: "Dash" }) }}>
                           <Dashboard className="icons"/>
                           <span className="font_size">Dashboard</span>
                         </div>
                     </li>
  
                     <li className="margin_top">
                        <div className="list icons_classes">
                            <AccountBalance className="icons"/>
                            <span className="font_size">My properties </span>
                        </div>
                     </li>
                     <li className="margin_top">
                        <div  className="list icons_classes" >
                            <Settings  className="icons"/> 
                            <span className="font_size">Settings</span>
                        </div>
                     </li>
                     <li className="margin_top icons_classes">
                        <div className="list icons_classes">
                            <PowerSettingsNew  className="icons"/> 
                            <span className="font_size">log out </span>
                        </div>
                     </li>
                 </ul>
             </nav>
              <div className="margin_left">
                  {/* switch({Component}){
                  case:
                  <SideBarDashBoard />
                  <SideBarProperties/>

                  } */}
                     
              </div>
           </div>
                    
        </Fragment>





                    

                    
                
               




    ) 
}

