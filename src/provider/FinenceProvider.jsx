import React, { createContext, useState, useEffect } from "react"

export const FinanceContext = createContext([])

const FinanceProvider = ({ children }) => {
    const [state, setState] = useState([])
    const [mutate, setMutate] = useState(true)
    
    useEffect(async() => {
        if(!localStorage.getItem('data'))
            localStorage.setItem('data', JSON.stringify([]))

        await setState(JSON.parse(localStorage.getItem('data')))
    }, [mutate])

    return(
        <FinanceContext.Provider value={{ state, setState, mutate, setMutate }}>
            { children }
        </FinanceContext.Provider>
    )
}

export default FinanceProvider