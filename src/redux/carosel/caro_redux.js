const INTIAL_STATE={
    caroData:[]
}


const caroRedux=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CARO":
            return{
                ...state,
                caroData:action.payload
            };
        default:return state;
    }
}

export default caroRedux;