import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCategories } from "../../managers/CategoryManager"
import { addPost } from "../../managers/PostManager"
import { getAllTags } from "../../managers/TagManager"



export const PostForm = ({ token }) => {

    const [post, update] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 0

    })

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    useEffect(() => {

        getAllCategories().then((CategoriesData) => setCategories(CategoriesData))

    }, [])
    useEffect(() => {

        getAllTags().then((TagsData) => setTags(TagsData))

    }, [])




    const navigate = useNavigate()
    const userId = parseInt(token)

    const handleButtonSaveClick = (event) => {
        event.preventDefault()

        const postToSendToAPI = {
            user_id: userId,
            category_id: parseInt(post.category_id),
            title: post.title,
            publication_date: "",
            image_url: post.image_url,
            content: post.content,
            approved: 1
        }

        return addPost(postToSendToAPI).then(() => navigate("/myposts"))
    }

    return <>
        <div className="container">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input is-success" type="text" placeholder="Text input"
                        value={post.title}
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.title = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </div>

            <div class="field">
                <label class="label">Image URL</label>
                <div class="">
                    <input class="input is-success" type="text" placeholder="Text input"
                        value={post.image_url}
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.image_url = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </div>

            <div class="field">
                <label class="label">Content</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"
                        value={post.content}
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.content = evt.target.value
                                update(copy)
                            }
                        }></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">Category</label>
                <div class="control">
                    <div class="select">
                        <select
                            value={post.category_id}
                            onChange={
                                (evt) => {
                                    const copy = { ...post }
                                    copy.category_id = evt.target.value
                                    update(copy)
                                }
                            }>
                            <option value={0}>Select Category</option>
                            {
                                categories.map(category =>
                                    <option value={category.id}>{category.label}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>



            <div class="field ">
            <label class="label">Tag</label>
                <div class="control">
                    <label class="checkbox">
                        {
                            tags.map(tag =>
                                <>
                                <input className="mx-2" name="tag" type="checkbox"/>
                                {tag.label}
                                </>
                                    )
                        }
                    </label>
                </div>
            </div>


            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </div>
    </>
}