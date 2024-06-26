import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Playfair Display',
      fontWeight: 'bolder',
      fontStyle: 'italic',
      fontSize: '150px',
      '@media (max-width:1200px)': {
        fontSize: '130px', // Smaller font size for small screens
      },
      '@media (max-width:965px)': {
        fontSize: '110px', // Smaller font size for small screens
      },
      '@media (max-width:600px)': {
        fontSize: '100px', // Smaller font size for small screens
      },
      '@media (max-width:400px)': {
        fontSize: '75px', // Even smaller for very small screens
      },
    },
    h2: {
      fontFamily: 'Segoe UI',
      fontWeight: 'bolder',
      fontSize: '40px',
      '@media (max-width:1200px)': {
        fontSize: '30px', // Smaller font size for small screens
      },
      '@media (max-width:600px)': {
        fontSize: '30px', // Smaller font size for small screens
      },
      '@media (max-width:400px)': {
        fontSize: '20px', // Even smaller for very small screens
      },
    },
    h3: {
      fontFamily: 'Segoe UI',
      fontWeight: 'bolder',
      fontSize: '20px',
      '@media (max-width:600px)': {
        fontSize: '16px', // Smaller font size for small screens
      },
      '@media (max-width:400px)': {
        fontSize: '14px', // Even smaller for very small screens
      },
    },
    body2: {
      fontFamily: 'Segoe UI',
      fontSize: '16px',
      '@media (max-width:600px)': {
        fontSize: '14px', // Smaller font size for small screens
      },
      '@media (max-width:400px)': {
        fontSize: '12px', // Even smaller for very small screens
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
