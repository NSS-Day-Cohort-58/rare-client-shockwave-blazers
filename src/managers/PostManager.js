
export const getAllPosts = () => {
return fetch("http://localhost:8088/posts")
    .then(res => res.json())
}

export const getPostById = (id) => {
return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
}

export const addPost = post => {
return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
})
}

export const updatePost = post => {
return fetch(`http://localhost:8088/posts/${post.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
})
}

export const deletePost = (postId) => {
return fetch(`http://localhost:8088/posts/${postId}`, {
    method: "DELETE"
})
}