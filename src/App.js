import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Question from './components/Question/Question';
import Summary from './components/Summary/Summary';
import questionsArray from './data/questionsArray';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionId: questionsArray[0].id,
      currentQuestionOrder: 0,
      currentAnswer: "",
      error: false,
      questions: questionsArray,
      isSummaryPage: false
    };
    this.totalQuestions = questionsArray.length;
  }

  handlePrevNavigation = () => {
    this.setState((state) => {
      const newQuestionOrder = state.isSummaryPage ? state.currentQuestionOrder: state.currentQuestionOrder - 1;
      let questions = [...state.questions];
      questions[state.currentQuestionOrder] = {
        ...questions[state.currentQuestionOrder],
        answer: state.currentAnswer
      }
      return {
        currentQuestionId: questionsArray[newQuestionOrder].id,
        currentQuestionOrder: newQuestionOrder,
        currentAnswer: state.questions[newQuestionOrder].answer,
        questions,
        isSummaryPage: false
    }});
  }

  handleNextNavigation = () => {
    this.setState((state) => {
      const isSummaryPage = state.currentQuestionOrder === this.totalQuestions - 1;
      const newQuestionOrder = isSummaryPage ? state.currentQuestionOrder: state.currentQuestionOrder + 1;
      let questions = [...state.questions];
      questions[state.currentQuestionOrder] = {
        ...questions[state.currentQuestionOrder],
        answer: state.currentAnswer
      }
      return {
        currentQuestionId: questionsArray[newQuestionOrder].id,
        currentQuestionOrder: newQuestionOrder,
        currentAnswer: state.questions[newQuestionOrder].answer,
        questions,
        isSummaryPage
    }});
  }

  handleInputChange = (value) => {
    const patternString = this.state.questions[this.state.currentQuestionOrder].validation;
    const pattern = new RegExp(patternString, "i");
    const isError = !pattern.test(value);
    this.setState({
      currentAnswer: value,
      error: isError
    });
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <ProgressBar currentQuestionOrder={this.state.currentQuestionOrder} 
            totalQuestions={this.totalQuestions} isSummaryPage={this.state.isSummaryPage}/>
          <main>
              <Switch>
                  <Route exact path="/" redirectTo={`/${questionsArray[0].id}`} />
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
              handlePrevNavigation={this.handlePrevNavigation} 
              handleNextNavigation={this.handleNextNavigation} 
              currentQuestionOrder={this.state.currentQuestionOrder}
              totalQuestions={this.totalQuestions}
              isSummaryPage={this.state.isSummaryPage}
              currentAnswer={this.state.currentAnswer}
              isError={this.state.error}
              prevRoute={!this.state.isSummaryPage && this.state.currentQuestionOrder > 0 ? questionsArray[this.state.currentQuestionOrder-1].id : questionsArray[this.state.currentQuestionOrder].id}
              nextRoute={this.state.currentQuestionOrder < this.totalQuestions - 1 ? questionsArray[this.state.currentQuestionOrder+1].id : questionsArray[this.state.currentQuestionOrder].id}
          />
        </>
      </BrowserRouter>
    );
  }
};

export default App;
