import React from 'react';
import {Flex} from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/Rightcontent/AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
type RightContentProps={

}
const RightContent: React.FC<RightContentProps>=() => {
    return (
        <>
        <AuthModal/>
        <Flex justify={"center"} align={"center"}>
            <AuthButtons/>
        </Flex>
        </>
    );
}

export default RightContent;