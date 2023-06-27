import React, {useEffect} from 'react';
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text
    
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {authModalState, ModalView} from "@/atoms/authModalAtom";
import AuthInputs from "@/components/Modal/Auth/AuthInputs";
import OAuthButtons from "@/components/Modal/Auth/OAuthButtons";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/clientApp";
import ResetPassword from "@/components/Modal/Auth/ResetPassword";

function AuthModal() {
    
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth);
    const handleClose = () => {
        setModalState(prev => (
            {
                ...prev,
                open: false,
            }
        ))
    }
    const toggleView = (view: string) => {
        setModalState({
            ...modalState,
            view: view as typeof modalState.view,
        });
    };
    useEffect(() => {
        if (user) handleClose();
    }, [user])
    return (
        <>
            
            
            <Modal
                isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader textAlign={"center"}>{modalState.view === 'login' && "Login"}
                        {modalState.view === 'signup' && "Sign Up"}
                        {modalState.view === 'resetPassword' && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody display="flex"
                               flexDirection="column"
                               alignItems="center"
                               justifyContent={"center"}>
                        <Flex
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            width="70%"
                        >
                            {modalState.view === "login" || modalState.view === "signup" ? (
                                <>
                                    <OAuthButtons />
                                    OR
                                    <AuthInputs toggleView={toggleView} />
                                </>
                            ) : (
                                <ResetPassword toggleView={toggleView} />
                            )}
                           
                        </Flex>
                    </ModalBody>
                    
                    
                </ModalContent>
            </Modal>
        </>
    );
}

export default AuthModal;