import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ProgressBar from './ProgressBar/ProgressBar';
import Question from './Question/Question';

const Main = ({ currentQuestionId, currentQuestionOrder, totalQuestions, questionsArray }) => (
    <BrowserRouter>
        <ProgressBar currentQuestionOrder={currentQuestionOrder} totalQuestions={totalQuestions}/>
        <main>
            <Switch>
                <Route exact path="/" render={() => (
                    <h1>Welcome to Dynamic Online Survey!</h1>
                )}/>
                <Route path="/:questionId" render={({ match }) => (
                    <Question question={questionsArray.find(qn => qn.id === match.params.questionId)} />
                )} />
            </Switch>
        </main>
        <Navigation />
    </BrowserRouter>
);

export default Main;