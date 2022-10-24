import "./Category.css"
import { Link } from "react-router-dom"

export const Category = ({ category }) => (
    <section className="block">
        <div className="tag is-large">
            <Link to={`/categories/${category.id}`}>
                { category.label }
            </Link>
        </div>
        
    </section>
)