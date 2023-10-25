import "./index.css"
import { useNavigate, NavigateFunction } from "react-router-dom";
import axios from 'axios';
/************************************* TYPING */
interface Props {
    navigate: NavigateFunction;
    path: string
}
/************************************* VARIABLES */
const homeButtonHandler = ({navigate, path}: Props) =>{
    navigate(path);
}
/************************************* COMPONENT */
const Navbar = () => {
    const navigate = useNavigate();
    return ( 
     
            <nav className="navbar">
                    <div className="navbar-div">
                        <a onClick={() => homeButtonHandler({navigate, path: "/home"})}>Home</a>
                        <a onClick={() => homeButtonHandler({navigate, path: "/service"})}>Profile</a>
                        <a onClick={() => homeButtonHandler({navigate, path: "/request"})}>Requests</a>
                    </div>
                    <div className="navbar-div">
                        <a className="logout" onClick={async() =>{
                            localStorage.removeItem('token');
                            const baseUrl = "https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev" 
                            const response = await axios.post(`${baseUrl}/logout`,{body: "here"} ,{headers:{'Content-Type':'application/json'},withCredentials: true});
                            homeButtonHandler({navigate, path: "/"});
                        }}>logout</a>
                    </div>  
            </nav>
    )
};

export default Navbar;