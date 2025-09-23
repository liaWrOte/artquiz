import React from 'react';
import { useContext } from "react";
import { QuizContext } from "../../reducers";

import './index.scss';

const NextQuestion = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    if ( quizState.questions.length > 0) {
        const isCorrectAnswer = quizState.questions[quizState.currentQuestionIndex].correctAnswer === quizState.currentAnswer;

        // if (isCorrectAnswer && quizState.currentAnswer.length > 0 ) {
        //     return (<span onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Question suivante</span>)
        // }
        if (isCorrectAnswer || quizState.timer === 0) {
            return (<span className="next_question" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Question suivante <span className="next_question_arrow">&#62;</span></span>)
            // return (<span>Essaie encore</span>)
        }
    }
}

export default NextQuestion;