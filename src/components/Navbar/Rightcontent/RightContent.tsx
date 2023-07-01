import React from 'react';
import {Flex} from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/Rightcontent/AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import {User} from "@firebase/auth";
import Icons from "@/components/Navbar/Rightcontent/Icons";
import UserMenu from "@/components/Navbar/Rightcontent/UserMenu";
type RightContentProps={
user?: User| null;
}
const RightContent: React.FC<RightContentProps>=({user}) => {
    return (
        <>
        <AuthModal/>
        <Flex justify={"center"} align={"center"}>
            {user ? <Icons/>: <AuthButtons/>}
            <UserMenu user={user}/>
        </Flex>
        </>
    );
}

export default RightContent;