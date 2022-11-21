import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addComment, getCommentsByPostId } from "../../managers/CommentManager"
import { getPostById } from "../../managers/PostManager"
import { Link } from "react-router-dom"


export const MakeComment = ({token}) => {
    const userId = parseInt(token)
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const { postId } = useParams()
    const [newComment, setNewComment] = useState({
        post: postId,
        author: userId,
        content: "",
        created_on: ""
        
      });
  
    useEffect(() => {
      getPostById(postId).then(postData => setPost(postData))
    }, [postId])
  

  
    const changePostState = (domEvent) => {
        const copy = { ...post };
        copy[domEvent.target.id] = domEvent.target.value;
        setNewComment(copy);
      };

      

    return <>
      <section>
        <h2>{post.title}</h2>
        <article>
        <input
              className="input is-success"
              type="text"
              id="content"
              required
              autoFocus
              placeholder="Enter your commentary"
              value={newComment.content}
              onChange={changePostState}
            />
            <button type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                const newCommentToSendToAPI = {
                    post: postId,
                    author: userId,
                    content: newComment.content,
                    created_on: ""                             
                };
                addComment(newCommentToSendToAPI).then( navigate(`/posts/${postId}/comments`));
              }}
              className="btn btn-primary">
                Save this comment
            </button>
          
          <Link to={`/posts/${postId}/`}>
            Go back to the Post
          </Link>
        </article>
      </section>
    </>
  }