import "./Tags.css"
import { Link } from "react-router-dom"
import { deleteTag, getAllTags } from "../../managers/TagManager"

export const Tag = ({ tag }) => (
    <section className="tags">
        <div className="tag is-large">
            <Link to={`/tags/${tag.id}/edit`}>
                { tag.label }
            </Link>
            <button
                  className="btn btn-primary"
                  onClick={() => deleteTag(tag.id).then(getAllTags)}
                >
                  Delete
            </button>
        </div>
        
        
    </section>
)