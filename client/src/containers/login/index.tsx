
import "./index.css"
import LoginForm from "./LoginForm";
import { useState } from 'react';
import { LinearProgress } from "@mui/material";
import {CustomSnackbar} from "../../components";
/************************************* TYPING */ 


/************************************* COMPONENT */ 

const LoginPage = () => {
  let [isLoading, setIsLoading] = useState("");
  // console.log("tokenValues", isLoading)
  // console.log("conditional", isLoading? "truez": "falsez");

  
  
  return (
    <>
      <main className="login-main">
        {
          isLoading === "loading" ? <LinearProgress color="secondary" /> :
          isLoading === "error" ?
          <div className="login-div">
            <CustomSnackbar severity="error"/>
            <picture className="login-picture">
              <source id ="app-logo-source" media="(max-width:600px)" srcSet="./square6low.png"/>
              <img id="app-logo" className="app-logo" src="./square6.png" alt="a spinning disc" />
              <figcaption><h1>P O R T A L S</h1></figcaption>
            </picture> 
            <div className="login-form">
              <h3 style={{margin:"0px"}}>Sign In</h3>
              <LoginForm setIsLoading={setIsLoading}/>
            </div>
          </div>
          :
          <div className="login-div">
            <picture className="login-picture">
              <source id ="app-logo-source" media="(max-width:600px)" srcSet="./square6low.png"/>
              <img id="app-logo" className="app-logo" src="./square6.png" alt="a spinning disc" />
              <figcaption><h1>P O R T A L</h1></figcaption>
            </picture> 
            <div className="login-form">
              <h3 style={{margin:"0px"}}>Sign In</h3>
              <LoginForm setIsLoading={setIsLoading}/>
            </div>
          </div>

        }
      </main>
    </>
  );
}
export default LoginPage;
