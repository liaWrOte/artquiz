import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { QuizContext } from '../../reducers';

import './index.scss';

const Button = ({link, text}) => {
    const [quizState, dispatch] = useContext(QuizContext);  

    return (
        <Link 
            to={link}
            onClick={() => dispatch({
                type: "RESET_QUESTIONS",
                payload: ''
            })}>
            <div className="green_block start_quiz">{text}</div>
        </Link>
    )
}

export default Button;