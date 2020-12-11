import { makeStyles } from '@material-ui/core/styles'

 const useStyles = makeStyles({
    card: {
        // width:"90%",
        height:"auto",
        backgroundColor:"white",
        marginTop:"-20px",
        display:"flex",
        justifyContent:"space-around",
        borderRadius:"10px",
        flexWrap:"wrap",
        flex:"1 1 90"
    },
    Textfield: {
       margin:"25px",
       width:"400px",
       flexGrow:"1"
    },
    Button: {
        fontSize:"12px",
        fontWeight:"bold",
        borderRadius:"5px",
        backgroundColor:"#fbb034",
        height:"50px",
        "&:hover":{
        background:"linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"
        },
       
    },
});
export  {useStyles};