import{ returnMessage } from "./externalFunction.js";

const Unit = async  () =>{
    const response = returnMessage();
    if(!response) {
        return "not found"
    }
    return response;
};

export default Unit;