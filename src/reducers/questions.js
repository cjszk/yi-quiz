import {UPDATE_QUESTIONS} from '../actions/questions';

const initialState = {
    questions: []
}

export default function questionsReducer(state = initialState, action) {
    if (action.type === UPDATE_QUESTIONS) {
        return Object.assign({}, state, {
            questions: action.questions
        })
    }

    return state;
}