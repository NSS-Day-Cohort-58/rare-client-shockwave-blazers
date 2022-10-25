import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"


export const ViewUserDetails = () => {
    const [user, setUser] = useState({})
    const { postUserId } = useParams()

    useEffect(() => {
        getUserById(postUserId).then((userData) => setUser(userData))
    }, [postUserId])

    return <>
        {
            <div key={`user--${user.id}`}>
                Name:{user.first_name} {user.last_name}<br></br>
                UserName: {user.username}<br></br>
                Creation Date: {user.created_on}<br></br>
                Bio: {user.bio}
            </div>
        }
    </>
}