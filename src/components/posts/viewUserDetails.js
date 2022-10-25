import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"


export const ViewUserDetails = ({token})=> {
    const [users, setUsers]= useState()
    const {userId} = useParams()

    useEffect (() => {
        getUserById(userId).then((userData) => setUsers(userData))
    }, [userId])

    return <>
    {
        users?.map (user =>
            user.id === parseInt(token)
            ?<div key={`user--${user.id}`}>
            Name:{user.first_name} {user.last_name}
            UserName: {user.username}
            Creation Date: {user.created_on}
            Bio: {user.bio}
            </div>
            :""
        )
    }
    </>
}