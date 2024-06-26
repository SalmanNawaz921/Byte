import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";

export default makeStyles((theme) => ({
  newsContainer: {
    width: "60%",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        margin:"auto",
    },
    [theme.breakpoints.down("sm")]: {
        width: "98%",
    }
  },
}));
