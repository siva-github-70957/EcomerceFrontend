import React, { createContext } from "react";

export const timeContext = createContext({});

export default function UserDetails({ children }) {
    let time = new Date().getHours();
    let nextOne = time + 1;
    let prevOne = time - 1;

    console.log(children);
    console.log(time, nextOne, prevOne);
    return (
        <timeContext.Provider value={{ time, nextOne, prevOne }} >
            {children}
        </timeContext.Provider>
    );
}