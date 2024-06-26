import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";

export default makeStyles((theme) => ({
  nav:{
    height: "220px",
    width: "100%",
    background: "#fff200",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    position: "relative",
   
  },
  categoriesStyle: {
    width: "min(100%,77.5rem)",
    [theme.breakpoints.up("lg")]: {
      padding: "0 5px",
      marginTop: "0",
    },
    margin: "0 auto",
    marginTop: "5px",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "start",
    textDecoration: "none",
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
      gap: "10px",
    },
    height: "90px",
  },
  navLinks: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "blue",
    },
    border: "none",
  },
  drawerPaper: {
    width: "350px",
  },

  menu:{
    position: "absolute",
    top: "90%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    right: "22%",
    [theme.breakpoints.down("sm")]: {
      right: "3%",

    }
  },

  logo: {
    position: "absolute",
    top: "80%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    right: "68%",
    [theme.breakpoints.down("md")]: {
      top: "85%",
      
    },
    [theme.breakpoints.down("sm")]: {
      right: "50%",
      top: "89%",

    }
  },

  logoText: {
    fontSize: "150px",
    whiteSpace: "nowrap",
  },
}));
