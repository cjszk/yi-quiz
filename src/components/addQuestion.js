import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

export class AddQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answers: [],
            answerCount: 4,
            selectedAnswer: 1
        }
    }

    onSubmit() {
        let i = 0;
        let answers = this.state.answers.slice().map((answer) => {
            i++;
            if (i === this.state.selectedAnswer) {
                return {text: answer.text, correct: true}
            } else {
                return {text: answer.text, correct: false}
            }
        });
        const json = JSON.stringify({
            text: this.state.question,
            answers
        })
        console.log(json)
    }
    
    handleAnswerCount(value) {
        this.setState({
            answerCount: value, 
            answers: this.state.answers.slice(0, value)
        })
    }

    generateInputs() {
        let inputs = [];
        for (let i=1; i<=this.state.answerCount; i++) {
            let checked = ""
            if (this.state.selectedAnswer === i) {
                checked = "checked"
            }
            inputs.push(
                <div key={i}>
                    <input checked={checked} type="radio"
                    onChange={() => {this.setState({selectedAnswer: i})}}
                    />
                    <Field
                    component={Input}
                    type={"answer-" + String(i)}
                    name={"answer-" + String(i)}
                    value = {this.state.question}
                    onChange = {(event) => {
                        let answers = this.state.answers.slice();
                        answers[i-1] = {text: event.target.value};
                        this.setState({answers})
                        
                    }}
                    validate={[required, isTrimmed]}
                    />
                </div>
            )
        }
        return inputs;
    }
    render() {
        console.log(this.state)
        return (
            <form
                className="quiz-maker-add-form"
                onSubmit={event => {
                    event.preventDefault();
                    this.onSubmit();
                }}>
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
                <Field
                    component={Input}
                    type="question"
                    name="question"
                    value = {this.state.question}
                    onChange = {(event) => {this.setState({question: event.target.value})}}
                    validate={[required, isTrimmed]}
                />
                {this.generateInputs()}
                <button
                    className=""
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser
    }
};

AddQuestionForm = connect(mapStateToProps)(AddQuestionForm);

export default reduxForm({
    form: 'addQuestion',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addQuestion', Object.keys(errors)[0]))
})(AddQuestionForm);
