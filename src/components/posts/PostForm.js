import { useState } from "react"



export const PostForm = () => {

    const [post, update] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 0

    })

    return <></>
}