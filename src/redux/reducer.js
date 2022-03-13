const initialState = {
    category: [],
    cats: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY":
            return {
                ...state,
                category: [...action.payload]
            }
        case "GET_ALL_CATS":
            return {
                ...state,
                cats: [...action.payload]               
            }
        default:
            return state
    }

}


