import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serviceRequestAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';
import RequestContainer from './RequestContainer';
import { LinearProgress } from '@mui/material';
import { useState} from 'react';
/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ServiceRequestDocument {
    _id: string,
    requestedBy: string,
    status: string,
    requestedServices: string[],
    createdTime: string,
    updatedTime: string
}
interface ServiceRequestState {
    loading: boolean,
    serviceRequestState?: ServiceRequestDocument[]
    error?: Error
}
interface Stores {
  serviceRequests: ServiceRequestState,
}
/************************************* COMPONENT */ 
const RequestPage = () => {
  const dispatch= useDispatch();
  const request = useSelector((state:Stores)=>state.serviceRequests);
  const {loading, error, serviceRequestState} = request;
  // console.log({loading, error, serviceRequestState});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    dispatch(serviceRequestAction() as unknown as AnyAction);
  }, [dispatch, isLoading]);
  return (
    <div className="service-page page">
      {loading || isLoading ? (
        <LinearProgress color="secondary" /> 
      ) : error ? (
        <p> error...</p>
      ) :  (
        <RequestContainer data={serviceRequestState} setIsLoading={setIsLoading}/>
      ) 
      }
    </div>
  );
}
export default RequestPage;
