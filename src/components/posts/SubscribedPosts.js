import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import { getAllSubscriptions } from "../../managers/SubscriptionManager"
import { getAllUsers } from "../../managers/UserManager"


export const SubscribedPosts = ({token}) => {
    const [subscriptions, setSubscriptions] =  useState([])
    const [subsForCurrentUser, setSubsforCurrentUser] = useState([])
    const [posts, setPosts] = useState([])


    useEffect(() => {
    getAllPosts()
      .then((allPostsArray) => {
        setPosts(allPostsArray);
      });
  }, []);

    useEffect(() => {
    getAllSubscriptions()
      .then((allSubscriptionsArray) => {
        setSubscriptions(allSubscriptionsArray);
      });
  }, []);

  const userId = parseInt(token)

//     const findAllUserSubscriptions = () => {
// const subscriptionsForUser = []

//     subscriptions.forEach((sub) => {
//       if (sub.follower_id === userId) {
//         posts.forEach((post) => {
//           if (post.user_id === sub.author_id) {
//             subscriptionsForUser.push(post)
//           }
//         })
//       }})

//       return subscriptionsForUser
//     }

//   useEffect(() => {
// const subscriptionsForUser = []
// const userSubs = findAllUserSubscriptions()
//   subscriptions.forEach((sub) => {
//       if (sub.follower_id === userId) {
//         posts.forEach((post) => {
//           if (post.user_id === sub.author_id) {
//             subscriptionsForUser.push(post)
//           }
//         })
//       }})

// setSubsforCurrentUser(userSubs)
// }, [])


const displayUserSubscriptions = () => {
const subscriptionsForUser = []

    subscriptions.forEach((sub) => {
      posts.forEach((post) => {
      if (sub.follower_id === userId) {
          if (post.user_id === sub.author_id) {
            subscriptionsForUser.push(post)
          }
        }})
      })

return <>
{subscriptionsForUser.map(post => {
        <div>{post.title}</div>
    })
}
</>
}

return <>
<div>
  {displayUserSubscriptions()}
</div>
</>

}



// export const SubscribedPosts = ({ token }) => {

//     const [subscriptions, setSubscriptions] = useState()
//     const [posts, setPosts] = useState()







//     useEffect(() => {

//         getAllSubscriptions().then((subscriptionsData) => setSubscriptions(subscriptionsData))

//     }, [])

//     useEffect(() => {

//         getAllPosts().then((postsData) => setPosts(postsData))

//     }, [])



//     return <>
        
//     </>
// }









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