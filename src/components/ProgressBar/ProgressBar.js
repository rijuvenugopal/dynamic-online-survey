import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentQuestionOrder, totalQuestions }) => (
    <article className="ProgressBarComponent">
        ProgressBar {currentQuestionOrder} out of {totalQuestions}
    </article>
);

export default ProgressBar;