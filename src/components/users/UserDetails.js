import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { addSubscription, getAllSubscriptions } from "../../managers/SubscriptionManager"
import { getUserById } from "../../managers/UserManager"




export const UserDetails = ({ token }) => {

    const [user, setUser] = useState({})
    const [subscriptions, setSubscriptions] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId).then((userData) => setUser(userData))
    }, [userId])

    useEffect(() => {
        getAllSubscriptions().then((subscriptionsData) => setSubscriptions(subscriptionsData))
    }, [])

    return <>
        <div className="level">
            <div className="columns level-item">
                <div className="column is-7">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src={user.profile_image_url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{user.full_name}</p>
                                    <div>
                                        <p className="subtitle is-6">@{user?.user?.username}</p>
                                        <p className="subtitle is-6">Admin:
                                            {
                                                user?.user?.is_staff
                                                    ? " Yes"
                                                    : " No"

                                            }
                                        </p>
                                        <p className="subtitle is-6">Email: {user?.user?.email}</p>
                                        <p className="subtitle is-6">Date Joined: {user?.user?.date_joined}</p>
                                    </div>
                                    <div>
                                        {
                                            subscriptions?.find(subscription => subscription.follower.tokenNumber === token)
                                                ? <button>
                                                    Unsubscribe
                                                </button>
                                                : <button
                                                onClick={
                                                    () => {
                                                        addSubscription({
                                                            followerId: token,
                                                            authorId: user.id
                                                        })
                                                    }
                                                }>
                                                    Subscribe
                                                </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}