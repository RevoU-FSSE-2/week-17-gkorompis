
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { pageLoaderAction } from "../../actions";
import "./index.css"
import RegisterForm from "./RegisterForm";
import { LinearProgress } from "@mui/material";
/************************************* TYPING */ 
interface ReduxState {
    loading: boolean,
    error?: Error
}
interface Store {
  pageLoader: ReduxState;
}
/************************************* COMPONENT */ 

const RegisterPage = () => {
  const dispatch = useDispatch();
  const pageLoader = useSelector((state:Store) => state.pageLoader) ;
  const {loading, error} = pageLoader

  useEffect (()=>{
    dispatch(pageLoaderAction() as unknown as AnyAction);
  }, [dispatch])

  return (
    <>
      {
        loading ? <LinearProgress/> :
        error ? <h1>Internal Server Error</h1> : 
        <main className="register-main">
          <div className="register-form">
              <h3 style={{margin:"0px"}}>Sign Up</h3>
              <RegisterForm />
          </div>
        </main> 
      }
      
    </>
  );
}
export default RegisterPage;
