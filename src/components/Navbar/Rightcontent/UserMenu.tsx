import React from "react";
import { signOut } from "firebase/auth";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {auth} from "@/firebase/clientApp"
import {
    Box,
    Flex, Icon,
    Menu,
    Text,
    MenuButton,
    MenuItem,
    MenuList, MenuDivider,
    
} from "@chakra-ui/react";
import {User} from "firebase/auth";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
type UserMenuProps={
    user?: User | null;
};


const UserMenu: React.FC<UserMenuProps>=({user}) => {
    const setAuthModalState = useSetRecoilState(authModalState)
    return(
        <Menu>
            <MenuButton  cursor="pointer"
                         padding="0px 6px"
                         borderRadius="4px"
                         _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            >
                <Flex alignItems="center">
                    <Flex alignItems="center">
                        {user ? (
                            <>
                                <Icon
                                    fontSize={24}
                                    mr={1}
                                    color="gray.300"
                                    as={FaRedditSquare}
                                />
                                <Flex
                                    direction="column"
                                    display={{ base: "none", lg: "flex" }}
                                    fontSize="8pt"
                                    align="flex-start"
                                    mr={8}
                                >
                                    <Text fontWeight={700}>
                                        {user?.displayName || user.email?.split("@")[0]}
                                    </Text>
                                    <Flex>
                                        <Icon as={IoSparkles} color="brand.100" mr={1} />
                                        <Text color="gray.400">1 karma</Text>
                                    </Flex>
                                </Flex>
                                <Box
                                    display={{ base: "none", lg: "flex" }}
                                    flexDirection="column"
                                    fontSize="8pt"
                                    alignItems="flex-start"
                                    mr={8}
                                >
                                </Box>
                            </>
                        ) : (
                            <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />
                        )}
                    </Flex>
                    <ChevronDownIcon color="gray.500" />
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                >
                    <Flex alignItems="center">
                        <Icon fontSize={20} mr={2} as={CgProfile} />
                        Profile
                    </Flex>
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                     onClick={() => setAuthModalState({open:true, view:"login"})}
                >
                    <Flex alignItems="center">
                        <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                       LogIn /SignUp
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    )
};
export default UserMenu;