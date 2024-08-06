"use client"

type CategoriesTypes = {
  categlist: string[];
    setSelectedCateg: (arg0: string) => void;
}

export default function CategoriesFunc({categlist, setSelectedCateg}:CategoriesTypes) {

    function categoryConsole (categ:string){
        setSelectedCateg(categ)
    }

    return(
        <>
            {categlist.map((categ, i)=>(<button key={categ + i} type="button" className="mx-2 mt-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{categoryConsole(categ)}}>{categ}</button>))}
            
        </>
    )
}