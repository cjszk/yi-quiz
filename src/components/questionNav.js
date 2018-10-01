import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {selectEdit} from '../actions/questions';

class QuestionNav extends Component {

    buildList() {
        return this.props.questionsReducer.questions.map((item, index) => (
            <Link key={index}
                className="quiz-maker-nav-item"
                onClick={() => {
                    this.props.dispatch((selectEdit(index)))
                }}
            to="/edit">
                <p>{item.text}</p>
            </Link>
        ))
    }

    render() {
        console.log(this.props.questionsReducer.selection)
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
