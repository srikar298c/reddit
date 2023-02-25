import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonProps = {
    
};

const OAuthButton:React.FC = () => {
    
    return (
        <Flex direction={'column'} width= "100%">
           <Button variant ="oauth" mb={2}>
            <Image height={'20px'} mr="4" src="/images/googlelogo.png"/>
            Contine with Google
           </Button>
           <Button variant={'oauth'} mb={3}>Continue with other Provders</Button>
        </Flex>
    )
}
export default OAuthButton;