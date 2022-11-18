import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editCurrentComment, getCommentById } from "../../managers/CommentManager"



export const EditComment = ({ token }) => {
    const userId = parseInt(token)
    const navigate = useNavigate()
    const { commentId } = useParams()
    const [updatedComment, updateComment] = useState({
        post: 0,
        author: userId,
        content: "",
        created_on: ""

    });

    useEffect(() => {
        getCommentById(commentId).then(commentData => updateComment(commentData))
    }, [commentId])



    const changePostState = (domEvent) => {
        const copy = { ...updatedComment };
        copy[domEvent.target.id] = domEvent.target.value;
        updateComment(copy);
    };

    return <>
        <section>

            <article>
                <input
                    className="input is-success"
                    type="text"
                    id="content"
                    required
                    autoFocus
                    placeholder={updatedComment.content}
                    value={updatedComment.content}
                    onChange={changePostState}
                />
                <button type="submit"
                    onClick={(evt) => {
                        evt.preventDefault();
                        const EditedCommentToSendToAPI = {
                            id: commentId,
                            post: updatedComment.post,
                            author: userId,
                            content: updatedComment.content,
                            created_on: updatedComment.created_on
                        };
                        editCurrentComment(EditedCommentToSendToAPI).then(() => navigate(`/posts/${updatedComment.post}/comments`));
                    }}
                    className="btn btn-primary">
                    Save this comment's edit
                </button>
            </article>
        </section>
    </>
}