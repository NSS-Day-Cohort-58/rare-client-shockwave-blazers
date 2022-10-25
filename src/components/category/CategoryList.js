import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getCategoryById, getAllCategories} from "../../managers/CategoryManager"
import { Category } from "./Category"
import { CategoryForm } from "./CategoryForm"
import "./Category.css"


export const CategoryList = () => {

  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  
  useEffect(() => {
    getAllCategories().then(categoriesData => setCategories(categoriesData))
  }, [])
//Add the full list of Categories and import the form function
  return (
    <div style={{ margin: "0rem 3rem" }}>
    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column">
                <h1 className="title is-2">Categories</h1>
                <section className="section">
                <article className="categories" >
                        {
                        categories.map(category => {
                            return <Category category={category} />
                        })
                        }
                </article>
                </section>
                </div>
            
                <div className="column is-two-fifths">
                    <div className="box"> <>
                        {CategoryForm()}
                            </>
                    </div>
                </div>
            </div>
        </div>
    </section>

      
    </div>
  )
}