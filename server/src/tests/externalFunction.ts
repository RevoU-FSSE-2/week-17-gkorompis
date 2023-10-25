export const insideFunctionOne = () =>{
    return new Promise ((resolve, reject) =>{
        try {
            setTimeout(()=>{
                resolve("Operations Success")
            }, 1000)
        } catch(error){
            reject("error");
        } 
    })
};
export const returnMessage = () =>{
    const message = "this is message"
    return  message;
};