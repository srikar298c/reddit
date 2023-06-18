import React from 'react';
// @ts-ignore
import {Button} from '@/chakra/react';

const AuthButtons:React.FC=() => {
    return (
        <>
        <Button variant ="outline"
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                mr={2}
                // onClick={() => setAuthModalState({ open: true, view: "login" })}
        >Log In</Button>
            <Button
                variant="solid"
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                mr={2}
                // onClick={() => setAuthModalState({ open: true, view: "signup" })}
            >
                Sign Up
            </Button>
        </>
    );
}

export default AuthButtons;