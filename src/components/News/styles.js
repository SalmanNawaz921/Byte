import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer:{
   display:"flex",
   flexWrap:"wrap",
   width:"100%",
   gap:"12px",
  },
  newsContainer: {
    width: "65%",
    [theme.breakpoints.down("md")]:{
      width:"85% !important",
      margin:"0 auto",
     
    },
    [theme.breakpoints.down("sm")]:{
      width:"95% !important",     
    },
    [theme.breakpoints.down("lg")]:{
      width:"40%",
    },
    
  },

  borderLine:{
    width: "0.5px", opacity: "0.2", marginLeft: "15px",
    [theme.breakpoints.down("md")]:{
      display:"none"
    }
  },

  sideNewsContainer:{
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "30%",
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]:{
      margin:"10px auto",
      width:"88%",
      gap: "20px !important",
      
    },
    [theme.breakpoints.down("sm")]:{
      width:"94% !important",     
      gap: "0px !important",
    },
   
  },

  card: {
    textDecoration: "none",
  },

  headingDiv:{
    [theme.breakpoints.down("md")]:{
      width:"90%",
      margin:"auto"
    },
    [theme.breakpoints.down("sm")]:{
      width:"100%",
    }
  }
}));
