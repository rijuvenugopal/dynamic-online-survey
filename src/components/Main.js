import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ProgressBar from './ProgressBar/ProgressBar';
import Question from './Question/Question';
import Summary from './Summary/Summary';

const Main = ({ 
    currentQuestionId, 
    currentQuestionOrder, 
    totalQuestions, 
    questionsArray, 
    handlePrevNavigation, 
    handleNextNavigation,
    handleInputChange,
    summary,
    currentAnswer,
    questions,
    isSummaryPage
}) => (
    <BrowserRouter>
        <ProgressBar currentQuestionOrder={currentQuestionOrder} totalQuestions={totalQuestions} isSummaryPage={isSummaryPage}/>
        <main>
            <Switch>
                <Route exact path="/" redirectTo={`/${questionsArray[0].id}`} />
                <Route exact path="/summary" render={({ match }) => (
                    <Summary questions={questions} />
                )}/>
                <Route path="/:questionId" render={({ match }) => (
                    <Question currentQuestionOrder={currentQuestionOrder} handleInputChange={handleInputChange} question={questionsArray} currentAnswer={currentAnswer}/>
                )}/>
            </Switch>
        </main>
        <Navigation 
            handlePrevNavigation={handlePrevNavigation} 
            handleNextNavigation={handleNextNavigation} 
            currentQuestionOrder={currentQuestionOrder}
            totalQuestions={totalQuestions}
            questionsArray={questionsArray}
            isSummaryPage={isSummaryPage}/>
    </BrowserRouter>
);

export default Main;