import { ADD_CATEGORY_RED, DELETE_CATEGORY_RED, GET_CATEGORY_RED, UPDATE_CATEGORY_RED } from "../Constants";

export function CategoryReducer(state =[],action){
    switch( action.type){
        case ADD_CATEGORY_RED:
            state.push(action.data)
            return state
        case GET_CATEGORY_RED:
            return action.data
        case DELETE_CATEGORY_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            // console.log("re",newState);
            return newState
        case UPDATE_CATEGORY_RED:
                var index = state.findIndex(item=>item.id===Number(action.data.id))
                state[index].name = action.data.name
                return state
        default:
            return state
    }
}
