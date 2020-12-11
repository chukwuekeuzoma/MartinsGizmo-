import React from "react"
import "./Search.css"
import {TextField,Card,Button} from "@material-ui/core"
import {useStyles} from "./SearchCss"

const Search = ()=>{
  const classes = useStyles();
    return(
      <div className="flex_input">
          <Card className={classes.card}>
              <TextField 
                className={classes.Textfield}
                variant="outlined"
                label="enter properties"
              />
              <TextField
                className={classes.Textfield} 
                variant="outlined"
                label="enter location of properties(e.g Hill Top avenue)"
              />
              <Button variant="contained"
                className={classes.Button} style={{margin:"25px"}}>
                  Search properties
              </Button>
          </Card>
        </div>
    )
}
export default Search;