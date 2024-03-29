import React from "react";
import {Flex, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { SearchIcon} from "@chakra-ui/icons";
type SearchInputProps={

}
const SearchInput: React.FC<SearchInputProps> =() => {
    
    
    return (
        <Flex flexGrow ={1} mr={2} align={"center"}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                    
                </InputLeftElement>
                <Input type='search' placeholder='Buddy Search Reddit Here '
                       _placeholder={{ color: "gray.500" }}
                       _hover={{
                           bg: "white",
                           border: "1px solid",
                           borderColor: "blue.500",
                       }}
                       _focus={{
                           outline: "none",
                           border: "1px solid",
                           borderColor: "blue.500",
                       }}
                       height="34px"
                       bg="gray.50"/>
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;