'use client'
import React, { useState } from "react";
import CounterFunction from "./components/CounterApp/Counter";
import MainProductsFilter from "./components/ProductsFilter/MainFilter";
import MainLoginFunc from "./components/login&signup/MainLogin";

export default function Home() {
  const [userName, setuserName] = useState("")

  function handleOnChange(e: any) {
    setuserName(e.target.value)
  }

  return (
    <div className="p-2 bg-zinc-500 h-[100vh]">

      <h1 className="font-bold text-xl">{userName.length > 2 ? ('Welcome ' + userName) : ('Please enter your name')}</h1>

      <input type="text" id="number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={userName} onChange={handleOnChange} />

      <br />
      <br />
      <h1 className="font-bold text-xl text-center">Components</h1>
      <br />
      <br />

      {/* Counter */}
      {/* <CounterFunction count={0} /> */}

      {/* login&signup  */}
      {/* <MainLoginFunc/> */}


      {/* Products Filter */}
      <MainProductsFilter/>
      

    </div>
  )
} 