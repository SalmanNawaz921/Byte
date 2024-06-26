import { Typography, Drawer, IconButton } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Menu } from "@mui/icons-material";
const Navbar = () => {
  const { categoryName } = useSelector((state) => state.currCategory);
  useEffect(() => {}, [categoryName]);
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <Typography className={classes.logoText} variant="h1">
            Byte{" "}
          </Typography>
        </Link>
      </div>
      <div className={classes.menu}>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ outline: "none" }}
          onClick={() => setDrawerOpen((prevMobileState) => !prevMobileState)}
        >
          <Menu sx={{ fontSize: "36px" }} />
        </IconButton>
      </div>
      <Drawer
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen((prevMobileState) => !prevMobileState)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: "#fff200",
            boxShadow: "2px 2px 5px 2px rgba(0,0.5,0.5,0.5)",
          },
        }}
      >
        <Sidebar setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
