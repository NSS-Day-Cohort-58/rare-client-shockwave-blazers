import { useState } from "react"
import { SearchAllPosts } from "./allPostsSearch";
import { AllPosts } from "./allposts";


// This component contains the sibling components: SearchAllPosts and AllPosts. This parent container allows the sibling components to share state.
export const AllPostsContainer = () => {
const[searchTerms, setPostSearchTerms] = useState("")

return (
    <>
    <div className="level">
    <h1 className="title is-1 level-item">All Posts</h1>
    </div>
    <section className="block">
    <SearchAllPosts setterFunction={setPostSearchTerms} />
    </section>
    <AllPosts searchTermState={searchTerms} />
    </>
  );

}