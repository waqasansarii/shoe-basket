const Initial_state ={
    order:[],
    counter:0
}

// console.log(Initial_state)
const reducer = (state,action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                
                ...state,
                order:[action.payload,...state.order],
                counter : state.counter + 1
            }
            case 'Remove':
                
                let filter = state.order.filter(value=> value.id !== action.payload.sentId)

                return {
                    order: filter ,
                    counter : state.counter -1

                }
          
    
        default:
            return state
    }

}
export default reducer
export {
    Initial_state
}