import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentQuestionOrder, totalQuestions }) => (
    <article className="ProgressBarComponent">
        ProgressBar {currentQuestionOrder + 1} out of {totalQuestions}
    </article>
);

export default ProgressBar;