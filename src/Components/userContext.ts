import { createContext } from "react";
import { users } from "../Interfaces/users";
export const UserContext = createContext<users>({
    id: 1,
    name: '',
    job: '',
    birth: '',
    joined: '',
    expire: '',
    web: '',
    phone: '',
});