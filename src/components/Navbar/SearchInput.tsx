import React from "react";
import {Flex, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {CheckIcon, PhoneIcon} from "@chakra-ui/icons";
type SearchInputProps={

}
const SearchInput: React.FC<SearchInputProps> =() => {
    
    
    return (
        <Flex>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>
            
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                />
                <Input placeholder='Enter amount' />
                <InputRightElement>
                    <CheckIcon color='green.500' />
                </InputRightElement>
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;