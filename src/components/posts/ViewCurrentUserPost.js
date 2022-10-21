import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getPostById } from "../../managers/PostManager"

export const ViewCurrentUserPost = ({token}) => {

    const [posts, setPost] = useState ()

    useEffect (() => {
        getPostById().then((postData) => setPost(postData))
    }, [])
     

    return<>
        {
            posts?.map(post =>
                post.user_id === parseInt(token)
                ? <div key={`post--${post.id}`}>
                    <div class="card">
                    <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                    </div>
                    <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                        </div>
                        <div class="media-content">
                        <p class="title is-4">{post.user?.first_name} {post.user?.last_name}</p>
                        <p class="subtitle is-6">@{post.user?.first_name}{post.user?.last_name}</p>
                        </div>
                    </div>

                    <div class="content">
                        {post.content}
                        <br></br>
                        <time datetime>Publication Date: {post.publication_date}</time>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    </div>
                    </div>
                </div>
                :""
            )
        }
            </>
}
