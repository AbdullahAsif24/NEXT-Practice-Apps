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
    setAuthenticateUser: (fn: {}) => void;
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
            <p className="font-serif">Email: haider@example.com</p>
            <p className="font-serif">Password: haider</p>

            <input type="email" className="rounded-md p-1 bg-slate-700 text-white" placeholder="Enter Eamil" onChange={(e) => { setEmail(e.target.value) }} />
            <br />
            <input type="password" className="mt-1 rounded-md p-1 bg-slate-700 text-white" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <button className="mt-1 rounded-md py-1 px-3 text-white bg-blue-500 hover:bg-blue-600" onClick={loginClick}>Login</button>

        </>
    )
}
