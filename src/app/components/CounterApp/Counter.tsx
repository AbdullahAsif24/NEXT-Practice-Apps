'use client'
import { useState } from "react";

type counterType = {
    count:number;
}

export default function CounterFunction({count}:counterType){
    const [initcount, setInitcount] = useState<number>(count)
    const [inputVal, setInputVal] = useState<number>(1)

    function countAdd() {
        setInitcount(initcount + inputVal)
    }
    
    function countSubtract() {
        if(initcount > 0) setInitcount(initcount - inputVal)
    }

    function handleInputChange(e:any) {
        // Convert input value to a number using parseInt or parseFloat
        const value = parseInt(e.target.value); 
        setInputVal(value)
    }


    return(
        <>
            <p className="text-lg font-bold mr-8">Count: {initcount}</p>

            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={countSubtract}>Minus</button>

            <input type="number" id="number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inline mx-2" value={inputVal} onChange={handleInputChange} />

            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={countAdd}>Add</button>
        </>
    )
}