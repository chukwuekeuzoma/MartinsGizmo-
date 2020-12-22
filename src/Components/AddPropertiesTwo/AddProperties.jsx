import React from 'react'
import {Link} from "react-router-dom"
import {ArrowBack} from '@material-ui/icons';
import "./AddProperties.css"

export default function AddProperties() {
    return (
        <div>
            <div className="display_flex nav_two">
                <div className="display_flex align_items">
                    <div style={{marginRight:"10px",marginTop:"7px"}}>
                        <Link to="/SideBarProps" className="linkcolour">
                            <ArrowBack className="arrow_opacity"/>
                        </Link> 
                    </div>
                    <div className="add_props">
                    <span>
                        add properties
                    </span>
                    </div>
                </div>
                <div className="He">
                <span className="He_main">
                    HE
                    </span>
                </div>
            </div>  
        </div>
    )
}
