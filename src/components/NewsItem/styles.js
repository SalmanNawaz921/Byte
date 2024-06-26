
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  newsComponent: {
    display: "flex",
    width: "100%",
    gap: "20px 0",
    [theme.breakpoints.down("md")]: {
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginLeft: "0",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "0",
    },
  },
  category: {
    color: "#bc829a",
  },
  imageContainer: {
    width: "30%",
    height: "auto",
    marginTop:"25px",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
   
  },
  media: {
    width: "200px",
    height: "100px",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      width: "100px",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover $heading": {
      textDecoration: "underline",
    },
  },
  heading: {
    // Add any additional styling for the heading here
  },
}));
