import React, {useState} from "react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import InputItem from "@/components/Layout/InputItem";
import {Button, Flex, Text} from "@chakra-ui/react";
const SignUp:React.FC =() => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    });
    
    
    const onSubmit = () => {
    
    
    
    
    };
    
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSignUpForm((prev)=>({
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
            <InputItem
                name="confirmPassword"
                placeholder="confirm password"
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
                Sign Up
            </Button>
            
            
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>Already a Redditor ?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={()=>
                        setAuthModalState((prev) =>({
                            ...prev,
                            view:"login",
                        }))}
                >
                    LOGIN
                </Text>
            </Flex>
        </form>
    )
}
export default SignUp;