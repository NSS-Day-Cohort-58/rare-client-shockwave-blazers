import { useRef } from "react"
// import { useNavigate } from 'react-router-dom'
import { addTag } from "../../managers/TagManager"
import "./Tags.css"

export const TagForm = ({ getTags }) => {
  const label = useRef(null)

  // const navigate = useNavigate()
  

  const constructNewTag = () => {


    addTag({
      label: label.current.value,
    })
      .then(getTags)
  }

  return (

    <form className="tagForm">
      <h1 class="title is-3">Create a new tag</h1>
      
        <div className="field">
          <label class="label is-medium" htmlFor="tagLabel">Tag label: </label>
          <div className="control">
            <input class="input is-medium" type="text" id="tagLabel" ref={label} required autoFocus placeholder="Tag name" />
          </div>
        </div>
        
      
      <div className="control">
      <button className="button" type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewTag()
        }}
        >
        Save Tag
      </button>
      </div>
    </form>
  )
}