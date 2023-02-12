import { atom } from "recoil";
export interface AuthModalState{
   open : boolean;
   view : "Login" |"signup" |"resetPassword";
   
}