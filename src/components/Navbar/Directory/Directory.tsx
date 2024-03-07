import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex, Menu,
    Text,
    MenuButton,
    MenuItem,
    MenuList, Icon,
    
} from "@chakra-ui/react";
import {TiHome} from "react-icons/ti";
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
// import {User} from "firebase/auth";
// type UserMenuProps={
//     user?: User | null;
// };


const UserMenu: React.FC=() => {
    const setAuthModalState = useSetRecoilState(authModalState)
    return(
        <Menu>
            <MenuButton  cursor="pointer"
                         padding="0px 6px"
                         borderRadius="4px"
                         mr={2}
                         ml={{ base: 0, md: 2 }}
                         _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            >
                <Flex alignItems="center">
                    <Flex alignItems="center">
                       
                    <Icon fontSize={24} mr={{base:1, md: 2 }} as ={TiHome}/>
                        
                        <Flex display={{ base:"none", lg:"flex"}}><Text fontWeight={600}>Home</Text></Flex>
                    </Flex>
                    <ChevronDownIcon color="gray.500" />
                </Flex>
            </MenuButton>
            <MenuList>
            
            </MenuList>
        </Menu>
    )
};
export default UserMenu;