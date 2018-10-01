import React, { Component } from 'react';

import AddQuestion from './addQuestion';

/*

  "config": {
    "previousModulesRequired": true,
    "passingPercentage": 70,
    "randomizeQuestionOrder": false, 
    "randomizeAnswerOrder": true, 
    "randomQuestionSubsetCount": 2,
    "startingDescription": "This quiz test your ability to identify colors in nature."
  },
  "questions": [
    {
      "text": "What is the color of the sky?",
      "answers": [
        {
          "text": "Blue",
          "correct": true
        },
        {
          "text": "Red"
        },
        {
          "text": "Yellow"
        },
        {
          "text": "Green"
        }
      ]
    },
    {
      "text": "What is the color of the grass?",
      "answers": [
        {
          "text": "Blue"
        },
        {
          "text": "Red"
        },
        {
          "text": "Yellow"
        },
        {
          "text": "Green",
          "correct": true
        }
      ]
    }
  ]
}
*/

class QuizMaker extends Component {



    render() {
        return (
          <div className="quiz-maker">
            <AddQuestion/>
          </div>
        );
    }
}

export default QuizMaker;

/*
@cjszk

Json Quiz Builder:

  form for easy configuration of json quizzes following above sample
  add remove questions
  add remove answers for each question
  select one and only one correct answer
  use json as an input so that existing quizzes can be edited
*/