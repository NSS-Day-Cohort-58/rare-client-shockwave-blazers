import { useNavigate } from "react-router-dom";
// This component controls the functionality for the "Search Posts by Title" search bar.


export const SearchAllPosts = ({setterFunction}) => {
const navigate = useNavigate()
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
    <button
    onClick={(clickEvent) => {
            setterFunction(clickEvent.target.value);}} > Search Posts By Title</button>
    <div class="level-item">
<button className="button is-primary" onClick={() => {
    navigate('/postform')
}}>Create Post</button>
    </div>
</div>
</>
}