import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    textDecoration: "none",
    height: "100%",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover $heading": {
      textDecoration: "underline",
    },
  },
  cardMedia: {
    height: "500px",
    width: "1000px",
    objectFit: "cover",
    [theme.breakpoints.down("lg")]: {
      height: "200px",
      width: "100%",
    },
  },
  heading: {
    textDecoration: "none",
  },
}));
