import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  listItemText: {
    textDecoration: "none",
    color:"black",
    '&:hover': {
        color: "#b1a806", // Change to desired hover color
      },

  },
  links: {
    textDecoration: "none",
  },
  heading:{
    color:"black",
    textDecoration:"none",
    fontWeight:"bolder",
    fontStyle:"italic",
  },
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    marginTop:"50px"
  }
  
}));
