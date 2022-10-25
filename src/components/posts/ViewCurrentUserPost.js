import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getAllPosts } from "../../managers/PostManager"
import { deletePost } from "../../managers/PostManager"

export const ViewCurrentUserPost = ({token}) => {

    const [posts, setPost] = useState([])

    useEffect (() => {
        getAllPosts().then((postData) => setPost(postData))
    }, [])


    const getUpdatedPostsForUser = () => {
    getAllPosts().then((updatedPostData) => setPost(updatedPostData))
    };

    const deletePostButton = (postid) => {
        return <>
        <button className="button is-small is-danger is-focused"
        onClick={() => {
            if (window.confirm('Are you sure you want to delete this post?')) {
                makeDeleteRequest(postid)
            }
        }}
        >
            <i className="fa-solid fa-trash-can"></i>
        </button>
        </>
    }

    const makeDeleteRequest = (postid) => {
        deletePost(postid)
        .then(() => {
         getUpdatedPostsForUser();
       })
    }

    const currentPostCount = () => {
       let currentPostNum = 0

        posts.forEach((post) => {
            if (post?.user_id === parseInt(token)) {
                currentPostNum++
            }
        })
        return currentPostNum
    }

    const renderListOfUserPosts = () => {

        return<>
        {
            posts?.map(post =>
                post?.user_id === parseInt(token)
                ? <div key={`post--${post.id}`}>
                    <div className="card">
                    <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                    </div>
                    <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                        </div>
                        <div className="media-content">
                        <p className="title is-4">{post.user?.first_name} {post.user?.last_name}</p>
                        <p className="subtitle is-6">@{post.user?.first_name}{post.user?.last_name}</p>
                        </div>
                    </div>
                    <div className="content">
                        {post.content}
                        <br></br>
                        <time datetime>Publication Date: {post.publication_date}</time>
                        {deletePostButton(post.id)}
                    </div>
                    </div>
                    </div>
                </div>
                :""
            )
        }
            </>
    }

    return<>
{
    currentPostCount() > 0
    ? renderListOfUserPosts()
    : <>
    <h1 className="title">You have currently have No Posts.</h1>
    <button className="button is-primary">Create A Post!</button>
    </>

}
            </>
}
