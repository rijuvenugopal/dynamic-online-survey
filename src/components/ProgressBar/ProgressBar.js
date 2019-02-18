import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ answeredQuestions, totalQuestions }) => {
    const percent1 = answeredQuestions * 100 / totalQuestions;
    const percent2 = (percent1 !== 100) ? (totalQuestions-(answeredQuestions)) * 100 / totalQuestions : 0;
    const percentages = [percent1, percent2];

    return (
        <article className="ProgressBarComponent">
            {percentages.map((value, index) => (
                <div key={index} className={`percentBars percent-${index}`} style={{width : value+'%'}} />
            ))}
        </article>
    );
}

export default ProgressBar;