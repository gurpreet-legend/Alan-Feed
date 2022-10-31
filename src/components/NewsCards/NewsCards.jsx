import { Grid, Grow, Typography } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles";
import infoCards from "../data/infoCards";

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]} :</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <NewsCard
              article={article}
              activeArticle={activeArticle}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
