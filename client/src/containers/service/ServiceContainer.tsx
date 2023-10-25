import { ServiceCard, CustomModal } from "../../components"
import * as Yup from 'yup';
import './index.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileAction} from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";
const baseUrl = "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev" || "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"
/************************************* TYPING */ 
export interface UserDocument {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string,
    _id?: string
}
interface Props {
    data: UserDocument[] | undefined
};

interface Error {
    code: string | number,
    message: string
};
interface ProfileDocument {
    username: string
}
interface ProfileState {
    loading: boolean,
    profileState?: ProfileDocument[]
    error?: Error
}
interface Stores {
  profile: ProfileState
}
/************************************* COMPONENT */ 
const ServiceContainer = ({data}:Props) => {
    // console.log("### props > data", data);
    if(!data){
        data = []
    }
    const [cookies, setCookies] = useState('');
    const {sessionRole} = cookies as any;

    //redux get
    const dispatch = useDispatch();
    const profile = useSelector((state:Stores)=>state.profile);
    const {loading, error, profileState} = profile;
    const {role} = profileState as unknown as UserDocument;

    useEffect(()=>{
        dispatch(profileAction() as unknown as AnyAction);

        const cookieString = document.cookie;
        
        const cookiesArray = cookieString.split('; ');
        const cookiesObject = {} as any;

        for (const cookie of cookiesArray) {
            const [name, value] = cookie.split('=');
            cookiesObject[name] = value;
        }

        setCookies(cookiesObject);

    }, [dispatch]);
    return (
        <>
            
            {/* Button Bar*/}
            <div className="page-group-button">
                <h2>PROFILE</h2>
                {role==="admin" ? <CustomModal
                    fields = {[
                        {name: "name", label: "name", type: ""},
                        {name: "username", label: "username", type: ""},
                        {name: "email", label: "email", type: "email"},
                        {name: "password", label: "password", type: "password"},
                        {name: "role", label: "role", type: ""},
        
                    ]}
                    initialValues={{
                        name: "",
                        username: "",
                        role: "",
                        email: "",
                        password: ""

                    }}
                    url = {`${baseUrl}/user`}
                    navigateTo= {"service"}
                    validationSchema={{
                        name: Yup.string().required("Password is required"),
                        email: Yup.string().email("Invalid email format").required("Email is required"),
                        username: Yup.string().required("Username is required"),
                        password: Yup.string().required("Password is required")
                            .min(8, 'Password must be at least 8 characters long')
                            .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must be alphanumeric'),
                        role: Yup.string().required("Role is required"),
                    }}
                    arrayField=""
                />:""}
            </div>
            <div className="grid-col-2">
                {
                    data?.map((x, key) =>{
                        return (
                            <ServiceCard key = {key} document = {x} />
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default ServiceContainer;