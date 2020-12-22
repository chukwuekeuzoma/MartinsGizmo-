import React from 'react'
import "./SideBarPropertiesTwo.css"
import { useStyles } from "./SideBarPropertiesTwoCss"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function SideBarPropertiesTwo() {
    const classes = useStyles()
    return (



        <div>
            <nav className="display_flex nav_two  content_align">
                <div className="display_flex Dashboard_two">
                    <span>
                        Properties
                        </span>
                </div>
                <div className="display_flex content_align">
                    <div className="padding_right_20">
                        <Link to="/AddProps" className="linkcolour">
                            <Button variant="contained"
                                className={classes.Button}>
                                add new properties
                                </Button>
                        </Link>

                    </div>
                    <div className="He">
                        <span className="He_main">
                            HE
                            </span>
                    </div>
                </div>
            </nav>
            <div className="text_align paddding_right_40 padding_top_40 SBPROPS_animation">
                <div className="table_styling">
                    <div className="table_styling_coloums">S/N</div>
                    <div className="table_styling_coloums">PROPERTY TYPE</div>
                    <div className="table_styling_coloums">DATE ADDED</div>
                    <div className="table_styling_coloums">REACTIONS</div>
                    <div className="table_styling_coloums">ACTIONS</div>
                </div>

            </div>
        </div>




    )
}

