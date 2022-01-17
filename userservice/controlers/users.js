import User from "../models/userModel.js";
import { USER } from "../models/userTypes.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";


export const register = async(req, res) => {
    const{username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const userFound = await User.findOne({username: username});
    if(userFound){
        res.status(400).json({message: "That username is already in use."});
        return;
    }
    const user = new User({
        username: username,
        password: hashedPassword,
        userType: USER,
    });
    try {
        const newUser = await user.save();
        const token = jwt.sign({
            userId: newUser._id,
            userType: newUser.userType
        }, process.env.SECRET_KEY);
        res.status(200).json(`Bearer ${token}`);
    } catch (error) {
        res.status(400).json({message: error.message});
        return;
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({
            username: username
        });
        if(!user){
            res.status(400).json({message: "Nema username."});
            return;
        }
        if(user.isBanned){
            res.status(403).json({message: "User je banovan."});
            return;
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            res.status(400).json({message: "Pogresna sifra."});
            return;
        }
        const token = jwt.sign({
            userId: user._id,
            userType: user.userType
        }, process.env.SECRET_KEY)
        res.status(200).json(`Bearer ${token}`)
    } catch (error) {
        res.status(400).json({message: error.message});
        return;
    }
}