
import { Dispatch } from 'redux';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "PROFILE_LOADING",
    success: "PROFILE_SUCCESS",
    error: "PROFILE_ERROR"
}
const dataDummy = `[
    {
        "username": "Gracia Korompis"
    }
]`
const profile={username: ""};
/************************************* EXPORTS */ 
const profileAction = () =>async(dispatch:Dispatch) =>{
    try {
        if(!dispatch){
            throw Error
        };
        //loading
        dispatch({type: actionTypes.loading});
        profile["username"] = localStorage.getItem("username") || "..."
        //fetch data
        dispatch({type: actionTypes.success, payload: [profile]});

    } catch (error) {
        const errorMessage = {code: 403, message: error};
        dispatch({type: actionTypes.error, payload: errorMessage}) 
    }
}
export default profileAction