import { atom } from "recoil";
export interface AuthModalState {
    open: boolean;
    view: "Login" | "signup" | "resetPassword";
}
const defaultModalState: AuthModalState = {
    open: false,
    view: 'Login',
}
export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: defaultModalState,
})