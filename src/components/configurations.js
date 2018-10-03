import React, { Component } from 'react';

class Configurations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

/*
"config": {
    "previousModulesRequired": true,
    "passingPercentage": 70,
    "randomizeQuestionOrder": false,
    "randomizeAnswerOrder": true,
    "randomQuestionSubsetCount": 2,
    "startingDescription": "This quiz test your ability to identify colors in nature."
  }
*/

    render() {
        return (
          <div className="configurations">
            
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questionsReducer: state.questionsReducer
    }
};

export default connect(mapStateToProps)(Configurations);
