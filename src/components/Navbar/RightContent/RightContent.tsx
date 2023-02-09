import AuthModal from '@/components/Modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';


const RightContent:React.FC = () => {
    
    return (
        <>
        <AuthModal/>
        <Flex justify={'center'} align ='center'>
        <AuthButtons/></Flex>
        </>
    )
}
export default RightContent;