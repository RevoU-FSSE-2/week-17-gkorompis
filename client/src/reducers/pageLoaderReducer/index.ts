import {Reducer} from 'redux';
/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ReduxState {
    loading: boolean,
    reduxPayload?: any[] | undefined,
    error?: Error
}
interface ReduxAction {
    type: string,
    payload?: any[] | Error 
}
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "PAGE_LOADING",
    success: "PAGE_SUCCESS",
    error: "PAGE_ERROR"
}
const stateRedux: ReduxState = {
    loading: false,
    reduxPayload: []
}
/************************************* EXPORTS */ 
const pageLoaderReducer:Reducer<ReduxState,ReduxAction> = (state = stateRedux, action) =>{
    switch(action.type){
        case actionTypes.loading:
            return {loading: true, reduxPayload: []}
        case actionTypes.success:
            return {loading: false, reduxPayload: action.payload} as ReduxState
        case actionTypes.error:
            return {loading: false, error: action.payload} as ReduxState
        default:
            return state;
    }
};
export default pageLoaderReducer;