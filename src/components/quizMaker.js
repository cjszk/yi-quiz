import React, { Component } from 'react';
import {connect} from 'react-redux';

import Configurations from './configurations';
import QuestionEditor from './questionEditor';

class QuizMaker extends Component {

    render() {
        return (
            <div className="quiz-maker">
                <Configurations/>

            </div>
        );
    }
}

export default JSONView;
