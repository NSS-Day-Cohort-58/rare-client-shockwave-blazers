import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../managers/PostManager"
import { Link } from "react-router-dom"

export const PostDetails = () => {
    const [post, setPost] = useState ({})
    const {postId} = useParams()
    useEffect(() => {
        getPostById(postId).then(postData => setPost(postData))
    }, [postId])

    return (
        <section>
            <Link to={`/userprofile/${post.user_id}`} >{post?.user?.first_name} | {post?.user?.last_name}</Link>  
            <div> Title: {post.title}</div>
            <div> Content: {post.content}</div>
            <div> Category: {post.category?.label}</div>
            <div>Publication Date: {post.publication_date}</div>
        </section>
    )
}