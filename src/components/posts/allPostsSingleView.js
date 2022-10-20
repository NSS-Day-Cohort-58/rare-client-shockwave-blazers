

export const AllPostsSingleView = ({title, publicationDate, author, category, tag}) => {





return <>
<div className="individualPost">
    <div className="">{title}</div>
    <div className="">{publicationDate}</div>
    <div className="">{author}</div>
    <div className="">{category}</div>
    <div className="">{tag}</div>
</div>
</>


}