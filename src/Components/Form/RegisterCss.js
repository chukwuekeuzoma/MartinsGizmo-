import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    Button:{
        outline: "none",
        borderRadius:"5px",
        backgroundColor: "#FFBC44",
        color: "#000",
        width: "100%",
        height: "46px", 
    "&:hover":{
        backgroundColor: "#fbb034",
        background:"linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"
    },
    "&:active":{
        transform: "scale(1.03, 1.04)",
      
      boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14)",
          // 0 3px 1px -2px rgba(0, 0, 0, 0.12)  0 1px 5px 0 rgba(0, 0, 0, 0.2)",
      webkikBboxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14)"
          // 0 3px 1px -2px rgba(0, 0, 0, 0.12)  0 1px 5px 0 rgba(0, 0, 0, 0.2)",
      }
    },
    l_active:{
        color: "#1c528a !important",
        transition: "transform 2s",
        fontSize:"15px",
        fontWeight:"bold"
      },

    TextField:{
        width: "100%",
    }
  });

  export  {useStyles};