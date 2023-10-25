// userActions.ts
import { AnyAction } from 'redux';
interface Action<T = any> {
  type: T;
  // Other optional properties, such as payload, can be added as needed.
  [key: string]: any;
}
type Dispatch<A extends Action = AnyAction> = (action: A) => A;
// import { getUserData } from '../api/userApi'; // Import your API function
const getUserData=() =>{
    return {data: "test"}
}
export const fetchUserData = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'FETCH_USER_DATA_REQUEST' });

  try {
    const response = await getUserData(); // Make an asynchronous API request
    const userData = response.data; // Assume the API response contains user data

    dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: userData });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: error });
  }
 
};