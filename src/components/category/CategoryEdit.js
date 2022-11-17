import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById, editCategory } from "../../managers/CategoryManager";



export const CategoryEdit = () => {
    const {categoryId} = useParams()
    const navigate = useNavigate()
    const [category, updateTheCategory] = useState({
        id: (0),
        label: "",
    })

    useEffect(() => {
        getCategoryById(categoryId)
          .then((singleCategory) => {
            updateTheCategory(singleCategory);
          });
      }, []);



      return (

        <form className="categoryForm">
            <h1 className="title is-3">Edit this category</h1>
            
                <div className="field">
                    <label class="label is-medium" htmlFor="categoryLabel">Category label: </label>
                    <div class="control">
                        <input class="input is-medium" type="text" id="categoryLabel" value={category.label} required autoFocus placeholder="Category name" 
                        onChange={(evt)=>{
                            const copy = { ...category };
                            copy.label = evt.target.value;
                            updateTheCategory(copy)
                        }}  />
                    </div>
                </div>
            
            <div class="control">
                <button class="button" type="submit"
                    onClick={evt => {
                        evt.preventDefault()                       
                        editCategory(category)
                        .then(navigate("/categories"))

                    }}
                >Save Category
                </button>
            </div>
        </form>
    )
}