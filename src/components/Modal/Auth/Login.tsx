import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import {authModalState, } from "@/atoms/authModalAtom";
import InputItem from "../../Layout/InputItem";
import {useSetRecoilState} from "recoil";

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    
    
    const onSubmit = () => {
    
    
        
       
    };
    
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginForm((prev)=>({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    
    return (
        <form onSubmit={onSubmit}>
            <InputItem
                
                name="email"
                placeholder="email"
                type="text"
                mb={2}
                onChange={onChange}
            />
            <InputItem
                name="password"
                placeholder="password"
                type="password"
                onChange={onChange}
            />
           
            <Button
                width="100%"
                height="36px"
                mb={2}
                mt={2}
                type="submit"
              
            >
                Log In
            </Button>
          
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>New here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                   onClick={()=>
                setAuthModalState((prev) =>({
                    ...prev,
                    view:"signup",
                }))}
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    );
};
export default Login;