export const Reducer = (state,Action) =>{
    console.info({Action})
    switch(Action.type){
        case "loading":
        return {
            ...state,
            loading: Action.value
        };
        case "Videos":
        return {
            ...state,
            Videos: Action.value
        };
        case "Selected":
        return {
            ...state,
            Selected: Action.value
        };
        default:{
            return state;
        }
    }
}
 
 