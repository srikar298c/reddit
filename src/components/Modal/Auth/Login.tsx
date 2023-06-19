import React, {useState} from "react";
import {Input} from "@chakra-ui/react";
type LoginProps ={

}
const Login: React.FC<LoginProps> =() =>{
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    return(
        <form>
            <Input
                name="email"
                placeholder="email"
                type="text"
                mb={2}
                // onChange={onChange}
            />
            <Input
                name="password"
                placeholder="password"
                type="password"
                // onChange={onChange}
            />
        </form>
    )
}
export default Login;

