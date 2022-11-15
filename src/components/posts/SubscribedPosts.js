import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import { getAllSubscriptions } from "../../managers/SubscriptionManager"
import { getAllUsers } from "../../managers/UserManager"


export const SubscribedPosts = ({token}) => {

    const [subscriptions, setSubscriptions] = useState()




    


    useEffect(() => {

        getAllSubscriptions().then((subscriptionsData) => setSubscriptions(subscriptionsData))

    }, [])





    return <>
        {subscriptions?.map(subscription => 
            subscription.follower_id === parseInt(token)
            ? <div className="container">
            <div className="card">
                <div className="card-title">
                    {subscription.post.title}
                </div>
                <div className="card-body">
                    {subscription.post.content}
                </div>
            </div>
            </div>
            : "hello "
            )}
    </>
}









    // const filterPostsBySubscription = (subscription) => {
    //     return posts?.map(post =>
    //         post.user_id === subscription?.author_id
    //             ? <div className="card">
    //                 <div className="card-header">
    //                     {post.title}
    //                 </div>
    //                 <div className="card-content">
    //                     {post.publication_date}
    //                 </div>
    //                 <div className="card-content">
    //                     {post.user.first_name} {post.user.last_name}
    //                 </div>
    //             </div>
    //             : <div className="container">
    //                 <div className="card">
    //                     <div className="column has-text-centered">
    //                     Subscribe to authors to curate your personal homepage!
    //                     </div>
    //                 </div>
    //             </div>
    //     )
    // }



    // subscriptions?.map(subscription =>
    //     subscription.follower_id === parseInt(token)
    //         ? "match!!"
    //         : ""

    // )
