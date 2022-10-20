import { useState, useEffect } from "react"
import { AllPostsSingleView } from "./allPostsSingleView";


export const AllPosts = () => {

    const[allPosts, setAllPosts] = useState([])

    useEffect(() => {
    fetch(`http://localhost:8088/posts`)
      .then((res) => res.json())
      .then((allPostsArray) => {
        setAllPosts(allPostsArray);
      });
  }, []);






return <>
<main>
    <div className="searchandcreatepostcontainer">

    </div>
    <section className="authorcontainer">
        {allPosts.map((post) => (
            <AllPostsSingleView
            key={`post--${post.id}`}
            title={post.title}
            publicationDate={post.publication_date}
            author={post.user.first_name}
            category={post.category.label}
            tag={post.category.tag}
            />
        )
            )}
    </section>
</main>



</>




}