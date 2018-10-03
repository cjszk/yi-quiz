import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { updateQuestions } from '../../actions/questions';

import JSONView from './JSONView';

export class AddQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answers: [
                {text: '', correct: true},
                {text: ''},
                {text: ''},
                {text: ''},
            ],
            answerCount: 4,
            selectedAnswer: 1,
        }
    }

    onSubmit() {
        if (Number(this.state.answerCount) !== this.state.answers.filter((answer) => answer.text.length > 0).length || this.state.question.length === 0)
            return alert('Please ensure that all inputs have values');
        let answers = this.state.answers.slice();
        let questions = this.props.questionsReducer.questions.slice();
        questions.push({
            text: this.state.question,
            answers
        })
        this.props.dispatch(updateQuestions(questions))
        this.setState({
            question: '',
            answers: [
                {text: '', correct: true},
                {text: ''},
                {text: ''},
                {text: ''},
            ]
        })
    }
    
    handleAnswerCount(value) {
        if (this.state.answerCount > value) {
            this.setState({
                answerCount: value, 
                answers: this.state.answers.slice(0, value)
            })
        } else {
            let answers = this.state.answers.slice();
            for (let i=this.state.answerCount; i<value; i++) {
                answers.push({text: ''});
            }
            this.setState({
                answerCount: value,
                answers    
            })
        }

    }

    generateInputs() {
        let inputs = [];
        for (let i=1; i<=this.state.answerCount; i++) {
            let checked = "";
            let correct = false;
            if (this.state.selectedAnswer === i) {
                checked = "checked";
                correct = true;
            }
            inputs.push(
                <div key={i}>
                    <input checked={checked} type="radio"
                    onChange={() => {
                        let answers = this.state.answers.slice();
                        answers[this.state.selectedAnswer-1] = {text: answers[this.state.selectedAnswer-1].text}
                        answers[i-1] = {text: answers[i-1].text, correct: true};
                        console.log(answers)
                        this.setState({answers: answers, selectedAnswer: i})
                    }}
                    />
                    <input
                    type={"answer-" + String(i)}
                    name={"answer-" + String(i)}
                    onChange = {(event) => {
                        let answers = this.state.answers.slice();
                        if (correct)
                            answers[i-1] = {text: event.target.value, correct: correct};
                        else
                            answers[i-1] = {text:event.target.value}
                        this.setState({answers})
                    }}
                    value={this.state.answers[i-1].text}
                    />
                </div>
            )
        }
        return inputs;
    }

    render() {
        return (
            <form
                id="quiz-maker-add-form"
                className="quiz-maker-add-form"
                onSubmit={event => {
                    event.preventDefault();
                    this.onSubmit();
                }}>
                <h2>Add Questions</h2>
                <div className="quiz-maker-options">
                    <label className="quiz-maker-counter-label">Answer Count</label>
                    <select 
                    value={this.state.answerCount}
                    onChange={(event) => this.handleAnswerCount(event.target.value)}
                    className="quiz-maker-counter-select">
                        <option className="quiz-maker-counter-option">2</option>
                        <option className="quiz-maker-counter-option">3</option>
                        <option className="quiz-maker-counter-option">4</option>
                        <option className="quiz-maker-counter-option">5</option>
                    </select>
                </div>
                <label className="" htmlFor="">Question</label>
                <input
                    type="question"
                    name="question"
                    value = {this.state.question}
                    onChange = {(event) => {this.setState({question: event.target.value})}}
                />
                {this.generateInputs()}
                <button
                    className=""
                    type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

AddQuestionForm = connect(mapStateToProps)(AddQuestionForm);

export default reduxForm({
    form: 'addQuestion',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addQuestion', Object.keys(errors)[0]))
})(AddQuestionForm);
