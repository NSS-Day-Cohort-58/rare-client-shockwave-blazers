import { useRef } from "react"
import { useNavigate } from 'react-router-dom'
import { addCategory } from "../../managers/CategoryManager"
import "./Category.css"

export const CategoryForm = () => {
    const label = useRef(null)

    const navigate = useNavigate()

    const constructNewCategory = () => {


        addCategory({
            label: label.current.value,
        })
            .then(() => { navigate("/categories") })
    }

    return (

        <form className="categoryForm">
            <h1 className="title is-3">Create a new category</h1>
            
                <div className="field">
                    <label class="label is-medium" htmlFor="categoryLabel">Category label: </label>
                    <div class="control">
                        <input class="input is-medium" type="text" id="categoryLabel" ref={label} required autoFocus placeholder="Category name" />
                    </div>
                </div>
            
            <div class="control">
                <button class="button" type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        constructNewCategory()
                    }}
                >Save Category
                </button>
            </div>
        </form>
    )
}