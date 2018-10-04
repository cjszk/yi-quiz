import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {selectEdit, updateQuestions} from '../../actions/questions';

class QuestionNav extends Component {

    deleteQuestion(index) {
        let questions = this.props.questionsReducer.questions.slice();
        questions.splice(index, 1);
        this.props.dispatch(updateQuestions(questions))
    }

    buildList() {
        return this.props.questionsReducer.questions.map((item, index) => (
            <li className="quiz-maker-nav-item" key={index}>
                <Link
                    className="quiz-maker-nav-item-anchor"
                    onClick={() => {
                        this.props.dispatch((selectEdit(index)))
                    }}
                to="/edit">
                    <p>{item.text}</p>
                </Link>
                <button
                    onClick={() => {
                        this.deleteQuestion(index);
                    }}
                >
                    Delete
                </button>
            </li>
        ))
    }

    render() {
        return (
          <div className="quiz-maker-nav">
            <Link to="/" className="add-item-button">Add Item</Link>
            {this.buildList()}
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

export default connect(mapStateToProps)(QuestionNav);
