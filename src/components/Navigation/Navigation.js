import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ 
    handleNavigation,
    currentQuestionOrder, 
    totalQuestions,
    isSummaryPage,
    currentAnswer,
    isError,
    prevLocation,
    nextLocation,
}) => (
    <nav className="NavigationComponent">
        {currentQuestionOrder > 0 && (<button>
            <Link className="NavigationComponent-link" 
                to={prevLocation}
                onClick={() => handleNavigation(-1)}>
                back
            </Link>
        </button>)}
        {currentQuestionOrder < totalQuestions && !isSummaryPage && (<button disabled={!currentAnswer || isError}>
            <Link className="NavigationComponent-link" 
                to={nextLocation}
                onClick={() => handleNavigation(1)}>
                next
            </Link></button>)}
    </nav>
);

export default Navigation;