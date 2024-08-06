'use client'
import { useState } from "react"
import { dataobjType } from "./dataType";


const dataArr: dataobjType[] = [
    {
        email: "abdullah@example.com",
        password: "abdullah",
        userName: "Abdullah",
        hobby: "Reading",
        info: "Software engineer with a passion for literature."
    },
    {
        email: "haider@example.com",
        password: "haider",
        userName: "Haider",
        hobby: "Photography",
        info: "Professional photographer who loves capturing nature."
    },
    {
        email: "uzair@example.com",
        password: "uzair",
        userName: "Uzair",
        hobby: "Cycling",
        info: "Fitness enthusiast and avid cyclist."
    }
];

type loginPageType = {
    authenticate: (fn: boolean) => void;
    setAuthenticateUser: (fn: dataobjType) => void;
}


export default function LoginPage({ authenticate, setAuthenticateUser }: loginPageType) {
    const [userFind, setUserFind] = useState({})


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    function loginClick() {
        const [userGet] = dataArr.filter((user) => email == user.email && password == user.password);
        if (userGet) {
            setUserFind(userGet);
            setAuthenticateUser(userGet);

            authenticate(true);
        }
        else {
            console.log('wrong email or password');
        }
    }



    return (
        <>
            <div className="flex gap-3 flex-wrap">
                <div className="border-2 border-black p-2 mb-2 rounded-md">
                    <p className="font-serif">Email: haider@example.com</p>
                    <p className="font-serif">Password: haider</p>
                </div>
                <div className="border-2 border-black p-2 mb-2 rounded-md">
                    <p className="font-serif">Email: abdullah@example.com</p>
                    <p className="font-serif">Password: abdullah</p>
                </div>
            </div>

            <input type="email" className="rounded-md p-1 bg-slate-700 text-white" placeholder="Enter Eamil" onChange={(e) => { setEmail(e.target.value) }} />
            <br />
            <input type="password" className="mt-1 rounded-md p-1 bg-slate-700 text-white" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <button type="button" className="mt-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={loginClick}>Login</button>


        </>
    )
}
