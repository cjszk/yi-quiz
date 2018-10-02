import React, { Component } from 'react';
import {connect} from 'react-redux';

class EntireJSONView extends Component {

    buildJSONView() {
        return JSON.stringify({
            config: this.props.questionsReducer.config,
            questions: this.props.questionsReducer.questions,
        }, undefined, 2)
    }

    render() {
        return (
          <div className="entire-json-view">
            <pre>{this.buildJSONView()}</pre>
          </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

export default connect(mapStateToProps)(EntireJSONView);
