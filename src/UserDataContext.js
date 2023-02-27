import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userData = createContext({});
export function UserDataContext({ children }) {

    const [user, setUser] = useState(null);
    console.log('user in context', user);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => {
                    setUser(data);
                    setReady(true);
                })
                .catch((err) => console.log(err))
        }
    }, [user])
    return (
        <userData.Provider value={{ user, setUser, ready }} >
            {children}
        </userData.Provider>
    )
}