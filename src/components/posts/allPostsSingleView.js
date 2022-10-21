


// This component is responsible for rendering the individual view for each post. Props are passed from the AllPosts component using object deconstruction.
export const AllPostsSingleView = ({title, publicationDate, authorFirstName, authorLastName, category, tag}) => {

return <>
<div className="level">
    <div className="">{title}</div>
    <div className="">{authorFirstName} {authorLastName}</div>
    <div className="">{publicationDate}</div>
    <span class="tag is-link is-light">{category}</span>
    <span class="tag is-dark" >{tag}</span>
</div>
</>


}