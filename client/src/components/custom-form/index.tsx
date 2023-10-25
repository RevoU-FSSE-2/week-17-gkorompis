import {Formik, Form, FormikValues} from 'formik';
import * as Yup from 'yup';
import {Field, ErrorMessage} from 'formik';
import {Input, Form as AntdForm, DatePicker as AntDatePicker} from 'antd';
import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { serviceRequestAction, serviceAction } from '../../actions';
import axios from 'axios';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const FormItem = AntdForm.Item;
/* ------------------------------ VARIABLES */

interface Props <T> {
    fields: {name:string, label:string, type: string}[]
    initialValues: T,
    url: string,
    navigateTo: string,
    validationSchema: any,
    arrayField: string
}

const CustomForm =<T extends FormikValues > ({
    fields,
    initialValues,
    url,
    navigateTo,
    validationSchema,
    arrayField,
}:Props<T>) =>{

    // const [isLoading, setIsLoading] = useState("");
    const navigate = useNavigate();
    const yupValidationSchema = Yup.object(validationSchema);
    const dispatch= useDispatch();;
    const onSubmitFormik =async(values: any) => {
        try {
            //0. convert array field to array
            const arrayFieldValue = values[arrayField];
            const arrayFieldSplit = arrayFieldValue.split(",");
            let tempArray = [] as any;
            arrayFieldSplit.map((x:any)=>tempArray.push(x));
            values[arrayField] = tempArray as any;
            //1. setLoading
            console.log("loading..");
            navigateTo == "request" ? 
                dispatch({type: "SERVICE_REQUEST_LOADING"}) : dispatch({type: "SERVICE_LOADING"});
            console.log("onSubmit", values);
            //2. post sign in
            const response = await axios.post(url, values, {withCredentials: true});
            console.log("response",response);
            //3. get token
            // const {data} = response;
            //4. navigate
            // console.log("response axios post", response)
            console.log("navigating...")
            navigateTo == "request" ? 
                dispatch(serviceRequestAction() as unknown as AnyAction) : dispatch(serviceAction() as unknown as AnyAction)    
            console.log("navigated");
        } catch (error){
            console.log('error', error);
            // const {message} = error as Error;
            // setIsLoading("error");
            dispatch({type:"SERVICE_REQUEST_ERROR"})
            // alert(message)
        }
    };
    return (
        <>
            <div className="form">
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmitFormik}
                    validationSchema={yupValidationSchema}
                    onKeyDown={(e:any) => {
                        if (e.key === 'Enter') {
                        return onSubmitFormik;
                        }
                    }}>
                    {
                        () => { return (

                                <Form>
                                    {
                                        fields.map((x, key)=>{
                                            return(
                                                <div key={key}>
                                                    <FormItem className="app-form-antd-form-item" label={x.label} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                                    <Field as={Input} name={x.name} placeholder={x.label} style={{margin: "0px"}} type={x.type}/>
                                                    <div className="form-field-error">
                                                        <ErrorMessage name={x.name} component="span"/>
                                                    </div>
                                                    </FormItem>  
                                                </div>                                                         
                                            )
                                        })
                                    }
                                    <div className="login-button page-button">
                                        <Button variant="contained" size="small" color="success" type="submit"> Submit </Button>
                                    </div>
                                </Form>
                            )                       
                        }
                    }
                </Formik>
            </div>
        </>
    )
};

export default CustomForm