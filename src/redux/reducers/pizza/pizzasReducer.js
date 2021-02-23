

const initialState={
    items:[],
    isLoaded:false
}

const pizzasReducer=(state=initialState, action)=>{
    switch (action.type){
        case "SET_PIZZA":
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state
    }
}

export const setItemsPizza=(items)=>({type:"SET_PIZZA", payload:items})



export default pizzasReducer