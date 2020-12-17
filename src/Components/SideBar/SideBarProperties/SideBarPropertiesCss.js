import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
 Button:{
        fontSize:"11px",fontWeight:"bold",marginTop:"1px",borderRadius:"5px",
        backgroundColor:"#fbb034",padding:"15px",
    "&:hover":{
      backgroundColor: "#fbb034",
      backgroundImage: "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"
    },
    }
  });


export  {useStyles};