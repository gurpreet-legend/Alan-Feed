import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import wordsToNumbers from 'words-to-numbers'
import useStyles from './styles'
import Config from './config/config'
import './index.css'

const alanKey = Config.alanKey

const App = () => {

    const [ newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const [style, setStyle] = useState("cont");
    
    
    const classes = useStyles();

    const changeMode = () => {
       
      if(style=="cont")
       {
        setStyle("cont2");
       }
        else setStyle("cont");
       
      };

      
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
        <div className={style} >
            <div className={classes.logoContainer}>
                <img src="https://miro.medium.com/max/1200/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" alt="Alan logo" className={classes.alanLogo}/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            <button onClick={changeMode} id="btn"> Toggle Mode</button>
        </div>
    )
}

export default App
