import res from "express/lib/response";

export const validateEntityEntry = async (name, pass, gender, age, res) =>{
    if(!name){
        res.status(400).json({message: "Name nedostaje."});
        return false;    
    }
    if(!typeof name == "string"){
        res.status(400).json({message: "Name mora da bude string."});
        return false;  
    }
    if(!length){
        res.status(400).json({message: "Length nedostaje."});
        return false;    
    }
    if(!Number.isInteger(length)){
        res.status(400).json({message: "Length mora da bude integer."});
        return false;  
    }
    if(!age){
        res.status(400).json({message: "Age nedostaje."});
        return false;    
    }
    if(!Number.isInteger(age)){
        res.status(400).json({message: "Age mora da bude integer."});
        return false;  
    }
    if(!gender){
        res.status(400).json({message: "Gender nedostaje."});
        return false;    
    }
    if(!typeof gender == "string"){
        res.status(400).json({message: "Gender mora da bude string."});
        return false;  
    }
    return true;
}