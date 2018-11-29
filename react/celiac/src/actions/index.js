export const addComment = (text) => {
    return {
        type: 'ADD_COMMENT',
        payload: text
    }
}

export const fetchComments = () => {
    return {
        type: 'FETCH_COMMENTS'
    }
}


export const fetchRestaurants = () => {
    return {
        type: 'FETCH_RESTAURANTS'
    }
}