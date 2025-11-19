import React, {useContext} from 'react';
import Title from '../../microComponents/Title';
import Cutie from '../../microComponents/Cutie';
import QuizVignette from '../../microComponents/QuizVignette';
import { Link } from 'react-router-dom';
import { QuizContext } from "../../reducers";

// Data
import quizData from '../../data/quiz.json';
import badgeImage from '../../assets/badge.svg';
import paletteLogo from '../../assets/palette.svg';

import './index.scss';

const Home = () => { 
    const [quizState, dispatch] = useContext(QuizContext);  

    return (
    <div className='Home'>
        <div className="user-container">
            <Title />
            
            <div className="badge-container">
                <img src={badgeImage} alt="" />
                <img src={badgeImage} alt="" />
                <img src={badgeImage} alt="" />
                <img src={badgeImage} alt="" />
            </div>
        </div>


        <div className="logo-container">
            <img src={paletteLogo} alt="" />
            <span className="logo-text">ArtQuiz</span>
            <p>Ready to play ?</p>
        </div>

        <div className="quiz-container">
            <p class="quiz-label">Choose your theme</p>
            <div className="quiz-container-links">
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
        </div>

        {/* <Cutie /> */}
    </div>
    )
};

// == Export
export default Home;
