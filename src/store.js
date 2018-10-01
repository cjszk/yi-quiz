import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import questionsReducer from './reducers/questions';

const store = createStore(
    combineReducers({
        form: formReducer,
        questionsReducer
    }),
    applyMiddleware(thunk)
);

export default store;
