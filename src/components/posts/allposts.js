import { useState, useEffect } from "react"
import { AllPostsSingleView } from "./allPostsSingleView";
import { getAllPosts } from "../../managers/PostManager";
import { Link } from "react-router-dom";


// This component is responsible for rendering all posts. The user will have the ability to navigate to create a new post, as well as search posts by title.
export const AllPosts = ({searchTermState}) => {

    const[allPosts, setAllPosts] = useState([])
    const[filteredPosts, setSearched] = useState([])

    // This useEffect hook fetches the full array of posts.
    useEffect(() => {
    getAllPosts()
      .then((allPostsArray) => {
        setAllPosts(allPostsArray);
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

// This function will render all posts or filteredPosts depending on the current search term state.
  const displayFilteredPosts = () => {

    return (
      <>
        {searchTermState === "" ? (
          <section className="box allpostscontainer">
            {allPosts.map((post) => (
            <AllPostsSingleView
            key={`post--${post.id}`}
            title={post.title}
            publicationDate={post.publication_date}
            authorFirstName={post.user.first_name}
            authorLastName={post.user.last_name}
            category={post.category.label}
            tag={post.tag.label}
            id= {post.id}
              />
            ))}
          </section>
        ) : (
          <section className="box allpostscontainer"> 
            {filteredPosts.map((post) => (
            <AllPostsSingleView
            key={`post--${post.id}`}
            title={post.title}
            publicationDate={post.publication_date}
            authorFirstName={post.user.first_name}
            authorLastName={post.user.last_name}
            category={post.category.label}
            tag={post.tag.label}
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
    <Link className="title is-5 level-item"
        to={`/`}>
        Title
      </Link>
    <div className="title is-5 level-item">Author</div>
    <div className="title is-5 level-item">Date</div>
    <div className="title is-5 level-item">Category</div>
    <div className="title is-5 level-item">Tag</div>
</div>
    {displayFilteredPosts()}
</main>
</>
}