import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import { getAllSubscriptions } from "../../managers/SubscriptionManager"


export const SubscribedPosts = ({ token }) => {

    const [subscriptions, setSubscriptions] = useState()
    const [posts, setPosts] = useState()




    


    useEffect(() => {

        getAllSubscriptions().then((subscriptionsData) => setSubscriptions(subscriptionsData))

    }, [])

    useEffect(() => {

        getAllPosts().then((postsData) => setPosts(postsData))

    }, [])



    return <>
        
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