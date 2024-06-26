import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { categories, social_links } from "../../constants/constants";
import { Close } from "@mui/icons-material";
import { selectCategory } from "../../features/currCategory.js";

const Sidebar = ({ setDrawerOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { categoryName } = useSelector((state) => state.currCategory);
  useEffect(() => {}, [categoryName]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          color="inherit"
          sx={{ outline: "none" }}
          onClick={() => setDrawerOpen((prevMobileState) => !prevMobileState)}
        >
          <Close sx={{ fontSize: "36px" }} />
        </IconButton>
      </div>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <Link to="/" className={classes.links}>
          <Typography
            variant="h1"
            className={classes.heading}
            sx={{ fontSize: "120px" }}
          >
            Byte
          </Typography>
        </Link>
        <div className={classes.container}>
          <List className={classes.list}>
            {categories.map(({ name, value }) => (
              <Link
                key={value}
                className={classes.links}
                to={`/${name.toLowerCase()}`}
              >
                <ListItem onClick={() => dispatch(selectCategory(value))}>
                  <ListItemText>
                    <Typography variant="h4" className={classes.listItemText}>
                      {name}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider sx={{ borderBottomWidth: "4px" }} />
              </Link>
            ))}
          </List>
          <Divider />
          <div style={{ margin: "60px 0", display: "flex", gap: "12px" }}>
            {social_links.map((social, index) => (
              <Link to={social.link} target="_blank">
                <IconButton style={{ border: "2px solid red" }}>
                  <social.Icon />
                </IconButton>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
