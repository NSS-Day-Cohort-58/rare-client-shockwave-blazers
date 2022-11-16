import "./Category.css"
import { Link } from "react-router-dom"
import { deleteCategory } from "../../managers/CategoryManager"
import { CategoryEdit } from "./CategoryEdit"


export const Category = ({ category }) => (
    <section className="block">
        <div className="tag is-large">
            <Link to={`/categories/${category.id}/edit`}>
                { category.label }
            </Link>
            <button
                  className="btn btn-primary"
                  onClick={() => deleteCategory(category.id).then(window.location.reload(false))}
                >
                  Delete
            </button>
            
        </div>
        
    </section>
)