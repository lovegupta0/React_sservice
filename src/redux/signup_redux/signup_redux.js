const INITIAL_STATE={
    signupData:[]
};

const profileDataReducer=(state=INITIAL_STATE,action)=>{
    
    switch (action.type) {
        case "SET_PROFILE_DATA":
            return{
                ...state,
                signupData:action.payload
            };
    
        default:
            return state;
    }
}

export default profileDataReducer;