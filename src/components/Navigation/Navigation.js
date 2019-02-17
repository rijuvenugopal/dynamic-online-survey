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
            {currentQuestionOrder > 0 && (<button>
                <Link className="NavigationComponent-link" 
                    to={prevLocation}
                    onClick={() => { handleNavigation(-1)} }>
                    back
                </Link>
            </button>)}
            {currentQuestionOrder < totalQuestions && !isSummaryPage && (<button disabled={isNextDisabled}>
                <Link className="NavigationComponent-link" 
                    to={isNextDisabled ? null: nextLocation}
                    onClick={() => {
                        if (!isNextDisabled) handleNavigation(1);
                    }}>
                    next
                </Link></button>)}
        </nav>
    )
};

export default Navigation;