import React from 'react';
import './Summary.css';

const Summary = ({
    questions
}) => (
    <article className="SummaryComponent">
        <ol>
            {questions.map(qn => (
                <li key={qn.id}>
                    <span className="SummaryComponent-item">{qn.text}</span>
                    <span className="SummaryComponent-item">{qn.answer}</span>
                </li>
            ))}
        </ol>
    </article>
);

export default Summary;