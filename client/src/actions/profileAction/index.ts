
import { Dispatch } from 'redux';
import axios from 'axios';
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
const baseUrl =  "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev"
/************************************* EXPORTS */ 
const profileAction = () =>async(dispatch:Dispatch) =>{
    try {
        if(!dispatch){
            throw Error
        };
        //loading
        dispatch({type: actionTypes.loading});
        profile["username"] = localStorage.getItem("username") || "...";
        const userData = await axios.get(`${baseUrl}/user?username=${profile["username"]}`,  {withCredentials: true});
        console.log(">>>userData at action", userData);
        const {data} = userData
        //fetch data
        dispatch({type: actionTypes.success, payload: data});

    } catch (error) {
        const errorMessage = {code: 403, message: error};
        dispatch({type: actionTypes.error, payload: errorMessage}) 
    }
}
export default profileAction