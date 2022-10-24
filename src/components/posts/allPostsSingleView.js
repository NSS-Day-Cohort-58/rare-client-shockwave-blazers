import { Link, useParams } from "react-router-dom"



// This component is responsible for rendering the individual view for each post. Props are passed from the AllPosts component using object deconstruction.
export const AllPostsSingleView = ({title, publicationDate, authorFirstName, authorLastName, category, tag, id}) => {
    // const {post_id} = useParams()
return <>
<section>

<div className="level">
    <Link to={`/posts/${id}`} >{title}</Link>     
    <div className="">{authorFirstName} {authorLastName}</div>
    <div className="">{publicationDate}</div>
    <span className="tag is-link is-light">{category}</span>
    <span className="tag is-dark" >{tag}</span>
</div>

</section>
</>
}