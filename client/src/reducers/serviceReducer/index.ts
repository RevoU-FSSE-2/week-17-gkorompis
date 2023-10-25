import {Reducer} from 'redux';
/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ServiceState {
    loading: boolean,
    serviceState?: any[] | undefined,
    error?: Error
}
interface ServiceAction {
    type: string,
    payload?: any[] | Error 
}
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "SERVICE_LOADING",
    success: "SERVICE_SUCCESS",
    error: "SERVICE_ERROR"
}
const stateDefault: ServiceState = {
    loading: false,
    serviceState: []
}
/************************************* EXPORTS */ 
const serviceReducer:Reducer<ServiceState,ServiceAction> = (state = stateDefault, action) =>{
    switch(action.type){
        case actionTypes.loading:
            return {loading: true, serviceState: []}
        case actionTypes.success:
            return {loading: false, serviceState: action.payload} as ServiceState
        case actionTypes.error:
            return {loading: false, error: action.payload} as ServiceState
        default:
            return state;
    }
};
export default serviceReducer;