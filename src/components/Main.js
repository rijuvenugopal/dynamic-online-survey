import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ProgressBar from './ProgressBar/ProgressBar';
import Question from './Question/Question';

const Main = ({ 
    currentQuestionId, 
    currentQuestionOrder, 
    totalQuestions, 
    questionsArray, 
    handlePrevNavigation, 
    handleNextNavigation,
    handleInputChange,
    summary,
    currentAnswer
}) => (
    <BrowserRouter>
        <ProgressBar currentQuestionOrder={currentQuestionOrder} totalQuestions={totalQuestions}/>
        <main>
            <Switch>
                <Route exact path="/" redirectTo={`/${questionsArray[0].id}`} />
                <Route path="/:questionId" render={({ match }) => (
                    <Question currentQuestionOrder={currentQuestionOrder} handleInputChange={handleInputChange} question={questionsArray} currentAnswer={currentAnswer}/>
                )}/>
                {/* <Route path="/summary" render={({ match }) => (
                    <Question question={questionsArray.find(qn => qn.id === match.params.questionId)} />
                )}/> */}
            </Switch>
        </main>
        <Navigation 
            handlePrevNavigation={handlePrevNavigation} 
            handleNextNavigation={handleNextNavigation} 
            currentQuestionOrder={currentQuestionOrder}
            totalQuestions={totalQuestions}
            questionsArray={questionsArray}/>
    </BrowserRouter>
);

export default Main;