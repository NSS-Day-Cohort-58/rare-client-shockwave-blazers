// This component controls the functionality for the "Search Posts by Title" search bar.
export const SearchAllPosts = ({setterFunction}) => {
return <>
<div className="level">
    <div class="level-item">
    <input
        className="input is-primary"
        onChange={(changeEvent) => {
            setterFunction(changeEvent.target.value);}}
        type="text"
        placeholder="Search posts by title"
        />
    </div>
    <div class="level-item">
<button className="button is-primary">Create Post</button>
    </div>
</div>
</>
}