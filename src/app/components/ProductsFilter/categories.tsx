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
            {categlist.map((categ, i)=>(<button key={categ + i} type="button" style={{background: '#0035ffad', border: '1px solid black', color: 'white', borderRadius: '5px', padding: "5px", margin:"2px"}} onClick={()=>{categoryConsole(categ)}}>{categ}</button>))}
            
        </>
    )
}