import './cardStyle.css'
import { dataobjType } from './dataType'

type cardType = {
    authenticateUser: dataobjType;
    setAuthenticate: (fn: boolean)=> void;
}

export default function Card({authenticateUser, setAuthenticate, }:cardType) {

    function loggingOut() {
        setAuthenticate(false)
    }
    
    return (
        <>
            <div className="card">
                <p className="card-title">{authenticateUser.userName}</p>
                <p className="small-desc">
                    <p><span className='font-bold mb-1'>Hobbies</span>:  {authenticateUser.hobby}</p>
                    <p><span className='font-bold'>Info</span>:  {authenticateUser.info}</p>
                </p>
                <div className="go-corner">
                    <div className="go-arrow">→</div>
                </div>
            </div>
            <button className="mt-1 ml-3 rounded-md py-1 px-3 text-white bg-blue-500 hover:bg-blue-600"  onClick={loggingOut}>Logout</button>

        </>
    )
}