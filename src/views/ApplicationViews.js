import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { SubscribedPosts } from "../components/posts/SubscribedPosts"
import { TagList } from "../components/tag/TagList"
import { AllPostsContainer } from "../components/posts/allPostsContainer"
import { Authorized } from "./Authorized"
import { ViewCurrentUserPost } from "../components/posts/CurrentUserPosts"
import { PostForm } from "../components/posts/PostForm"
import { PostDetails } from "../components/posts/postDetails"
import { CategoryList } from "../components/category/CategoryList"
import { ViewUserDetails } from "../components/posts/viewUserDetails"
import { UpdatePostForm } from "../components/posts/PostEdit"
import { CategoryEdit } from "../components/category/CategoryEdit"
import { TagEdit } from "../components/tag/TagEdit"
import { PostComments } from "../components/posts/postComments"
import { MakeComment } from "../components/posts/makeComment"
import { EditComment } from "../components/posts/editComment"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/tags" element={<TagList />} />
      <Route path="/categories/:categoryId/edit" element={<CategoryEdit />} />
      <Route path="/tags/:TagId/edit" element={<TagEdit />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/postform" element={<PostForm token={token} />} />
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />} />
      <Route path="/" element={< SubscribedPosts token={token}/>}/>
      <Route path="/allposts" element={<AllPostsContainer />} />
      <Route path="/myposts" element={<ViewCurrentUserPost token={token} />} />
      <Route path="/posts/:postId" element={<PostDetails />} />
      <Route path="/posts/:postId/comments" element={<PostComments token={token}/>} />
      <Route path="/posts/:postId/newComment" element={<MakeComment token={token}/>} />
      <Route path="/comment/:commentId/editcomment" element={<EditComment token={token} comment={comment}/>} />
      <Route path="/userprofile/:postUserId" element={<ViewUserDetails/>} />
      <Route path="/posts/:postId/edit" element={<UpdatePostForm token={token} />} />

    </Routes>
  </>
}