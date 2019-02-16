import React from 'react';
import './Question.css';

const Question = ({ currentQuestionOrder, question, handleInputChange, summary, currentAnswer }) => (
    <div className="QuestionComponent">
        <h1>{question[currentQuestionOrder].text}</h1>
        {question[currentQuestionOrder].type === "textbox" && (
            <input type="text" value={currentAnswer} onChange={(e) => handleInputChange(e.currentTarget.value)}/>
        )}
        {question[currentQuestionOrder].type === "dropdown" && (
            <select onChange={(e) => handleInputChange(e.currentTarget.value)}>
                {question[currentQuestionOrder].options.map((value) => (
                    <option key={value} value={value} selected={currentAnswer === value}>{value}</option>
                ))}
            </select>
        )}
        {question[currentQuestionOrder].type === "radiobutton" && (
            <div>
            {question[currentQuestionOrder].options.map((value) => (
                <div key={value}>
                    <input id={value} type="radio" name={question[currentQuestionOrder].id} checked={currentAnswer === value} 
                        value={value} onChange={(e) => handleInputChange(e.currentTarget.value)} />
                    <label htmlFor={value}>{value}</label>
                </div>
            ))}
            </div>
        )}
    </div>
)

export default Question;
