import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ 
    handlePrevNavigation, 
    handleNextNavigation, 
    currentQuestionOrder, 
    totalQuestions,
    questionsArray,
    isSummaryPage
}) => (
    <nav className="NavigationComponent">
        {currentQuestionOrder > 0 && (<button>
            <Link className="NavigationComponent-link" 
                to={`/${questionsArray[currentQuestionOrder-1].id}`} 
                onClick={handlePrevNavigation}>
                back
            </Link>
        </button>)}
        {currentQuestionOrder < totalQuestions - 1 && (<button>
            <Link className="NavigationComponent-link" 
                to={`/${questionsArray[currentQuestionOrder+1].id}`} 
                onClick={handleNextNavigation}>
                next
            </Link></button>)}
        {currentQuestionOrder === totalQuestions - 1 && !isSummaryPage && (<button>
            <Link className="NavigationComponent-link" 
            to="/summary" 
            onClick={handleNextNavigation}>
                next
            </Link>
        </button>)}
    </nav>
);

export default Navigation;