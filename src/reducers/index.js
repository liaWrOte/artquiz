import React, { createContext, useReducer } from "react";

const initialState = {
    theme:'',
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    currentAnswer: '',
    showResults: false,
    correctAnswersCount: 0,
    timer: 4,
};

const reducer = (state, action) => {
    console.error("STATE ", state, action.payload);
    switch (action.type) {
        case "SELECT_THEME" : {
            return {
                ...state,
                theme: action.payload
            }
        }

        case "LOADED_QUESTIONS" : {
            return {
                ...state,
                questions: action.payload
            }
        }

        case "SELECT_ANSWER" : {
            const correctAnswersCount =
                action.payload ===
                state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswersCount + 1
                    : state.correctAnswersCount;
                // if ()
            const timer = 0;

            // 2. Mise à jour de rightAnswered
                const updatedQuestions = state.questions.map((q, i) => 
                    i === state.currentQuestionIndex ? { ...q, rightAnswered: action.payload === q.correctAnswer ? 1 : 0 }
                        : q
                );

            return {
                ...state,
                questions: updatedQuestions,
                currentAnswer: action.payload,
                correctAnswersCount,
                timer
            };
        }

        case "NEXT_QUESTION": {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults;
            const currentAnswer = '';
            const timer = 4;
            return {
                ...state,
                showResults,
                currentQuestionIndex,
                answers,
                currentAnswer,
                timer
            };
        }

        case "DECREASE_TIMER": {
            let timer;
            if (action.payload >= 0) {
                timer = action.payload;
            } else {
                timer = 0;
            }
            return {
                ...state,
                timer
            }
        }

        default: {
            return state;
        }
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}