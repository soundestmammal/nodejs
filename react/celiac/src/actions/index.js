export const addComment = (text) => {
    return {
        type: 'ADD_COMMENT',
        payload: text
    }
}

export const getComments = () => {
    return {
        type: 'GET_COMMENTS'
    }
}
