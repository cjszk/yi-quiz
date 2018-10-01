import React, { Component } from 'react';

import QuestionNav from './questionNav';
import AddQuestion from './addQuestion';

class QuizMaker extends Component {



    render() {
        return (
          <div className="quiz-maker">
            <QuestionNav/>
            <AddQuestion/>
          </div>
        );
    }
}

export default QuizMaker;
