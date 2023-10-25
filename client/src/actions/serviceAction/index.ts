
import { Dispatch } from 'redux';
import axios from 'axios';
import { serialize } from 'v8';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
const baseUrl =  "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5001" || "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"
const actionTypes = {
    loading: "SERVICE_LOADING",
    success: "SERVICE_SUCCESS",
    error: "SERVICE_ERROR"
}
const dataDummy = `[
    {
        "_id": "64f0e33691d5726c8bdc79d6",
        "serviceName": "Assembly & Annotation",
        "serviceCode": "LAB01",
        "permission": [
            "admin"
        ],
        "createdTime": "2023-08-31T19:00:04.270Z",
        "updatedTime": "2023-08-31T19:00:04.270Z"
    },
    {
        "_id": "64f0ea8f331d3c99b2d510b0",
        "serviceName": "Gene Prediction",
        "serviceCode": "LAB02",
        "permission": [
            "admin"
        ],
        "createdTime": "2023-08-31T19:31:25.139Z",
        "updatedTime": "2023-08-31T19:31:25.139Z"
    },
    {
        "_id": "64f0eaa9331d3c99b2d510b1",
        "serviceName": "Phylogenetics",
        "serviceCode": "LAB03",
        "permission": [
            "admin"
        ],
        "createdTime": "2023-08-31T19:31:50.973Z",
        "updatedTime": "2023-08-31T19:31:50.973Z"
    },
    {
        "_id": "64f0eac7331d3c99b2d510b2",
        "serviceName": "Protein Dynamics",
        "serviceCode": "LAB04",
        "permission": [
            "admin"
        ],
        "createdTime": "2023-08-31T19:32:21.392Z",
        "updatedTime": "2023-08-31T19:32:21.393Z"
    },
    {
        "_id": "64f241a694701a7f79ce8864",
        "serviceName": "Metagenomic",
        "serviceCode": "LAB04",
        "permission": [
            "admin"
        ],
        "createdTime": "2023-09-01T19:55:15.709Z",
        "updatedTime": "2023-09-01T19:55:15.709Z"
    }
]`
/************************************* VARIABLES */ 
const fetchServiceState = async()=>{

    // const token = localStorage.getItem('token');
    // if(!token){
    //     alert('no token')
    // }
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const data = await axios.get(`${baseUrl}/user`, {withCredentials: true});
    const serviceState = data["data"];
    console.log("fetched ServiceState", {fetched: fetchServiceState});
    return serviceState;
}
/************************************* EXPORTS */ 
const serviceAction = () =>async(dispatch:Dispatch) =>{
    try {
        if(!dispatch){
            throw Error
        };
        //loading
        dispatch({type: actionTypes.loading});
        
        //fetch data
        const serviceState = await fetchServiceState();
        dispatch({type: actionTypes.success, payload: serviceState});

    } catch (error) {
        const errorMessage = {code: 403, message: error};
        dispatch({type: actionTypes.error, payload: errorMessage}) 
    }
}
export default serviceAction