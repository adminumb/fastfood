

const initialState = {
    category:0,
    sortBy:'popular'
}

const filterReducer = (state= initialState, action)=>{

    switch (action.type){
        case 'SET_SORT_BY':
        return{
            ...state,
            sortBy: action.payload
        }
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }


}



export const setSortByAC=(name)=>({type:'SET_SORT_BY', payload:name})

export const setCategory=(catIndex)=>({type:'SET_CATEGORY', payload:catIndex})


export default filterReducer