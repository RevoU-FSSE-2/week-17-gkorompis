import {Reducer} from 'redux';
/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ServiceRequestState {
    loading: boolean,
    serviceRequestState?: any[] | undefined,
    error?: Error
}
interface ServiceRequestAction {
    type: string,
    payload?: any[] | Error 
}
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "SERVICE_REQUEST_LOADING",
    success: "SERVICE_REQUEST_SUCCESS",
    error: "SERVICE_REQUEST_ERROR"
}
const stateDefault: ServiceRequestState = {
    loading: false,
    serviceRequestState: []
}
/************************************* EXPORTS */ 
const serviceRequestReducer:Reducer<ServiceRequestState,ServiceRequestAction> = (state = stateDefault, action) =>{
    switch(action.type){
        case actionTypes.loading:
            return {loading: true, serviceRequestState: []}
        case actionTypes.success:
            return {loading: false, serviceRequestState: action.payload} as ServiceRequestState
        case actionTypes.error:
            return {loading: false, error: action.payload} as ServiceRequestState
        default:
            return state;
    }
};
export default serviceRequestReducer;