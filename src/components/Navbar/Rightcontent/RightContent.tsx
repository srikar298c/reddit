import React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/Rightcontent/AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/clientApp";
type RightContentProps={
user: any;
}
const RightContent: React.FC<RightContentProps>=({user}) => {
    return (
        <>
        <AuthModal/>
        <Flex justify={"center"} align={"center"}>
            {user? <Button onClick={() => signOut(auth)}>Log out</Button>: <AuthButtons/>}
        </Flex>
        </>
    );
}

export default RightContent;