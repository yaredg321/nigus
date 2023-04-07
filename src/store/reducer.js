import actions from "./actions";

export default function redux(currentState={
    products: [],
}, action){
    switch (action.type){
        case actions.ADD_PRODUCTS:
            return {
                ...currentState,
                products: action.payload
            }
        default: return currentState
    }
}