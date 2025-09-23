import React from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import { QuizProvider } from '../../reducers';
// == Import composants
import Home from '../Home';
import Quiz from '../Quiz';

import '../../styles/index.scss';
import './index.scss';

// function Users() {
//     // 👇️ get ID from url
//     const params = useParams();
  
//     console.log(params); // 👉️ {userId: '4200'}
  
//     return <h2>userId is 👉️ {params.questionId}</h2>;
//   }

// == Composant
const App = () => (
    <QuizProvider>
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                        <Route 
                            path=":/level1/:questionId" 
                            render={({ match }) => (
                                <Quiz id={match.params.questionId} />
                            )} />
                    <Route path="/level1" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </div>
    </QuizProvider>
);

// == Export
export default App;
