import React from 'react'
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({articles}) => {
    return (
        <div>
            {articles.map((article, index) => (
                <NewsCard key={index}/>
            ))}
        </div>
    )
}

export default NewsCards
