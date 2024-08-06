import { useState } from "react"
import Card from "./card"
import LoginPage from "./login"
import { dataobjType } from "./dataType"


export default function MainLoginFunc() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authenticateUser, setAuthenticateUser] = useState<dataobjType>({
        email: "abdullah@example.com",
        password: "abdullah",
        userName: "Abdullah",
        hobby: "Reading",
        info: "Software engineer with a passion for literature."
    })

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