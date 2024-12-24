'use client'

import {useContext, useReducer, useState, createContext} from "react";
import CompB from "@/src/component/CompB";

//reducer =>
// const reducer = (state, action) => {
//     const { type, payload } = action;
//     if (type === 'increase') {
//         return state + 2
//     } else if (type === 'decrease') {
//         return state - 1
//     } else if (type === 'reset') {
//         return 0
//     }
// }

export const CountContext = createContext(0);

const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount, time, setTime}}>
            {children}
        </CountContext.Provider>
    )
}

const CountContainer = () => {
    const {count, setCount} = useContext(CountContext)
    // const [count, setCount] = useState(0)
    // const [state, dispatch] = useReducer(reducer, 0)

    const handleIncrease = () => {
        // setCount(count + 1)
        // dispatch({type: 'increase', payload: 'salam'})
        setCount(count + 1)
    }

    const handleDecrease = () => {
        // setCount(count - 1)
        // dispatch({type: 'decrease', payload: ''})
        setCount(count - 1)
    }

    const handleReset = () => {
        // setCount(0)
        // dispatch({type: 'reset', payload: ''})
        setCount(0)
    }

    return (
        <div>
            <CompB/>
            <button className={'mx-2'} onClick={handleIncrease}>
                {'increase'}
            </button>
            <button className={'mx-2'} onClick={handleDecrease}>
                {'decrease'}
            </button>
            <button className={'mx-2'} onClick={handleReset}>
                {'reset'}
            </button>
        </div>
    )
}


const Page = () => {
    return (
        <CountProvider>
            <CountContainer/>
        </CountProvider>
    )
}

export default Page