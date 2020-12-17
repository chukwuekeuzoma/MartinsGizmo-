import React from 'react'
import { Notifications } from '@material-ui/icons';
import "./SideBarDashBoard.css"

export default function Sidebardashboard() {
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
            <div className="pa-24 pa-top-36">
                <div className="display_flex show_flex">
                    <div>
                        <div>
                            <b>Welcome, Martins</b>
                        </div>
                        <div className="pa_top-25 flex_wrap display_flex">
                            {/* <Grid container spacing={3}>
                                        <Grid item xs={6}> */}
                            <div className="col">
                                <div className="card_styling_blue card_blue_image">
                                    <div><b>0</b></div>
                                    <div className="number_of_prop"><b>total number of properties</b></div>
                                </div>
                            </div>
                            <div className="col margin_left_two">
                                <div className="card_red_image card_styling_red card_styling_general">
                                    <div><b>0</b></div>
                                    <div className="number_of_prop"><b>number of solid properties</b></div>
                                </div>
                            </div>
                            <div className="col margin_left_two">
                                <div className="card_purple_image card_styling_purple card_styling_general">
                                    <div><b>0</b></div>
                                    <div className="number_of_prop"><b>number of bought properties</b></div>
                                </div>
                            </div>
                            {/* </Grid>
                                    </Grid> */}
                        </div>
                    </div>
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <div className="section_two_div">
                            {/* <Grid container spacing={3}>
                                        <Grid item xs={6}> */}
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
                            {/* </Grid>
                                    </Grid> */}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
