export const Reducer = (state,Action) =>{
    switch(Action.type){
        case "loading":
        return {
            ...state,
            loading: Action.value
        };
        case "Places":
        return {
            ...state,
            Places: Action.value
        };
        default:{
            return state;
        }
    }
}
 
 