import { Button } from '@chakra-ui/react';
import React from 'react';



const AuthButtons:React.FC= () => {
    
    return (
        <>
        <Button variant={'outline'}
        height="20px" display ={{base:"none", sm:"flex"}}
        width={{base:"70px", md:"110px"}}
        mr={2}
        // onClick={()=>{}}
        >LogIn</Button>
        <Button variant={'solid'}>SignUp</Button>
        </>
    )
}
export default AuthButtons;