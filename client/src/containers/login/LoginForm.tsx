import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Field, ErrorMessage} from 'formik';
import {Input, Form as AntdForm} from 'antd';
import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import axios from 'axios';

/* ------------------------------ INTERFACES */
interface FormValues {
    username: string,
    password: string,
}
interface Props {
    setIsLoading: React.Dispatch<React.SetStateAction<string>>
}
interface createSessionProps {
    inputToken: string,
    username: string
}
/* ------------------------------ VARIABLES */
const initialValues:FormValues={
    username: "",
    password: ""
};
const FormItem = AntdForm.Item;
const onClickFormik = (values:FormValues) => {
    const isClicked = true;
};
const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
})
const signUpHandler = (navigate:NavigateFunction) =>{
    navigate('/register');
};

const createSession = ({inputToken, username}:createSessionProps) =>{

    localStorage.setItem('token', inputToken);
    localStorage.setItem('username', username);
    
    // console.log("session is created token: ");
}
const fieldNames = ["username", "password"];
const fieldLabels = ["Username", "Password"]
const baseUrl = "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev"

/* ------------------------------ COMPONENT */
const LoginForm = ({setIsLoading}:Props) =>{
    const navigate = useNavigate();
    const onSubmitFormik =async(values:FormValues) => {
        try {
            //1. setLoading
            setIsLoading("loading");
            //2. post sign in
            const response = await axios.post(`${baseUrl}/login/auth`, values, {headers:{'Content-Type':'application/json'},withCredentials: true});
            //3. get token
            const {data} = response;
            //4. navigate
            console.log("response axios")
            const sessionProps = {inputToken: data, username:values.username};
            createSession(sessionProps);
            navigate('/home');
        } catch (error){
            console.log('error', error);
            setIsLoading("error");
        }
    };
    return(
        <div className="form">
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmitFormik}
                onClick={onClickFormik}
                validationSchema={validationSchema}
                onKeyDown={(e:any) => {
                    if (e.key === 'Enter') {
                    return onSubmitFormik;
                    }
                }}>
                {
                    () => { return (

                            <Form>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[0]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[0]} placeholder={fieldLabels[0]} style={{margin: "0px"}}/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[0]} component="span"/>
                                    </div>
                                </FormItem>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[1]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[1]}  placeholder={fieldLabels[1]} type="password"/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[1]} component="span"/>
                                    </div>
                                </FormItem>
                                <div className="login-text-group-signup">
                                     <p>Don't have an account?</p><p className="login-text-signup" onClick={()=>signUpHandler(navigate)}>SIGN UP</p>
                                </div>
                                <div className="login-button page-button">
                                    <Button variant="contained" size="small" color="success" type="submit"> Sign In </Button>
                                </div>
                            </Form>
                        
                        )                       
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginForm;