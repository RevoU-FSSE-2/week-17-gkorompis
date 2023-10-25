import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import './index.css'
/************************************* TYPING */ 
interface ProfileDocument {
    username: string
}
interface Props {
    data: ProfileDocument[] | undefined
};
interface NavigateButtonHandler {
    navigate: NavigateFunction;
    path: string
}
/************************************* VARIABLES */
const homeButtonHandler = ({navigate, path}: NavigateButtonHandler) =>{
    navigate(path);
}
/************************************* COMPONENT */ 
const ProfileContainer = ({data}:Props) => {
    // console.log("profile state data", data);
    // console.log("### props > data", data);
    let user = {username: ""};
    if(data && data[0]){
        console.log("### data exists 1")
        user = data[0]
    };
    // console.log("### data exists 2")
    console.log("### user", user)
    const {username} = user;

    const navigate = useNavigate();
    return (
        <>
            
            {/* Button Bar*/}
            <div className="welcome-banner">
                <div><h1>Hi, {username ? username : "___"}!</h1></div>
                <div className="navigator-banner">
                     <Button variant="contained" size="large" color="info" onClick={()=>homeButtonHandler({navigate, path:"/service"})}> Explore Here </Button>
                </div>
            </div>
            
        </>
    )
}
export default ProfileContainer;