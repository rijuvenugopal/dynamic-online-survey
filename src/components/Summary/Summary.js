import React from 'react';
import './Summary.css';

const Summary = ({
    questions
}) => (
    <article className="SummaryComponent">
        <ol>
            {questions.map(qn => (
                <li>
                    <span>{qn.text}</span>
                    <span>{qn.answer}</span>
                </li>
            ))}
        </ol>
    </article>
);

export default Summary;