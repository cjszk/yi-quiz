import React from 'react';
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
                    onClick={() => {this.setState({selectedAnswer: i})}}
                    />
                    <Field
                    component={Input}
                    type={"answer-" + String(i)}
                    name={"answer-" + String(i)}
                    value = {this.state.question}
                    onChange = {(event) => {this.setState({question: event.target.value})}}
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
                }}>
                <div className="quiz-maker-options">
                    <label className="quiz-maker-counter-label">Answer Count</label>
                    <select 
                    value={this.state.answerCount}
                    onChange={(event) => this.setState({answerCount: event.target.value})}
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

export default reduxForm({
    form: 'changePassword',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('changePassword', Object.keys(errors)[0]))
})(AddQuestionForm);
