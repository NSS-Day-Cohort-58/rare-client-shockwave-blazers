import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteComment, getCommentsByPostId } from "../../managers/CommentManager"
import { getPostById } from "../../managers/PostManager"
import { Link } from "react-router-dom"



export const PostComments = ({token}) => {
  const userId = token
  const [post, setPost] = useState([])
  const [comments, setPostComments] = useState([])
  const { postId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getPostById(postId).then(postData => setPost(postData))
  }, [postId])

  useEffect(() => {
    getCommentsByPostId(postId).then(postCommentData => setPostComments(postCommentData))
  }, [postId])


  const renderDeleteButton = (commentId) => {
    return <>
      <button className="button is-small is-danger is-focused"
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this comment?')) {
            makeDeleteRequest(commentId)
          }
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  }

  const makeDeleteRequest = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        window.location.reload(false)
      })
  }
 
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
              <>
              {
                userId === comment.author.tokenNumber
                ? <>
                  <button className="button is-primary">
                  <Link to={`/comment/${comment.id}/editcomment`}>Edit your comment</Link></button>

                  {renderDeleteButton(comment.id)}
                  </>
                :"Bitch No it doesn't."
              }
              </>


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