export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const updateQuestions = questions => ({
    type: UPDATE_QUESTIONS,
    questions
})

export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const updateConfig= config => ({
    type: UPDATE_CONFIG,
    config
})

// export const SELECT_EDIT = 'SELECT_EDIT'
// export const selectEdit = selection => ({
//     type: SELECT_EDIT,
//     selection
// })