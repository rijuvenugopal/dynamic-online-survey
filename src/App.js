import React, { Component } from 'react';
import Main from './components/Main';
import questionsArray from './data/questionsArray';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionId: questionsArray[0].id
    };
    this.totalQuestions = questionsArray.length;
  }

  render() {
    const currentQuestionOrder = questionsArray.indexOf(questionsArray.find((qn) => qn.id === this.state.currentQuestionId));
    return (
      <div className="App">
        <Main 
          currentQuestionId = {this.state.currentQuestionId}
          currentQuestionOrder = {currentQuestionOrder + 1}
          totalQuestions = {this.totalQuestions}  
          questionsArray = {questionsArray}
        />
      </div>
    );
  }
};

export default App;
