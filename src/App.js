import React, { Component } from 'react';
import Main from './components/Main';
import questionsArray from './data/questionsArray';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionId: questionsArray[0].id,
      currentQuestionOrder: 0
    };
    this.totalQuestions = questionsArray.length;
  }

  handlePrevNavigation = () => {
    this.setState((state) => ({
      currentQuestionId: questionsArray[state.currentQuestionOrder - 1],
      currentQuestionOrder: state.currentQuestionOrder - 1
    }));
  }

  handleNextNavigation = () => {
    this.setState((state) => ({
      currentQuestionId: questionsArray[state.currentQuestionOrder + 1],
      currentQuestionOrder: state.currentQuestionOrder + 1
    }));
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
        />
      </div>
    );
  }
};

export default App;
