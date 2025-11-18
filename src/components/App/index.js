import React from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
// == Import composants
import Home from '../Home';
import Quiz from '../Quiz';
import QuizResult from '../QuizResult';

import '../../styles/index.scss';
import './index.scss';

// Data
import quizData from '../../data/quiz.json';

// function Users() {
//     // 👇️ get ID from url
//     const params = useParams();
  
//     console.log(params); // 👉️ {userId: '4200'}
  
//     return <h2>userId is 👉️ {params.questionId}</h2>;
//   }

// == Composant
const App = () => (
    <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                { Object.entries(quizData).map( ([theme, questions], index) => (

                    <Route 
                        path={`/quiz/${theme}`} 
                        element={<Quiz theme={theme} questions={questions}/>}
                    />

                ))}

                <Route path="/result" element={<QuizResult />} />

            </Routes>
        </BrowserRouter>
    </div>
);

// == Export
export default App;
