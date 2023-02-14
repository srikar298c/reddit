import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
    const [LoginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })
    const onSubmit = () => { };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name='email'
                placeholder='email'
                type="email"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
            />
            <Input
                required
                name='password'
                placeholder='password'
                type="password"
                mb={2}
                onChange={onChange}
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }} />
            <Button width="100%"
                type='submit'> Login</Button>
                <Flex
                fontSize ="9pt"
                justifyContent="center"
                >
                    <Text mr ={1}>
                        New Here?
                        </Text>
                        <Text
                        color={"blue.500"}
                        fontWeight ="700"
                        
                        >SIGN UP</Text>
                </Flex>

        </form>
    )
}
export default Login;