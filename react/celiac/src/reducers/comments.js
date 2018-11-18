const INITIAL_STATE = {
    comments: []
}

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT': {
            return { ...state, comments: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
