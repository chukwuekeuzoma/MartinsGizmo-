import { withStyles } from '@material-ui/core/styles'

const useStyles = withStyles({
  section_box_two_button:{
    width:"50%",
    fontSize:"0.7em",
    paddingBottom:"10px",
    marginBottom:"18px !important"
    
  },
  active:{
    color:"blue",
  },

  tab__btn :{
    color: "#c4c4c4",
    outline: "none",
    width: "50%",
    borderBottom: "3px solid transparent",
    paddingBottom: "4px"
  },
  Register:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"80%"
  }
  // @keyframes active_tab:{
  //   from {
  //     width: 0%;
  //   }
  
  //   to {
  //     width: 100%;
  //   }}
});


export  {useStyles};