import React, { useContext, useEffect } from "react";
import { QuizContext } from "../../reducers";

import './index.scss';

const Timer = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    useEffect(()=> {
        const timerInterval = quizState.timer > 0 && setInterval(
            () => 
            dispatch({type: 'DECREASE_TIMER',
            payload: (quizState.timer - 1)
        }), 1000);
        return () => clearInterval(timerInterval);
    });
    if ( quizState.questions.length > 0) {
        const isCorrectAnswer = quizState.questions[quizState.currentQuestionIndex].correctAnswer === quizState.currentAnswer;
    
    return (
        <>
            {quizState.timer > 0 &&  <div className='timer'>{ quizState.timer}s</div>}
            {quizState.timer === 0 && isCorrectAnswer && <span className="timer_end">Bien joué !</span>
            }
            {quizState.timer === 0 && !isCorrectAnswer && <span className="timer_end">Zut, ça sera pour la prochaine !</span>
            }
        </>
    )
        }

}

export default Timer;