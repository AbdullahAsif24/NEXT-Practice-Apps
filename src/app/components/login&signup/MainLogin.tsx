import { useState } from "react"
import Card from "./card"
import LoginPage from "./login"


export default function MainLoginFunc() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authenticateUser, setAuthenticateUser] = useState()

    return (
        <>
            {
                isAuthenticated ?
                    <Card authenticateUser={authenticateUser} setAuthenticate={setIsAuthenticated} /> :
                    <LoginPage authenticate={setIsAuthenticated} setAuthenticateUser={setAuthenticateUser} />
            }
        </>
    )
}