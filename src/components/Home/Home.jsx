import React from "react";
import { categories } from "../../constants/constants";
import { News } from "..";
import { Box} from "@mui/material";

const Home = () => {
  return (
    <Box  >
      {categories.map((category, index) => (
        <div
          key={index}
          style={{
            marginBottom: "50px",
          }}
        >
          <News categoryName={category.name.toLowerCase()} home={true} />
        </div>
      ))}
    </Box>
  );
};

export default Home;
