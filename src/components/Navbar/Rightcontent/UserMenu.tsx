import React from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button, Flex,Icon,
    Menu,
    Text,
    MenuButton,
    MenuItem,
    MenuList,
    
} from "@chakra-ui/react";
import {User} from "firebase/auth";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
type UserMenuProps={
    user?: User | null;
};

const UserMenu: React.FC<UserMenuProps>=({user}) => {
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
                                <Box
                                    display={{ base: "none", lg: "flex" }}
                                    flexDirection="column"
                                    fontSize="8pt"
                                    alignItems="flex-start"
                                    mr={8}
                                >
                                    <Text fontWeight={700}>
                                        {user?.displayName || user?.email?.split("@")[0]}
                                    </Text>
                                    <Flex alignItems="center">
                                        <Icon as={IoSparkles} color="brand.100" mr={1} />
                                        <Text color="gray.400">1 karma</Text>
                                    </Flex>
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
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
};
export default UserMenu;