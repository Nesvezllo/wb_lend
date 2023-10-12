import { createContext, useState, useContext } from "react";


export const Context = createContext()

export const StateContext = () => {
    const [number, setNumber] = useState(3)

    function numSet() {
        setNumber(number - 1)
    }

    return (
        <Context.Provider
        value={{
            setNumber,
            number,
            numSet
        }}
        >
        </Context.Provider>
    )
}



export const useStateContext = () => useContext(Context);