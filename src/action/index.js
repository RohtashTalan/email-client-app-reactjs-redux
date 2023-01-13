
export const openEmail = (email) =>{
    return {
        type:"OPEN_EMAIL",
        payload: email
    }
}
export const filterClicked = (clicked) =>{
    return {
        type:"FILTER_CLICKED",
        payload: clicked
    }
}