import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByPostId } from "../../managers/CommentManager"
import { getPostById } from "../../managers/PostManager"
import { Link } from "react-router-dom"



export const PostComments = () => {

  const [post, setPost] = useState([])
  const [comments, setPostComments] = useState([])
  const { postId } = useParams()

  useEffect(() => {
    getPostById(postId).then(postData => setPost(postData))
  }, [postId])

  useEffect(() => {
    getCommentsByPostId(postId).then(postCommentData => setPostComments(postCommentData))
  }, [postId])



  return <>
    <section>
      <h2>{post.title}</h2>
      <article>
        {
          comments.map(comment =>
            <article key={`comment--${comment.id}`}>

              <div>You have a comment: {comment.content}</div>
              <div>You have a comment: {comment.created_on}</div>
              <div>You have a comment: {comment.author.username}</div>



            </article>
          )
        }
        <Link to={`/posts/${postId}/`}>
          Go back to the Post
        </Link>
      </article>
    </section>
  </>
}