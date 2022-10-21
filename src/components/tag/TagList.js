import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getTagById, getAllTags} from "../../managers/TagManager"
import { Tag } from "./Tag"
import { TagForm } from "./TagForm"
import "./Tags.css"


export const TagList = () => {

  const [tags, setTags] = useState([])
  const navigate = useNavigate()

  
  useEffect(() => {
    getAllTags().then(tagsData => setTags(tagsData))
  }, [])
//Add the full list of tags and import the form function
  return (
    <div style={{ margin: "0rem 3rem" }}>
    <h1>Tags</h1>
        <article className="tags">
                {
                tags.map(tag => {
                    return <Tag tag={tag} />
                })
                }
        </article>
    <div> <>
        {TagForm()}
            </>
    </div>

      
    </div>
  )
}