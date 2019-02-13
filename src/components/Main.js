import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ProgressBar from './ProgressBar/ProgressBar';
import Question from './Question/Question';

const Main = () => (
    <Fragment>
        <ProgressBar />
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <h1>Welcome to Dynamic Online Survey!</h1>
                    )}/>
                    <Route path="/:questionId" component={Question} />
                </Switch>
            </BrowserRouter>
        </main>
        <Navigation />
    </Fragment>
);

export default Main;