import React from 'react';
import './Question.css';

const Question = ({ question }) => (
    <div className="QuestionComponent">
        {question.text}
    </div>
)

export default Question;
