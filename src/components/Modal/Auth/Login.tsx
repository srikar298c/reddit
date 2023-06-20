import React, {useState} from "react";
import {Input} from "@chakra-ui/react";
type LoginProps ={

}
const Login: React.FC<LoginProps> =() =>{
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formError) setFormError("");
        if (!form.email.includes("@")) {
            return setFormError("Please enter a valid email");
    }
    const onChange = ({
                          target: { name, value },
                      }: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    return(
        <form onSubmit={onSubmit}>
            <Input
                name="email"
                placeholder="email"
                type="text"
                mb={2}
                 onChange={onChange}
            />
            <Input
                name="password"
                placeholder="password"
                type="password"
                 onChange={onChange}
            />
        </form>
    )
}
export default Login;

