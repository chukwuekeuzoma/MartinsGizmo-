import React from 'react'
import { useStyles } from "./SideBarPropertiesCss"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./SideBarProperties.css"

export default function SideBarProperties() {
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
                        <Link className="linkcolour">
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
        </div>
    )


}
