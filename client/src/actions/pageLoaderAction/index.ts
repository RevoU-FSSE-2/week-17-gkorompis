import {Dispatch} from 'redux';


/***types*/
interface Actions {
    loading: "PAGE_LOADING",
    success: "PAGE_SUCCESS",
    error: "PAGE_ERROR"
}
/***variables*/
const actionTypes = {
    loading: "PAGE_LOADING",
    success: "PAGE_SUCCESS",
    error: "PAGE_ERROR"
}
/***exports*/
const pageLoaderAction =() => async (dispatch:Dispatch) =>{
    try {
        dispatch({type:actionTypes.loading});
        console.log(">>>dispatch page loading");
        // dispatch({type:actionTypes.success, reduxPayload: []})
        setTimeout(()=>{
            console.log(">>>dispatch page success")
            dispatch({type: actionTypes.success, reduxPayload: [] })
        }, 1000)
    } catch(error){
        console.log(">>>dispatch page error")
        dispatch({type: actionTypes.error })
    }
};

export default pageLoaderAction