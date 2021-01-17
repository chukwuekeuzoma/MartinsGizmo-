import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  section_box_two_button: {
    width: "100%",
    fontSize: "0.7em",
  },
  active:{
    color: "#1c528a !important",
    transition: "transform 2s",
  },

  martins: {
    height: "4px",
    backgroundColor: "#1c528a",
    borderRadius: "20px",
    animationName: "$active_tab",
    animationDuration: "0.7s",
  },
  tab__btn: {
    color: "#c4c4c4",
    outline: "none",
    width: "50%",
    borderBottom: "3px solid transparent",
    paddingBottom: "4px"
  },
  Register: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%"
  },
  "@keyframes active_tab": {
    from: {
      width: "0%"
    },
    to: {
      width: "100%",
    }
  },
});


export  {useStyles};