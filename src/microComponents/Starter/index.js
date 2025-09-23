import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Starter = () => {
    return (
        <Link to="/Level1">
            <div className="green_block start_quiz">START QUIZZ</div>
        </Link>
    )
}

export default Starter;