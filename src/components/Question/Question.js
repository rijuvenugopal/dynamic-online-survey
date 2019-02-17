import React from 'react';
import './Question.css';

const Question = ({ currentQuestionOrder, question, handleInputChange, error, currentAnswer }) => {
    const currentQuestion = question[currentQuestionOrder];
    
    return (
        <div className="QuestionComponent">
            <h1>{currentQuestion.text}</h1>
            {currentQuestion.type === "textbox" && (
                <>
                    <input type="text" className={error ? "QuestionComponent-errorField" : ""} 
                        value={currentAnswer} pattern={currentQuestion.validation}
                        onChange={(e) => handleInputChange(e.currentTarget.value)}/>
                    {error && (<div className="QuestionComponent-errorText">Please enter a valid value</div>)}
                </>
            )}
            {currentQuestion.type === "dropdown" && (
                <select onChange={(e) => handleInputChange(e.currentTarget.value)}>
                    <option key="empty" value={""}>Select an option</option>
                    {currentQuestion.options.map((value) => (
                        <option key={value} value={value} 
                            selected={currentAnswer === value}>{value}</option>
                    ))}
                </select>
            )}
            {currentQuestion.type === "radiobutton" && (
                <div>
                {currentQuestion.options.map((value) => (
                    <div key={value}>
                        <input id={value} type="radio" name={currentQuestion.id} 
                        checked={currentAnswer === value} value={value} 
                        onChange={(e) => handleInputChange(e.currentTarget.value)} />
                        <label htmlFor={value}>{value}</label>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default Question;
