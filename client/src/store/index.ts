import {configureStore} from "@reduxjs/toolkit";
import {
    serviceReducer, 
    profileReducer, 
    serviceRequestReducer,
    pageLoaderReducer
} from "../reducers";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        services: serviceReducer,
        profile: profileReducer,
        serviceRequests: serviceRequestReducer,
        pageLoader: pageLoaderReducer
    },
    middleware: [thunk]
})

export default store;