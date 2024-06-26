import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import useStyles from "./styles";
import { capitalizeFirstLetter } from "../../utils/utilis";
import { Link } from "react-router-dom";
const FeatureCard = ({ article, categoryName }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      sx={{ boxShadow: "none", boxSizing: "border-box" }}
    >
      <Link to={article?.url} className={classes.link} target="_blank">
        <CardMedia
          className={classes.cardMedia}
          image={
            article?.urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
        <CardContent style={{ padding: "10px 2px" }}>
          <Typography variant="body2" color="textSecondary" component="p">
            {capitalizeFirstLetter(categoryName)}
          </Typography>
          <Typography variant="h2" gutterBottom className={classes.heading}>
            {article?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article?.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By {article?.author}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FeatureCard;
