import React from 'react';
import './Question.css';

const Question = ({ question }) => (
    <div className="QuestionComponent">
        <h1>{question.text}</h1>
        {question.type === "textbox" && (
            <input type="text" value={question.value} />
        )}
        {question.type === "dropdown" && (
            <select>
                {question.options.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        )}
        {question.type === "radiobutton" && (
            <div>
            {question.options.map((value) => (
                <div key={value}>
                    <input id={value} type="radio" name={question.id} value={value} />
                    <label htmlFor={value}>{value}</label>
                </div>
            ))}
            </div>
        )}
    </div>
)

export default Question;
