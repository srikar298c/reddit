import React from 'react';
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import AuthInputs from "@/components/Modal/Auth/AuthInputs";

function AuthModal() {

    const [modalState,setModalState] =useRecoilState(authModalState)
    const handleclose =() =>{
        setModalState(prev =>(
            {
                ...prev,
            }
        ))
    }
    return (
        <>
            
            
            <Modal
                isOpen={modalState.open} onClose={handleclose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{modalState.view === 'login' && "Login"}
                        {modalState.view === 'signup' && "Sign Up"}
                        {modalState.view === 'resetPassword' && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody display = "flex"
                    flexDirection = "column"
                    alignItems = "center"
                    justifyContent={"center"}>
                        <Flex
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            width="70%"
                        >
                            <AuthInputs/>
                        </Flex>
                    </ModalBody>
                    
                    
                </ModalContent>
            </Modal>
        </>
    );
}

export default AuthModal;