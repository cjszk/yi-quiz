import React, { Component } from 'react';
import {connect} from 'react-redux';

import { updateConfig } from '../actions/questions';

class Configurations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: ''
        }
    }

    componentDidMount() {
        this.setState({loaded: true})
        this.setState(this.props.questionsReducer.config);
    }

    updateReduxState() {
        const config = {
            previousModulesRequired: this.state.previousModulesRequired,
            passingPercentage: this.state.passingPercentage,
            randomizeQuestionOrder: this.state.randomizeQuestionOrder, 
            randomizeAnswerOrder: this.state.randomizeAnswerOrder, 
            randomQuestionSubsetCount: this.state.randomQuestionSubsetCount,
            startingDescription: this.state.startingDescription
        };
        this.props.dispatch(updateConfig(config));
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="configurations">
                    <label>Starting Description</label>
                    <textarea 
                    rows="5"
                    cols="60"
                    onChange={(event) => {
                        this.setState({startingDescription: event.target.value});
                        this.updateReduxState();
                    }} value={this.state.startingDescription}/>
                    <label>Passing Percentage</label>
                    <input onChange={(event) => {
                        if (Number(event.target.value) > 100) this.setState({passingPercentage: 100});
                        else if (Number(event.target.value) < 0) this.setState({passingPercentage: 0});
                        else this.setState({passingPercentage: event.target.value});
                        this.updateReduxState();
                    }} value={this.state.passingPercentage}/>
                    <label>Randomize Question Order</label>
                    <input checked={this.state.randomizeQuestionOrder} onChange={(event) => {
                        this.setState({randomizeQuestionOrder: event.target.checked})
                        this.updateReduxState();
                    }} type="checkbox"/>
                    <label>Randomize Answer Order</label>
                    <input checked={this.state.randomizeAnswerOrder} onChange={(event) => {
                        this.setState({randomizeAnswerOrder: event.target.checked})
                        this.updateReduxState();
                    }} type="checkbox"/>
                    <label>Question Subset Count</label>
                    <input type="number" onChange={(event) => {
                        if (Number(event.target.value) > 20) this.setState({randomQuestionSubsetCount: 20})
                        else if (Number(event.target.value) < 0) this.setState({randomQuestionSubsetCount: 0})
                        else this.setState({randomQuestionSubsetCount: Number(event.target.value)})
                        this.updateReduxState();
                    }} value={this.state.randomQuestionSubsetCount}/>
    
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
