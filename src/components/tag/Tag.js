import "./Tags.css"
import { Link } from "react-router-dom"

export const Tag = ({ tag }) => (
    <section className="tag">
        <div className="tag__label">
            <Link to={`/tags/${tag.id}`}>
                { tag.label }
            </Link>
        </div>
        
    </section>
)