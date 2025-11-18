import React, {useContext, useEffect} from "react";
import Button from "../../microComponents/Button";

import { QuizContext } from '../../reducers';

// Styles
import './index.scss';

const QuizResult = () => {
    let [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);
    return (
        <>
            <span>QuizResult</span>
            { quizState.correctAnswersCount > 6 &&
                <span>Bravoo</span>
            }
            { quizState.correctAnswersCount <= 6 &&
                <span>Almost there, try again</span>
            }
            <div className="answersResults">
                { Object.entries(quizState.questions).map( ([theme, questions], index) => (
                    <span className={`answer ${questions.rightAnswered ? 'right-answer' : 'wrong-answer'}`}>
                        {questions.correctAnswer}
                    </span>
                )) }
            </div>

            <div>
                
                <Button 
                    link={`/quiz/${quizState.theme}`}
                    text='Try again !'>
                </Button>
                <Button 
                    link={`/`}
                    text='On to the next one...'>
                </Button>
            </div>
        </>
    )
}

export default QuizResult;