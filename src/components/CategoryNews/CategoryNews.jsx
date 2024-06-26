import { Typography } from "@mui/material";
import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import useStyles from "./styles";

const CategoryNews = ({categoryName,articles}) => {
    const classes=useStyles();
  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h3">
        THE LATEST IN {categoryName.toUpperCase()}
      </Typography>
      <div
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      >
        {articles?.slice(4)?.map((article, i) => (
          <div className={classes.newsContainer}>
            <NewsItem article={article} categoryName={categoryName} key={i} />
            <hr style={{ height: "2px", opacity: "0.2" }} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
