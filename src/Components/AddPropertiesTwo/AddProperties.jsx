import React from 'react'
import {Link} from "react-router-dom"
import {ArrowBack,Add} from '@material-ui/icons';
import "./AddProperties.css"
import Grid from '@material-ui/core/Grid';
import {TextField, Button } from "@material-ui/core"
import {useStyles} from "../SideBarPropertiesTwo/SideBarPropertiesTwoCss"

export default function AddProperties() {
    const classes = useStyles()
    return (
        <div>
            <div className="display_flex nav_two margin_bottom">
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
                <div className="form_animation">
                  <form>
                       <Grid container spacing={5}>
                            <Grid item xs={12}>
                            <TextField
                                className="form"
                                id="one"
                                label="Property Type(e.g flat, land or duplex)"
                                placeholder="Property Type(e.g flat, land or duplex)"
                                multiline
                                variant="outlined" />
                            
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="two"
                               label="Property Size(Specific measuring unit)"
                               placeholder="Property Size(Specific measuring unit)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="three"
                               label="Furnishing(e.g chars or none)"
                               placeholder="Furnishing(e.g chars or none)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="four"
                               label="Bathrooms(e.g rooms)"
                               placeholder="Bathrooms(e.g rooms)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="five"
                               label="packing space(e.g 2 car space)"
                               placeholder="packing space(e.g 2 car space)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="six"
                               label="Numbers of rooms Available"
                               placeholder="Numbers of rooms Available"
                               
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="seven"
                               label="price of property"
                               placeholder="price of property"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="eight"
                               label="Enter location of property(e.g Hill top avenue)"
                               placeholder="Enter location of property(e.g Hill top avenue)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="nine"
                               label="Local Goverment"
                               placeholder="Local Goverment"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                               className="form"
                               id="ten"
                               label="Closest Landmark (e.g a very populer place)"
                               placeholder="Closest Landmark (e.g a very populer place)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <TextField
                               className="form"
                               id="outlined-textarea"
                               label="Condition of property (e.g newly built e.t.c)"
                               placeholder="Condition of property (e.g newly built e.t.c)"
                               multiline
                               variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <TextField
                               className="form"
                               id="fourteen"
                               label="Extra infomation about the property: indicate things like reason for sale"
                               placeholder="Extra infomation about the property: indicate things like reason for sale"
                               multiline
                               variant="outlined" />
                            </Grid>
                        </Grid>
                  </form>
                <div className="addProps_DiplayFlex addProps_SpaceBtw mar-top">
                        <div>
                            <div className="margin_bottom">
                                <span className="add_image_props">Upload Images of property</span>
                            </div>
                            <div>
                                <input type="file" id="file" accept="image/*" />
                                <label htmlFor="file">
                                    <Add style={{fontSize:"50px",background:"#1c528a",color:"white",
                                                borderRadius:"10px",cursor:"pointer"
                                                }}/>
                                </label>
                            </div>
                        </div>
                        <div className="addProps_DiplayFlex aln_con btn_height">
                           <Button className={classes.Button}>
                               Add property
                           </Button>
                        </div>
                </div>
            </div>
        </div>
    )
}
                        
                    
                                
                            

                            



                
              
