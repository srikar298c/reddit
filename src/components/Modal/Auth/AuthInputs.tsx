import React from "react"
import {useRecoilValue} from "recoil";
import {Flex} from "@chakra-ui/react";
import {authModalState, ModalView} from "@/atoms/authModalAtom";
import Login from "@/components/Modal/Auth/Login";
import SignUp from "@/components/Modal/Auth/SignUp"
type AuthInputsProps ={

}
const AuthInputs: React.FC<AuthInputsProps> =() =>{
    const modalState = useRecoilValue(authModalState);
    return(
        <Flex direction="column" alignItems="center" width="100%" mt={4}>
            {modalState.view === "login" && <Login/>}
            {modalState.view === "signup" && <SignUp/>}
        </Flex>
    )
}
export default AuthInputs;