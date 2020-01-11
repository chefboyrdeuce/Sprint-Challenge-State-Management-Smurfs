const initialState = {
smurf : [    

]
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NEW_SMURF":
            return { ...state, loading: false, smurf: action.payload };
        default:
            return state;
    }
}