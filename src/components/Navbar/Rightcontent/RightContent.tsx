import React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/Rightcontent/AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import {signOut, User} from "@firebase/auth";
import {auth} from "@/firebase/clientApp";
import Icons from "@/components/Navbar/Rightcontent/Icons";
type RightContentProps={
user?: User| null;
}
const RightContent: React.FC<RightContentProps>=({user}) => {
    return (
        <>
        <AuthModal/>
        <Flex justify={"center"} align={"center"}>
            {user ? <Icons/>: <AuthButtons/>}
        </Flex>
        </>
    );
}

export default RightContent;