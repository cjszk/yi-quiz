import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import QuizMaker from './components/quizMaker';

// import QuestionNav from './components/old/questionNav';
// import AddQuestionForm from './components/old/addQuestion';
// import EditQuestionForm from './components/old/editQuestion';

import EntireJSONView from './components/entireJSONView';

class App extends Component {

    render() {
        return (
          <div className="quiz-maker">
            <QuizMaker/>
            <EntireJSONView/>
          </div>
        );
    }
}

export default withRouter(App);
