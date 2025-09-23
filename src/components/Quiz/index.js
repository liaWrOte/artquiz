import React, {useContext, useEffect} from "react";

import { QuizContext } from '../../reducers';

import Header from "../../microComponents/Header";
import Question from "../../microComponents/Question";
import Answers from "../../microComponents/Answers";
import Timer from "../../microComponents/Timer";
import NextQuestion from "../../microComponents/NextQuestion";

import data from '../../data/level1.json';
import Timeline from "../../microComponents/Timeline";

const Quiz = () => {
    let [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        if (quizState.questions.length > 0){
            return;
        } else {
            dispatch({type: 'LOADED_QUESTIONS', payload: data})
        }
    })
    return (
        <>
            <Header />
            <Timeline />
            <Timer />
            <Question />
            <Answers />
            <NextQuestion />
        </>
    )
}

export default Quiz;