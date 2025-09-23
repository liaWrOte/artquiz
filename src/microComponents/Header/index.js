import React from 'react';
import GoBack from '../goBack';
import TitleHeader from '../TitleHeader';
import Skip from '../Skip';
import { useContext } from 'react';
import { QuizContext } from '../../reducers';

const Header = () => {
    return (
        <div className="flex">
            <GoBack />
            <TitleHeader />
            <Skip />
        </div>
    )
}

export default Header;