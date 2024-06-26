import { Route, Routes } from "react-router-dom";
import { categories } from "./constants/constants";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import { Hero, News } from "./components";
import { Grid } from "@mui/material";
import Footer from "./components/Footer/Footer";

const App = () => {
  const categoriesArr = categories.map(({ value }) => "/" + value);
  const { categoryName } = useSelector((state) => state.currCategory);
  return (
    <>
      <Hero />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Routes>
            {categoriesArr.map((path, index) => (
              <Route
                exact
                path={path}
                element={<News categoryName={categoryName} />}
                key={index}
                />
              ))}
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Grid>
      </Grid>
              <Footer />
    </>
  );
};

export default App;
