
const initialState = null ;

const emailFilter = (state = initialState, action) =>{

    switch (action.type) {
        case "FILTER_CLICKED":
            return action.payload;
        default:
          return state;
    }
}




export default emailFilter;