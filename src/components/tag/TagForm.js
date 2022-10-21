import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { addTag } from "../../managers/TagManager"
import "./Tags.css"

export const TagForm = () => {
  const label = useRef(null)

  const navigate = useNavigate()

  const constructNewTag = () => {

    
    addTag({
        label: label.current.value,
        })
        .then(() => {navigate("/tags")})
    }

  return (
    <form className="tagForm">
      <h2 className="tagForm__title">Create a new tag</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tagLabel">Tag label: </label>
          <input type="text" id="tagLabel" ref={label} required autoFocus className="form-control" placeholder="Tag name" />
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewTag()
        }}
        className="btn btn-primary">
        Save Tag
      </button>
    </form>
  )
}