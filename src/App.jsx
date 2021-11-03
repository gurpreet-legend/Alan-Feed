import React, {useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';


const alanKey='f62a4482f030a60c59b23e8e8803491a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({command, articles}) => {
                if(command === 'newHeadlines') {
                    console.log(articles);
                }
            }
        })
    },[]);
    return (
        <div>
            <h1>Alan App
            </h1>
        </div>
    )
}

export default App
