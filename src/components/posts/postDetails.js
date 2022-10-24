import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../managers/PostManager"

export const PostDetails = () => {
    const [post, setPost] = useState ({})
    const {postId} = useParams()
    useEffect(() => {
        getPostById(postId).then(postData => setPost(postData))
    }, [postId])

    return (
        <section>
            <h3>{post?.user?.first_name} | {post?.user?.last_name}</h3>
            <div> Title: {post.title}</div>
            <div> Content: {post.content}</div>
            <div> Category: {post.category?.label}</div>
            <div>Publication Date: {post.publication_date}</div>
        </section>
    )
}