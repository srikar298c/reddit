import React from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import SearchInput from "@/components/Navbar/SearchInput";
import RightContent from "@/components/Navbar/Rightcontent/RightContent";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/clientApp";
import Directory from "@/components/Navbar/Directory/Directory";
const Navbar: React.FC =() =>{
    const[user,loading,error] =useAuthState(auth);
    return(
        <Flex bg={"white"} height ="44px" padding ="6px 12px">
          <Flex align={"center"}>
              <Image src={"/images/redditFace.svg"} height="30px"/>
              <Image src={"/images/redditText.svg"} height ="46px" display={{base: "none", md:"unset"} }/>
              
          </Flex>
            <Directory/>
            <SearchInput/>
           
            <RightContent user={user}/>
        
        </Flex>
        
    )
}
export default Navbar;