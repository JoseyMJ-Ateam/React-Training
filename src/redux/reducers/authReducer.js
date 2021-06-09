let state ={

isLoading:false

}




export const authReducer=(state,action)=>{
switch (action.type) {
    case LOGIN_BEGINS:
        return {...state,isLoading:true}
        break;

    default:
        break;
}






}