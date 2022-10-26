import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import wordsToNumbers from 'words-to-numbers'
import useStyles from './styles'
import Config from './config/config'
import './index.css'
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"

const alanKey = Config.alanKey;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  const [theme, setTheme] = useState("dark");

  const changeMode = () => {
     
    if(theme=="dark")
     {
      setTheme("light");
     }
      else setTheme("dark");
     
    };
    
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, savedArticles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(savedArticles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = savedArticles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening ...");
          }
        }
      },
    });
  }, []);


    

    return (
        <div className={theme} >
            <div className={classes.logoContainer}>
                <img src="https://miro.medium.com/max/1200/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" alt="Alan logo" className={classes.alanLogo}/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            <button onClick={changeMode} id="btn">{theme=="light"?<BsFillMoonStarsFill/>:<BsFillSunFill/>}</button>
        </div>
    )
}

export default App
