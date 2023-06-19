import React from 'react';
import {useDisclosure} from "@chakra-ui/hooks";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";

function AuthModal() {
    const {isOpen, onOpen, onClose} = useDisclosure();
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
            <Button
                
                onClick={onOpen}>Open Modal</Button>
            
            <Modal
                isOpen={modalState.open} onClose={handleclose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                    
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AuthModal;