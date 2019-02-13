import React from 'react';
import './Question.css';

const Question = ({ match }) => (
    <div className="QuestionComponent">
        Question {match.params.questionId}
    </div>
)

export default Question;
