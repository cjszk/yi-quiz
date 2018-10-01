import {UPDATE_QUESTIONS, SELECT_EDIT} from '../actions/questions';

const initialState = {
    // questions: [],
    questions: [
        {
            text: 'test',
            answers: [
                {text: 'test', correct: true},
                {text: 'test', correct: false},
                {text: 'test', correct: false},
                {text: 'test', correct: false},
            ]
        },
        {
            text: 'test2',
            answers: [
                {text: 'test', correct: false},
                {text: 'test', correct: true},
                {text: 'test', correct: false},
                {text: 'test', correct: false},
            ]
        },
        {
            text: 'test3',
            answers: [
                {text: 'test', correct: false},
                {text: 'test', correct: false},
                {text: 'test', correct: true},
                {text: 'test', correct: false},
            ]
        },
        {
            text: 'test4',
            answers: [
                {text: 'test', correct: false},
                {text: 'test', correct: false},
                {text: 'test', correct: false},
                {text: 'test', correct: true},
            ]
        }
    ],
    selection: null
}

export default function questionsReducer(state = initialState, action) {
    if (action.type === UPDATE_QUESTIONS) {
        return Object.assign({}, state, {
            questions: action.questions
        })
    } else if (action.type === SELECT_EDIT) {
        return Object.assign({}, state, {
            selection: action.selection
        })
    }

    return state;
}