import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getTagById, editTag } from "../../managers/TagManager";



export const TagEdit = () => {
    const {TagId} = useParams()
    const navigate = useNavigate()
    const [tag, updateTheTag] = useState({
        id: (0),
        label: "",
    })

    useEffect(() => {
        getTagById(TagId)
          .then((singleTag) => {
            updateTheTag(singleTag);
          });
      }, []);



      return (

        <form className="TagForm">
            <h1 className="title is-3">Edit this Tag</h1>
            
                <div className="field">
                    <label class="label is-medium" htmlFor="TagLabel">Tag label: </label>
                    <div class="control">
                        <input class="input is-medium" type="text" id="TagLabel" value={tag.label} required autoFocus placeholder="Tag name" 
                        onChange={(evt)=>{
                            const copy = { ...tag };
                            copy.label = evt.target.value;
                            updateTheTag(copy)
                        }}  />
                    </div>
                </div>
            
            <div class="control">
                <button class="button" type="submit"
                    onClick={evt => {
                        evt.preventDefault()                       
                        editTag(tag)
                        .then(navigate("/tags"))

                    }}
                >Save Tag
                </button>
            </div>
        </form>
    )
}