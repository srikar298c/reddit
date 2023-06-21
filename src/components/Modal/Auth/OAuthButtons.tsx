import React from "react";
import {Button, Flex, Image, Text } from "@chakra-ui/react";
const OAuthButtons: React.FC =()=>{
    return(
        <Flex direction="column" mb={4} width="100%">
            <Button
                variant="oauth"
                mb={2}
                // onClick={() => signInWithGoogle()}
                // isLoading={loading}
            >
                <Image src="/images/googlelogo.png" height="20px" mr={4} />
                Continue with Google
            </Button>
            <Button variant="oauth">Some Other Provider</Button>
            
        </Flex>
    )
}
export default OAuthButtons;