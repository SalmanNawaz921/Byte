import { makeStyles } from "@mui/styles";
import { display, fontSize } from "@mui/system";

export default makeStyles((theme) => ({
  footer: {
    background: "#fff200",
    color: "#000",
    fontSize: "1.2rem",
    height: "240px",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
        height: "265px",

    },
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "70% !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "90% !important",
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center !important",
    },
  },

  socialIcons: {
    margin: "20px",
    display: "flex",
    gap: "12px",
  },
  bottom: {
    paddingBottom: "20px",
  },
  borderLine: {
    width: "50%",
    margin: "10px auto",
    opacity: "0.2",
    border: "1px dashed #000",
    [theme.breakpoints.down("lg")]: {
      width: "70% !important",
      margin: "20px auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "90% !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  line: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "1px",
      opacity: "0.2",
      border: "1px dashed #000",
      margin: "12px 0",
    },
  },
}));
