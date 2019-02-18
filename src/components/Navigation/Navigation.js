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
}) => {
    const isNextDisabled = !currentAnswer || isError;

    return (
        <nav className="NavigationComponent">
            {currentQuestionOrder > 0 && 
                (<Link className="NavigationComponent-link" 
                    to={prevLocation}
                    onClick={() => { handleNavigation(-1) }}>
                    back
                </Link>)
            }
            {currentQuestionOrder < totalQuestions && !isSummaryPage && 
                (<Link className={`NavigationComponent-link${isNextDisabled ? " disabled" : ""}`}
                    to={isNextDisabled ? null : nextLocation}
                    onClick={() => {
                        if (!isNextDisabled) handleNavigation(1);
                    }}>
                    next
                </Link>)
            }
        </nav>
    )
};

export default Navigation;