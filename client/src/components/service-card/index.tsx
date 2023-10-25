import { DeleteButton } from "..";
import "./index.css"
/************************************* TYPING */ 
export interface UserDocument {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string,
    _id?: string
}
export interface UserQuery {
    name?: string,
    email?: string,
    username?: string,
    role?: string,
    password?: string,
    _id?: string
}
interface Props {
    document: UserDocument;
}
/************************************* VARIABLES */ 

/************************************* COMPONENT */ 
const ServiceCard = ({document}: Props) =>{
    const {username, role, name, _id, email} = document;
    return (
        <div className="placeholder">
            <div className="service-cards cards">
                <div>
                    <h3>{_id}</h3>
                    <p>name: {name}</p>
                    <p>username: {username}</p>
                    <p>role: {role}</p>
                    <p>email: {email}</p>
                </div>
                <div className="placeholder-edit-button">
                    {/* <DeleteButton/> */}
                </div>
                
            </div>
            
        </div>
        
    )
};
export default ServiceCard;