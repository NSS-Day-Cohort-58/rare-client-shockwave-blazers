export const getAllCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
    }

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8088/categories/${id}`)
        .then(res => res.json())
    }

export const addCategory = category => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
    }