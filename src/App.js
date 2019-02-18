import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navigation from './components/Navigation/Navigation';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Question from './components/Question/Question';
import Summary from './components/Summary/Summary';
import questionsArray from './data/questionsArray';
import './App.css';

class App extends Component {
  constructor() {
    super();

    let questionsIndex = 0;
    let onlineSurveyObject = questionsArray;
    let isSummaryPage = false;

    const onlineSurveyObjectItem = localStorage.getItem('onlineSurveyObject');    
    if (onlineSurveyObjectItem) {
      onlineSurveyObject = JSON.parse(onlineSurveyObjectItem);
      questionsIndex = onlineSurveyObject.findIndex(qn => qn.answer === "");
      if (questionsIndex < 0) {
        questionsIndex = onlineSurveyObject.length - 1;
        isSummaryPage = true;
      }
    }

    const currentPath = isSummaryPage ? 'summary' : onlineSurveyObject[questionsIndex].id;
    this.history = createBrowserHistory();
    this.history.push(currentPath);

    this.state = {
      currentQuestionId: onlineSurveyObject[questionsIndex].id,
      currentQuestionOrder: questionsIndex,
      currentAnswer: onlineSurveyObject[questionsIndex].answer,
      error: this.getErrorState(onlineSurveyObject[questionsIndex], onlineSurveyObject[questionsIndex].answer),
      questions: onlineSurveyObject,
      isSummaryPage
    };
    this.totalQuestions = questionsArray.length;
  }

  componentDidMount() {
    this.unlisten = this.history.listen((location, action) => {
      const path = location.pathname.replace('/','');
      const currentQn = this.state.questions.find(qn => qn.id === path);

      if (currentQn) {
        const currentQuestionOrder = this.state.questions.indexOf(currentQn);
        this.setState({
          currentQuestionOrder
        }, () => {
          this.handleNavigation(0);
        });
      } else {
        this.handleNavigation(1);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  /* value can have 3 possible values
  ** -1 for back button, 1 for next button &
  ** 0 for browser back/forward navigation 
  */
  handleNavigation = (value) => {
    this.setState((state) => {
      let newQuestionOrder = state.currentQuestionOrder;
      let isSummaryPage = false;
      let questions = [...state.questions];
      
      if (value !== 0) {
        questions[state.currentQuestionOrder] = {
          ...questions[state.currentQuestionOrder],
          answer: state.currentAnswer
        }
        if (value === 1) {
          isSummaryPage = state.currentQuestionOrder === this.totalQuestions - 1;
          newQuestionOrder = isSummaryPage ? state.currentQuestionOrder: state.currentQuestionOrder + 1;
        } else {
          newQuestionOrder = state.isSummaryPage ? state.currentQuestionOrder: state.currentQuestionOrder - 1;
        }
      }
      
      return {
        currentQuestionId: questionsArray[newQuestionOrder].id,
        currentQuestionOrder: newQuestionOrder,
        currentAnswer: state.questions[newQuestionOrder].answer,
        error: this.getErrorState(questionsArray[newQuestionOrder], state.questions[newQuestionOrder].answer),
        questions,
        isSummaryPage
      }
    }, () => {
      if (value !== 0) {
        localStorage.setItem('onlineSurveyObject', JSON.stringify(this.state.questions));
      }
    });
  }

  getErrorState = (question, value) => {
    if (!value) return false;
    
    const patternString = question.validation;
    const pattern = new RegExp(patternString, "i");
    return !pattern.test(value);
  }

  handleInputChange = (value) => {
    const isError = this.getErrorState(this.state.questions[this.state.currentQuestionOrder], value);
    this.setState({
      currentAnswer: value,
      error: isError
    });
  }

  render() {
    const prevPath = !this.state.isSummaryPage && this.state.currentQuestionOrder > 0 ? questionsArray[this.state.currentQuestionOrder-1].id : questionsArray[this.state.currentQuestionOrder].id;
    const nextPath = this.state.currentQuestionOrder < this.totalQuestions - 1 ? questionsArray[this.state.currentQuestionOrder+1].id : "summary";
    const prevLocation = {
      pathname: prevPath,
      state: this.state
    };
    const nextLocation = {
      pathname: nextPath,
      state: this.state
    };

    return (
      <BrowserRouter>
        <ProgressBar currentQuestionOrder={this.state.currentQuestionOrder} 
          totalQuestions={this.totalQuestions} isSummaryPage={this.state.isSummaryPage}/>
        <main className="MainComponent">
            <Switch>
                <Route exact path="/" redirectTo={`/${this.state.isSummaryPage? "summary": this.state.currentQuestionId}`}/>
                <Route path="/summary" render={({ match }) => (
                    <Summary questions={this.state.questions} />
                )}/>
                <Route path="/:questionId" render={({ match }) => (
                    <Question currentQuestionOrder={this.state.currentQuestionOrder} 
                      handleInputChange={this.handleInputChange} 
                      question={questionsArray} 
                      currentAnswer={this.state.currentAnswer}
                      error={this.state.error}
                    />
                )}/>
            </Switch>
        </main>
        <Navigation 
            handleNavigation={this.handleNavigation}
            currentQuestionOrder={this.state.currentQuestionOrder}
            totalQuestions={this.totalQuestions}
            isSummaryPage={this.state.isSummaryPage}
            currentAnswer={this.state.currentAnswer}
            isError={this.state.error}
            prevLocation={prevLocation}
            nextLocation={nextLocation}
        />
      </BrowserRouter>
    );
  }
};

export default App;
