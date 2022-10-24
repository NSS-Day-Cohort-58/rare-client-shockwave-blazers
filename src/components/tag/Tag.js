import "./Tags.css"
import { Link } from "react-router-dom"

export const Tag = ({ tag }) => (
    <section className="tags">
        <div className="tag is-large">
            <Link to={`/tags/${tag.id}`}>
                { tag.label }
            </Link>
        </div>
        
    </section>
)