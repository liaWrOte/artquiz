import React, {useContext} from 'react';
import Title from '../../microComponents/Title';
import Subtitle from '../../microComponents/Subtitle';
import Cutie from '../../microComponents/Cutie';
import QuizVignette from '../../microComponents/QuizVignette';
import { Link } from 'react-router-dom';
import { QuizContext } from "../../reducers";

// Data
import quizData from '../../data/quiz.json';

import './index.scss';

const Home = () => { 
    const [quizState, dispatch] = useContext(QuizContext);   

    return (
    <div className='Home'>
        <Title />
        <Subtitle />
        <div className="quiz-pack">
            { Object.entries(quizData).map( ([theme, questions], index) => (
                    <Link 
                        to={"/quiz/" + theme}
                        onClick={() => dispatch({
                                type: "SELECT_THEME",
                                payload: theme
                            })}>
                        <QuizVignette 
                            answers={questions}
                            themeText={theme}
                            key={index}
                            
                        />
                    </Link>

            ))}

        </div>

        {/* <Cutie /> */}
    </div>
    )
};

// == Export
export default Home;
