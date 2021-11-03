import { Grid, Grow, Typography } from '@mui/material';
import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';

const NewsCards = ({articles}) => {

    const classes = useStyles();
    
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} index={index}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
