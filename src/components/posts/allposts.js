import { useState, useEffect } from "react"
import { AllPostsSingleView } from "./allPostsSingleView";
import { getAllPosts, getAllPostsByCategory, getAllPostsByTitleSearch } from "../../managers/PostManager";
import { getAllCategories } from "../../managers/CategoryManager";
import { Link } from "react-router-dom";


// This component is responsible for rendering all posts. The user will have the ability to navigate to create a new post, as well as search posts by title.
export const AllPosts = ({searchTermState}) => {

    const[allPosts, setAllPosts] = useState([])
    const[filteredPosts, setSearched] = useState([])
    const[searchedTitle, setSearchedTitle] = useState("")
    const[categories, setCategories] = useState([])
    const[currentCategory, setCurrentCategory] = useState({
      "id": 0,
      "label": ""
    })

    // This useEffect hook fetches the full array of posts.
    useEffect(() => {
    getAllPosts()
      .then((allPostsArray) => {
        setAllPosts(allPostsArray);
      });
  }, []);


    useEffect(() => {
    getAllCategories()
      .then((categoriesArray) => {
        setCategories(categoriesArray);
      });
  }, []);





// This useEffect hook will observe searchTermState, and update the filteredPosts state variable, whenever searchTermState changes.
useEffect(() => {
const searchedPosts = allPosts.filter((post) => {
      return post.title
        .toLowerCase()
        .includes(searchTermState.toLowerCase());
    });
    setSearched(searchedPosts);
  }, [searchTermState]);

// Send
  const sendTitleSearchRequestToApi = (value) => {
    getAllPostsByTitleSearch(value).then((filteredPostsArray) => {
        setAllPosts(filteredPostsArray);
      });

  }

  const renderSearchBar = () => {
    return <>
    <div>
    <input
    type="text"
    placeholder="Search posts by title"
    onChange={(changeEvent) => {
            let searchCopy = changeEvent.target.value
            setSearchedTitle(searchCopy);}}
    ></input>
    <button
    onClick={() => {
            sendTitleSearchRequestToApi(searchedTitle);}}
    >Submit</button>
    </div>
    </>
  }

  const renderCategoryDropDown = () => {

    return <>
    <select
                  className="regularformstyle"
                  value={currentCategory.id}
                  required
                  autoFocus
                  onChange={(evt) => {
                    const copy = parseInt(evt.target.value);
                    setCurrentCategory(copy);
                  }}
                  >
                    <option value="0">Category</option>
                  {categories.map((category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.label}
                      </option>
                    );
                  })}
                  </select>
                  <button
                  onClick={() => {
                  sendCategoryFilterRequestToApi(currentCategory);}}
                  >Filter</button>
                  </>
  }

  const sendCategoryFilterRequestToApi = (categoryId) => {
    getAllPostsByCategory(categoryId).then((filteredPostsArray) => {
        setAllPosts(filteredPostsArray);
      });
  }

// This function will render all posts or filteredPosts depending on the current search term state.
  const displayFilteredPosts = () => {

    return (
      <>
        {searchTermState === "" ? (
          <section className="box">
            {allPosts.map((post) => (
            <AllPostsSingleView
            key={`post--${post.id}`}
            title={post.title}
            publicationDate={post.publication_date}
            authorFirstName={post.user.first_name}
            authorLastName={post.user.last_name}
            category={post.category.label}
            fullname={post.user.full_name}
            id= {post.id}
              />
            ))}
          </section>
        ) : (
          <section className="box">
            {filteredPosts.map((post) => (
            <AllPostsSingleView
            key={`post--${post.id}`}
            title={post.title}
            publicationDate={post.publication_date}
            authorFirstName={post.user.first_name}
            authorLastName={post.user.last_name}
            category={post.category.label}
            id= {post.id}
            />
            ))}
          </section>
        )}
      </>
    );

  }

return <>
<main className="container is-primary">
  <div className="level">
  {renderSearchBar()}
  {renderCategoryDropDown()}
  </div>
  <div className="level">
    <div className="title is-5 level-item">Title</div>
    <div className="title is-5 level-item">Author</div>
    <div className="title is-5 level-item">Date</div>
    <div className="title is-5 level-item">Category</div>
</div>
    {displayFilteredPosts()}
</main>
</>
}