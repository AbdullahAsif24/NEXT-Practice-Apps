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

  // for rendering component which user selected
  const componentsList = [
    'Counter',
    'Products Filter',
    'Login'
  ]

  const [filteredComponent, setfilteredComponent] = useState<string[]>(['Counter'])
  const componentRender = (compo: string) => {
    setfilteredComponent(componentsList.filter((component) => (component === compo)))
    console.log(filteredComponent);
  }

  function componentReturn() {
    switch (filteredComponent[0]) {
      case 'Counter':
        return <CounterFunction count={0} />
      case 'Products Filter':
        return <MainProductsFilter />
      case 'Login':
        return <MainLoginFunc />
    }
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


      {
        componentsList.map((component, index) => (
          <button key={component + index} type="button" style={{ background: '#0035ffad', border: '1px solid black', color: 'white', borderRadius: '5px', padding: "5px", margin: "2px" }} onClick={() => { componentRender(component) }}>{component}</button>
        ))
      }

      <br />
      <br />

      {/* component render which user selected */}
      {
        componentReturn()
      }

    </div>
  )
} 