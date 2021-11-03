import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey='f62a4482f030a60c59b23e8e8803491a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [ newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({command, articles}) => {
                if(command === 'newHeadlines') {
                    // console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" alt="Alan logo" className={classes.alanLogo}/>
            </div>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App
