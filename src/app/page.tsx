'use client'
import React, { useState } from "react";
// import CounterFunction from "../components/CounterApp/Counter";
// import MainProductsFilter from "../components/ProductsFilter/MainFilter";
// import MainLoginFunc from "../components/login&signup/MainLogin";
import Link from "next/link";

export default function Home() {
  const [userName, setuserName] = useState("")

  function handleOnChange(e: any) {
    setuserName(e.target.value)
  }

  // for rendering component which user selected
  // const componentsList = [
  //   'Counter',
  //   'Products Filter',
  //   'Login'
  // ]

  // const [filteredComponent, setfilteredComponent] = useState<string[]>(['Counter'])
  // const componentRender = (compo: string) => {
  //   setfilteredComponent(componentsList.filter((component) => (component === compo)))
  // }

  // function componentReturn() {
  //   switch (filteredComponent[0]) {
  //     case 'Counter':
  //       return <CounterFunction count={0} />
  //     case 'Products Filter':
  //       return <MainProductsFilter />
  //     case 'Login':
  //       return <MainLoginFunc />
  //   }
  // }

  return (
    <div>

      <h1 className="font-bold text-xl">{userName.length > 2 ? ('Welcome ' + userName) : ('Please enter your name')}</h1>

      <input type="text" id="number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={userName} onChange={handleOnChange} />

      <br />
      <br />
      <h1 className="font-bold text-xl text-center">Components</h1>
      <br />
      <br />


      {
        // componentsList.map((component, index) => (
        //   <button className="mx-1 mt-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" onClick={() => { componentRender(component) }} key={component + index} >{component}</button>
        // ))
      }
      {/* component render which user selected */}
      {
        // componentReturn()
      }

      <Link href={"./counter"}>
        <button className="mx-1 mt-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" >Counter App</button>
      </Link>
      <br />
      <Link href={"./login"}>
        <button className="mx-1 mt-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" >Login App</button>
      </Link>
      <br />
      <Link href={"./filter"}>
        <button className="mx-1 mt-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" >Product Filter App</button>
      </Link>


      

    </div>
  )
} 