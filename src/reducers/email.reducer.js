
const initialState = null ;

const emailReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "OPEN_EMAIL":
         return action.payload;
        default:
          return null;
    }
}




export default emailReducer;