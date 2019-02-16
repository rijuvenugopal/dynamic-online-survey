import React, { Component } from 'react';
import Main from './components/Main';
import questionsArray from './data/questionsArray';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionId: questionsArray[0].id,
      currentQuestionOrder: 0,
      currentAnswer: "",
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
    this.setState({
      currentAnswer: value
    });
  }

  render() {
    return (
      <div className="App">
        <Main 
          currentQuestionId = {this.state.currentQuestionId}
          currentQuestionOrder = {this.state.currentQuestionOrder}
          totalQuestions = {this.totalQuestions}  
          questionsArray = {questionsArray}
          handlePrevNavigation={this.handlePrevNavigation} 
          handleNextNavigation={this.handleNextNavigation}
          handleInputChange={this.handleInputChange}
          summary={this.state.summary}
          currentAnswer={this.state.currentAnswer}
          questions={this.state.questions}
          isSummaryPage={this.state.isSummaryPage}
        />
      </div>
    );
  }
};

export default App;
