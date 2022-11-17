import { useEffect, useState } from "react"
import { getSubscribedPosts } from "../../managers/PostManager"



export const SubscribedPosts = ({token}) => {

    const [subscriptions, setSubscriptions] = useState([])


    useEffect(() => {

        getSubscribedPosts(token).then((SubscriptionsData) => setSubscriptions(SubscriptionsData))

    }, [])

    return <>
        <h1 className="title is-1 level-item">Subscribed</h1>
        {
            subscriptions?.map(subscription =>
                <div  className="my-4"  key={`subscription--${subscription.id}`}>
                    <div className="level">
                    <div className="columns level-item">
                        <div className="column is-2">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={subscription.image_url} alt="Placeholder image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        {/* <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src={subscription.user?.profile_image_url} alt="Placeholder image" />
                                            </figure>
                                        </div> */}
                                        <div className="media-content">
                                            <div>
                                                <p className="title is-4">{subscription.user?.full_name}</p>
                                            </div>
                                            <div>
                                                <p className="subtitle is-6">@{subscription.user?.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="content">
                                        <div className="title is-3">
                                            {subscription.title}
                                        </div>
                                        <time>Publication Date: {subscription.publication_date}</time>
                                        
                                        <div>
                                            <p>{subscription.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )

     }                           
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
