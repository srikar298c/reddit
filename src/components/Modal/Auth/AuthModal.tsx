import { authModalState } from '@/atoms/authModalAtom';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';


const AuthModal: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalState, setModalstate] = useRecoilState(authModalState)
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={modalState.open} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Here is the modal body
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
    )
}
export default AuthModal;