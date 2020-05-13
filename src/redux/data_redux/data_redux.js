const INITIAL_STATE={
    userData:[],
    data:[],
    title:[]
};

const settingTitle=(obj)=>{
    var title=Object.keys(obj);
    title=title.filter(item=>item!=="email");
    return(title);
}

const mangingData=(obj)=>{
    var i;
    for(i=0;i<obj.length;i++){
        if(obj[i].length>6){
            var x=obj[i].length-6;
          obj[i]=obj[i].slice(x);
        }
        obj[i]=obj[i].reverse();
        
    }

    return obj;
}

const reverse=(obj)=>{
    return obj.reverse();
}

const dataReducer=(state=INITIAL_STATE,action)=>{
    
    switch (action.type) {
        case "SET_USER_DATA":
            return{
                ...state,
                userData:mangingData(action.payload)
            };
        case "SET_DATA":
            return{
                ...state,
                data:reverse(action.payload)
            };
        case "SET_TITLE":
            return{
                ...state,
                title:settingTitle(action.payload)
            }
    
        default:
            return state;
    }
}

export default dataReducer;