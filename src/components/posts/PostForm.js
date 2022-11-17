import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../managers/CategoryManager";
import { addPost } from "../../managers/PostManager";
import { getAllTags } from "../../managers/TagManager";

export const PostForm = ({ token }) => {
  const navigate = useNavigate();
  const userId = parseInt(token);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [post, setPost] = useState({
    user_id: 0,
    category: 0,
    title: "",
    publication_date: "",
    image_url: "",
    content: "",
    approved: 0,
  });
  const [chosenTags, setChosenTags] = useState(new Set());

  useEffect(() => {
    getAllCategories().then((CategoriesData) => setCategories(CategoriesData));
  }, []);
  useEffect(() => {
    getAllTags().then((TagsData) => setTags(TagsData));
  }, []);

  const TagPost = (parsedResponse) => {
    chosenTags.forEach((tag) => {
      const TagToAPI = {
        post_id: parsedResponse.id,
        tag_id: tag,
      };
      fetch(`http://localhost:8000/posttags`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(TagToAPI),
      }).then((response) => response.json());
    });
  };

  const changePostState = (domEvent) => {
    const copy = { ...post };
    copy[domEvent.target.id] = domEvent.target.value;
    setPost(copy);
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
              required
              autoFocus
              placeholder="Text input"
              value={post.title}
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
              required
              autoFocus
              placeholder="Text input"
              value={post.image_url}
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
              required
              autoFocus
              placeholder="Textarea"
              value={post.content}
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
                required
                autoFocus
                value={post.category}
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
              {tags.map((tag) => {
                return (
                  <>
                    <label htmlFor="addTags" className="tagLabel">
                      {tag.label}
                    </label>
                    <input
                      type="checkbox"
                      className="addTags"
                      value={false}
                      onChange={(evt) => {
                        const copy = new Set(chosenTags);
                        if (copy.has(tag.id)) {
                          copy.delete(tag.id);
                        } else {
                          copy.add(tag.id);
                        }
                        setChosenTags(copy);
                      }}
                    />
                  </>
                );
              })}
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                const newPost = {
                  user_id: userId,
                  category_id: parseInt(post.category),
                  title: post.title,
                  publication_date: "",
                  image_url: post.image_url,
                  content: post.content,
                  approved: 1
                };
                addPost(newPost).then(parsedResponse => {TagPost(parsedResponse)}).then(() => navigate("/myposts"));
              }}
              className="btn btn-primary"
            >
              Create
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};
