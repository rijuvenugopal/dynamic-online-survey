import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ 
    handlePrevNavigation, 
    handleNextNavigation, 
    currentQuestionOrder, 
    totalQuestions,
    isSummaryPage,
    currentAnswer,
    isError,
    prevRoute,
    nextRoute
}) => (
    <nav className="NavigationComponent">
        {currentQuestionOrder > 0 && (<button>
            <Link className="NavigationComponent-link" 
                to={prevRoute} 
                onClick={handlePrevNavigation}>
                back
            </Link>
        </button>)}
        {currentQuestionOrder < totalQuestions - 1 && (<button disabled={!currentAnswer || isError}>
            <Link className="NavigationComponent-link" 
                to={nextRoute}
                onClick={handleNextNavigation}>
                next
            </Link></button>)}
        {currentQuestionOrder === totalQuestions - 1 && !isSummaryPage && (<button disabled={!currentAnswer || isError}>
            <Link className="NavigationComponent-link" 
            to="/summary" 
            onClick={handleNextNavigation}>
                next
            </Link>
        </button>)}
    </nav>
);

export default Navigation;