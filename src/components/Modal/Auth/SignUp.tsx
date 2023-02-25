import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type SignUpProps = {

};

const SignUp: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [singupForm, setSignupForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    //Firebase logic
    const onSubmit = () => { };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //update form state
        setSignupForm((prev) => ({
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
            <Input
                required
                name='confirmPassword'
                placeholder='confirm password'
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
                type='submit'> Sign Up</Button>
            <Flex
                fontSize="9pt"
                justifyContent="center"
            >
                <Text mr={1}>
                    Already a redditor ?!
                </Text>
                <Text
                    color={"blue.500"}
                    fontWeight="700"
                    cursor={'pointer'}
                    onClick={() => setAuthModalState(prev => ({
                        ...prev,
                        view: 'login'
                    }))}
                >LOG IN</Text>
            </Flex>

        </form>
    )
}
export default SignUp;