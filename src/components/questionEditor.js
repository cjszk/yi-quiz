import React, { Component } from 'react';
import {connect} from 'react-redux';

import { updateQuestions } from '../actions/questions';

class Configurations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: '',
            questions: []
        }
    }

    componentDidMount() {
        this.setState({loaded: true})
        this.setState({questions: this.props.questionsReducer.questions});
    }

    componentWillUpdate() {
        if (this.state.questions.length > 0 && this.state.questions !== this.props.questionsReducer.questions)
            this.props.dispatch(updateQuestions(this.state.questions));
    }

    generateAnswers(answerIndex) {
        let questions = this.state.questions.slice();
        let answers = questions[answerIndex].answers;
        return answers.map((answer, index) => {
            if (!answer.correct) return (
            <li className="answer-li" key={index}>
                <input checked={false} type="radio"
                onChange={(event) => {
                    let newAnswers = answers.map((answer) => {return {text: answer.text}})
                    newAnswers[index].correct = true;
                    questions[answerIndex].answers = newAnswers;
                    this.setState({questions})
                }}
                />
                <input onChange={(event) => {
                    questions[answerIndex].answers[index].text = event.target.value;
                    this.setState({questions})
                }} placeholder="Answer" checked={false} value={answer.text} />
                <button onClick={() => {
                    questions[answerIndex].answers = questions[answerIndex].answers.filter((answer, filterIndex) => filterIndex !== index);
                    this.setState({questions})
                }}>Delete</button>
            </li>)
            else return (
            <li className="answer-li" key={index}>
                <input checked={true} type="radio" readOnly={true}/>
                <input onChange={(event) => {
                    questions[answerIndex].answers[index].text = event.target.value;
                    this.setState({questions})
                }} placeholder="Answer" value={answer.text}/>
            </li>)
        })
    }

    generateList() {
        let questions = this.state.questions.slice();
        return questions.map((question, index) => (
            <div key={index}>
                {/* <h3>{question.text}</h3> */}
                <input value={question.text} placeholder="Question" onChange={(event) => {
                    question.text = event.target.value;
                    this.setState({questions})
                }} />
                <ul>
                    {this.generateAnswers(index)}
                    <button
                    onClick={() => {
                        question.answers.push({text: ''})
                        this.setState({questions})
                    }}
                    >Add Answer</button>
                </ul>
            </div>
        ))
    }

    render() {
        console.log(this.props)
        if (this.state.loaded) {
            return (
                <div className="configurations">
                    {this.generateList()}
                    <button
                    onClick={() => {
                        let newQuestions = this.state.questions.slice();
                        newQuestions.push({
                            answers: [{text: ''}, {text: '',  correct: true}],
                            text: ''
                        });
                        this.setState({questions: newQuestions});
                    }}
                    >Add Question</button>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

export default connect(mapStateToProps)(Configurations);
