import React from 'react'
import { Notifications } from '@material-ui/icons';
import "./SideBarDashBoardTwo.css"
import Grid from '@material-ui/core/Grid';


export default function SideBarDashBoardTwo() {
    return (
        <div> 
            <nav className="display_flex nav_two">
                <div className="display_flex Dashboard_two">
                    <span>
                        Dashboard
                        </span>
                </div>
                <div className="He">
                    <span className="He_main">
                        HE
                    </span>
                </div>
            </nav>
            <div className="Dash_animation">
                <div className="pa-24 pa-top-36">


                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={3} >
                            <div className="card_styling_blue card_blue_image">
                                <div><b>0</b></div>
                                <div className="number_of_prop"><b>total number of properties</b></div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={4} md={3}  >
                            <div className="card_red_image card_styling_red card_styling_general">
                                <div><b>0</b></div>
                                <div className="number_of_prop"><b>number of solid properties</b></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} >
                            <div className="card_purple_image card_styling_purple card_styling_general">
                                <div><b>0</b></div>
                                <div className="number_of_prop"><b>number of bought properties</b></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} >
                            <div className="section_two_div">

                                <div className="display_flex">
                                    <div>
                                        <Notifications className="notification" />
                                    </div>
                                    <div className="normanl_font_size">
                                        Notification
                                                </div>
                                </div>
                                <div className="display_flex pa_top_28">
                                    <div className="He">
                                        <span className="He_main">
                                            HE
                                                    </span>
                                    </div>
                                    <div>
                                        <span className="normanl_font_size">Martins added your house to favourite</span>
                                        <div className="ten_min">10 mins ago</div>

                                    </div>
                                </div>
                                <div className="display_flex pa_top_28">
                                    <div className="He">
                                        <span className="He_main">
                                            HE
                                                    </span>
                                    </div>
                                    <div>
                                        <span className="normanl_font_size">Martins added your house to favourite</span>
                                        <div className="ten_min">10 mins ago</div>

                                    </div>
                                </div>
                                <div className="display_flex pa_top_28">
                                    <div className="He">
                                        <span className="He_main">
                                            HE
                                                    </span>
                                    </div>
                                    <div>
                                        <span className="normanl_font_size">Martins added your house to favourite</span>
                                        <div className="ten_min">10 mins ago</div>

                                    </div>
                                </div>
                                <div className="display_flex pa_top_28">
                                    <div className="He">
                                        <span className="He_main">
                                            HE
                                                    </span>
                                    </div>
                                    <div>
                                        <span className="normanl_font_size">Martins added your house to favourite</span>
                                        <div className="ten_min">10 mins ago</div>

                                    </div>
                                </div>
                                <div className="display_flex pa_top_28">
                                    <div className="He">
                                        <span className="He_main">
                                            HE
                                                    </span>
                                    </div>
                                    <div>
                                        <span className="normanl_font_size">Martins added your house to favourite</span>
                                        <div className="ten_min">10 mins ago</div>

                                    </div>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>

    )
}
