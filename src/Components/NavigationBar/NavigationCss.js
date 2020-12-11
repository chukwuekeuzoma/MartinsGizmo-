import { makeStyles } from '@material-ui/core/styles'

 const useStyles = makeStyles({
    Appbar: {
     backgroundColor:"#1c528a",
     position:"static",
     marginTop:"0px",
    },
    Toolbar: {
        display:"flex", justifyContent:"space-between"
    },
    martins: {
      display:"flex",
      marginRight:"50px",
      fontSize:"12px",
      fontWeight:"bolder"
    },
    Button:{
        fontSize:"12px",fontWeight:"bold",marginTop:"1px",borderRadius:"5px",
        backgroundColor:"#fbb034",
    "&:hover":{
      backgroundColor: "#fbb034",
      backgroundImage: "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"
    },
    }
  });


export  {useStyles};

