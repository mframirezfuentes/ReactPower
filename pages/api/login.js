import connect from "../../utils/connection";
import User from "../../model/user"

const bcrypt = require("bcrypt");

export default async function handler(req,res){
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
      }

    await connect();

    const {  username, password } = req.body
    console.log(username);
    const user = await User.findOne({ username })
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if(!user){
            console.log("User not matched!")
            return res.status(500).json({ message: "Not able to find the user" })
    }

    else{
        if(!isPasswordMatched){
            console.log("User/password not matched!")
        }
        else{
        console.log("Success!")
        }
        return res.status(200).json({ message: "User found"})
    }
}

