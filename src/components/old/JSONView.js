import React, { Component } from 'react';

class JSONView extends Component {

    buildJSONView() {
        return JSON.stringify({
            questions: [
                {
                    text: this.props.parentState.question,
                    answers: this.props.parentState.answers
                }
            ]
        }, undefined, 2)
    }

    render() {
        return (
          <div className="json-view">
            <pre>{this.buildJSONView()}</pre>
          </div>
        );
    }
}

export default JSONView;
