import React, { Component } from 'react';

class QuestionEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
          <div className="question-editor">

          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

export default connect(mapStateToProps)(QuestionEditor);
