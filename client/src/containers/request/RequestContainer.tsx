import { RequestCard, CustomModal} from "../../components"
import { Dispatch, SetStateAction, useEffect, useState} from "react"
import * as Yup from 'yup';
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { UserDocument } from "../service";
/************************************* TYPING */ 
interface ServiceRequestDocument {
    _id: string,
    requestedBy: string,
    status: string,
    requestedServices: string[],
    createdTime: string,
    updatedTime: string
}
interface Props {
    data: ServiceRequestDocument[] | undefined,
    setIsLoading: Dispatch<SetStateAction<boolean>>
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
    profileState?: UserDocument[]
    error?: Error
}
interface Stores {
  profile: ProfileState
}
/************************************* COMPONENT */ 
const baseUrl =  "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5001" || "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev"
const RequestContainer = ({data, setIsLoading}:Props) => {
    if(!data){
        data = []
    }
    const [cookies, setCookies] = useState('');
    const {sessionRole} = cookies as any;

    //redux
    // const dispatch= useDispatch();
    const response = useSelector((state:Stores)=>state.profile);
    const {loading, error, profileState} = response as unknown as ProfileState;
   
    const userData = profileState ? profileState[0] : "";
    const {username, role} = userData as UserDocument
    
    useEffect(()=>{
        const cookieString = document.cookie;
        const cookiesArray = cookieString.split('; ');
        const cookiesObject = {} as any;

        for (const cookie of cookiesArray) {
            const [name, value] = cookie.split('=');
            cookiesObject[name] = value;
        }

        setCookies(cookiesObject);

    }, []);
    
    return (
        <>
            {/* Button Bar*/}
            <div className="page-group-button">

               <h2>Requests</h2>
                <CustomModal
                    fields = {role==="admin" ? [
                        {name: "requestedBy", label: "requested by", type: ""},
                        {name: "requestedServices", label: "requested service", type: ""},
                    ] : 
                    [
                        {name: "requestedServices", label: "requested service", type: ""},
                    ]
                    }
                    initialValues={{
                        requestedBy: "",
                        requestedService: "",
                        status: "pending"
                    }}
                    url = {`${baseUrl}/serviceRequest`}
                    navigateTo= {"request"}
                    validationSchema={sessionRole=="admin" ?{
                        requestedBy: Yup.string().required("This field is required"),
                        requestedServices: Yup.string().required("This field is required"),
                        status: Yup.string().required("This field is required")
                    }:
                    {
                        requestedBy: Yup.string(),
                        requestedServices: Yup.string().required("This field is required"),
                        status: Yup.string().required("This field is required")
                    }
                    }
                    arrayField="requestedServices"
                /> 
                
            </div>
            <div className="grid-col-2">
                {
                    data?.map((x, key) =>{
                        return (
                            <RequestCard key = {key} documents = {x} setIsLoading={setIsLoading} role={role || ""} />
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default RequestContainer;