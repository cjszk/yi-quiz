import {
  UPDATE_QUESTIONS, UPDATE_CONFIG, 
  // SELECT_EDIT
} from '../actions/questions';

const sampleJSON = `{
    "config": {
      "previousModulesRequired": true,
      "passingPercentage": 70,
      "randomizeQuestionOrder": true, 
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
  }`

const sample = JSON.parse(sampleJSON);

const initialState = {
    config: sample.config,
    questions: sample.questions,
    selection: null
}

export default function questionsReducer(state = initialState, action) {
    if (action.type === UPDATE_QUESTIONS) {
        return Object.assign({}, state, {
            questions: action.questions
        })
    } 
    // else if (action.type === SELECT_EDIT) {
    //     return Object.assign({}, state, {
    //         selection: action.selection
    //     })
    // }
    else if (action.type === UPDATE_CONFIG) {
      return Object.assign({}, state, {
          config: action.config
      })
  } 

    return state;
}