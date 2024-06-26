import { useEffect, useState } from "react";
import { useGetTopHeadlinesQuery } from "../../services/newsApi";
import {  Typography } from "@mui/material";
import useStyles from "./styles";
import { capitalizeFirstLetter } from "../../utils/utilis";
import NewsItem from "../NewsItem/NewsItem";
import FeatureCard from "../FeatureCard/FeatureCard";
import CategoryNews from "../CategoryNews/CategoryNews";

const News = ({ categoryName, home }) => {
  const { data, error, isLoading } = useGetTopHeadlinesQuery({
    categoryName: categoryName,
  });
  const [articles, setArticles] = useState(
    data?.articles ? data?.articles : []
  );

  useEffect(() => {
    updateArticles(data?.articles);
  }, [data]);
  const hasNoNullProperties = (obj) => {
    return Object.values(obj).every((value) => value !== null);
  };
  const updateArticles = (articles) => {
    const filterArticles = articles?.filter((article) =>
      hasNoNullProperties(article)
    );
    setArticles(filterArticles);
  };
  const classes = useStyles();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className={classes.headingDiv}>
        <Typography
          variant="h2"
          style={{ margin: "10px"}}
          className={classes.heading}
        >
          {capitalizeFirstLetter(categoryName)}
        </Typography>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.newsContainer}>
          <FeatureCard article={articles?.[0]} categoryName={categoryName} />
        </div>
        <hr className={classes.borderLine}/>
        <div className={classes.sideNewsContainer}>
          {articles?.slice(1, 4)?.map((article, i) => (
            <>
              <NewsItem article={article} categoryName={categoryName} key={i} />
              {i !== 2 && (
                <hr
                  style={{ height: "2px", opacity: "0.2", marginLeft: "30px" }}
                />
              )}
            </>
          ))}
        </div>
      </div>
      {!home && (
        <CategoryNews categoryName={categoryName} articles={articles} />
      )}
    </div>
  );
};

export default News;
