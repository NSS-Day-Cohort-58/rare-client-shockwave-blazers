import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../../managers/CategoryManager";
import { updatePost, getPostById } from "../../managers/PostManager";
import { getAllTags } from "../../managers/TagManager";

export const UpdatePostForm = ({ token }) => {
  const { postId } = useParams();
  const [currentPost, updateCurrentPost] = useState({
    user_id: 0,
    category_id: 0,
    title: "",
    publication_date: "",
    image_url: "",
    content: "",
    approved: 0,
  });

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllCategories().then((CategoriesData) => setCategories(CategoriesData));
  }, []);
  useEffect(() => {
    getAllTags().then((TagsData) => setTags(TagsData));
  }, []);
  useEffect(() => {
    getPostById(postId).then((data) =>
      updateCurrentPost({
        id: postId,
        user_id: data.user_id,
        category_id: data.category_id,
        title: data.title,
        publication_date: data.publication_date,
        image_url: data.image_url,
        content: data.content,
        approved: data.approved,
      })
    );
  }, [postId]);

  const navigate = useNavigate();
  const userId = parseInt(token);

  const changePostState = (domEvent) => {
    // TODO: Complete the onChange function
    const copy = { ...currentPost };
    copy[domEvent.target.id] = domEvent.target.value;
    updateCurrentPost(copy);
  };

  return (
    <>
      <div className="container">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              id="title"
              placeholder="Text input"
              value={currentPost.title}
              onChange={changePostState}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Image URL</label>
          <div class="">
            <input
              class="input is-success"
              type="text"
              id="image_url"
              placeholder="Text input"
              value={currentPost.image_url}
              onChange={changePostState}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Content</label>
          <div class="control">
            <textarea
              class="textarea"
              id="content"
              placeholder="Textarea"
              value={currentPost.content}
              onChange={changePostState}
            ></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <div class="select">
              <select
                id="category"
                value={currentPost.category_id}
                onChange={changePostState}
              >
                <option value={0}>Select Category</option>
                {categories.map((category) => (
                  <option value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div class="field ">
          <label class="label">Tag</label>
          <div class="control">
            <label class="checkbox">
              {tags.map((tag) => (
                <>
                  <input className="mx-2" name="tag" id="tag" type="checkbox" />
                  {tag.label}
                </>
              ))}
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/posts/${postId}`)}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                const updatedPost = {
                  user_id: userId,
                  category_id: parseInt(currentPost.category_id),
                  title: currentPost.title,
                  publication_date: "",
                  image_url: currentPost.image_url,
                  content: currentPost.content,
                  approved: 1,
                };
                updatePost(updatedPost).then(() => navigate("/myposts"));
              }}
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
