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
      summary: questionsArray.map(qn => {
        return {
          id: qn.id,
          question: qn.text, 
          answer: ""
      }})
    };
    this.totalQuestions = questionsArray.length;
  }

  handlePrevNavigation = () => {
    this.setState((state) => {
      let questions = [...state.questions];
      questions[state.currentQuestionOrder] = {
        ...questions[state.currentQuestionOrder],
        answer: state.currentAnswer
      }
      return {
        currentQuestionId: questionsArray[state.currentQuestionOrder - 1].id,
        currentQuestionOrder: state.currentQuestionOrder - 1,
        currentAnswer: state.questions[state.currentQuestionOrder - 1].answer,
        questions
    }});
  }

  handleNextNavigation = () => {
    this.setState((state) => {
      let questions = [...state.questions];
      questions[state.currentQuestionOrder] = {
        ...questions[state.currentQuestionOrder],
        answer: state.currentAnswer
      }
      return {
        currentQuestionId: questionsArray[state.currentQuestionOrder + 1].id,
        currentQuestionOrder: state.currentQuestionOrder + 1,
        currentAnswer: state.questions[state.currentQuestionOrder + 1].answer,
        questions
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
        />
      </div>
    );
  }
};

export default App;
