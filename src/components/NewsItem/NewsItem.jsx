import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/utilis.js";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

const NewsItem = ({ article, categoryName }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.newsComponent}
      sx={{ border: "none", boxShadow: "none" }}
    >
      <Link to={article?.url} className={classes.link} target="_blank">
        <div className={classes.content}>
          <Typography
            variant="body2"
            style={{
              color: "#bc829a",
            }}
          >
            {capitalizeFirstLetter(categoryName)}
          </Typography>
          <Typography variant="h3" className={classes.heading}>
            {article?.["title"]?.slice(0, 75)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {article?.["description"]?.slice(0, 50)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            By {article?.["author"]}
          </Typography>
        </div>
      </Link>
      <div className={classes.imageContainer}>
        <Link to={article?.url} className={classes.link} target="_blank">
          <CardMedia image={article.urlToImage} className={classes.media} />
        </Link>
      </div>
    </Card>
  );
};

export default NewsItem;
