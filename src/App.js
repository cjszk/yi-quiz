import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import QuestionNav from './components/questionNav';
import AddQuestionForm from './components/addQuestion';
import EditQuestionForm from './components/editQuestion';

class QuizMaker extends Component {

    render() {
        return (
          <div className="quiz-maker">
            <QuestionNav/>
            <Route exact path="/" component={AddQuestionForm} />
            <Route exact path="/edit" component={EditQuestionForm} />
          </div>
        );
    }
}

export default withRouter(QuizMaker);
