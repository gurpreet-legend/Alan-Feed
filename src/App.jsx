import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import wordsToNumbers from 'words-to-numbers'
import useStyles from './styles'

const alanKey='f62a4482f030a60c59b23e8e8803491a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [ newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({command, articles, number}) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if( command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
                }
                else if( command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try that again.')
                    }
                    else if(article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening ...');
                    }
                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://miro.medium.com/max/1200/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" alt="Alan logo" className={classes.alanLogo}/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App
