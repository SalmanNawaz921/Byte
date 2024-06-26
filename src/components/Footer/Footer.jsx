import { IconButton, Typography } from "@mui/material";
import useStyles from "./styles";
import { social_links } from "../../constants/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }} >
            <Typography className={classes.logoText} variant="h1">
              Byte{" "}
            </Typography>
          </Link>
        </div>
        <hr className={classes.line} />
        <div className={classes.socialIcons}>
          {social_links.map((social, index) => (
            <Link to={social.link} target="_blank">
              <IconButton style={{ border: "2px solid red" }}>
                <social.Icon />
              </IconButton>
            </Link>
          ))}
        </div>
      </div>
      <hr className={classes.borderLine} />
      <div className={classes.bottom}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2024 Salman. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
