import {Reducer} from 'redux';
/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ProfileState {
    loading: boolean,
    profileState?: any[] | undefined,
    error?: Error
}
interface ProfileAction {
    type: string,
    payload?: any[] | Error 
}
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "PROFILE_LOADING",
    success: "PROFILE_SUCCESS",
    error: "PROFILE_ERROR"
}
const stateDefault: ProfileState = {
    loading: false,
    profileState: []
}
/************************************* EXPORTS */ 
const profileReducer:Reducer<ProfileState,ProfileAction> = (state = stateDefault, action) =>{
    switch(action.type){
        case actionTypes.loading:
            return {loading: true, profileState: []}
        case actionTypes.success:
            return {loading: false, profileState: action.payload} as ProfileState
        case actionTypes.error:
            return {loading: false, error: action.payload} as ProfileState
        default:
            return state;
    }
};
export default profileReducer;