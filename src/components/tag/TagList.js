import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getTagById, getAllTags } from "../../managers/TagManager"
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
            <h1 class="title is-3">Tags</h1>
            <section className="section">
              <article className="tagList">
                {
                  tags.map(tag => {
                    return <Tag tag={tag} />
                  })
                }
              </article>
            </section>
            </div>
            <div className="column is-two-fifths">
              <div class="box"> <>
                {TagForm()}
              </>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  )
}