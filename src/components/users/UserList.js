import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"


export const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(
        () => {
            getAllUsers().then((usersFromAPI) => {
                setUsers(usersFromAPI)
            }
            )
        }, [])


    return <>
        <h1 className="title is-1 level-item">All Users</h1>
        {
            users?.map(user =>
                <div className="my-4" key={`user--${user.id}`}>
                    <div className="level">
                        <div className="columns level-item">
                            <div className="column is-7">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <Link to={`${user.id}/details`}>
                                                <p className="title is-4">{user.full_name}</p>
                                                </Link>
                                                <div>
                                                    <p className="subtitle is-6">@{user.user.username}</p>
                                                    <p className="subtitle is-6">Admin:
                                                        {
                                                            user.user.is_staff
                                                                ? " Yes"
                                                                : " No"

                                                        }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
}