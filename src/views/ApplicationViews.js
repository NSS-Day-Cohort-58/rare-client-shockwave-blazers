import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { TagList } from "../components/tag/TagList"
import { AllPostsContainer } from "../components/posts/allPostsContainer"
import { Authorized } from "./Authorized"
import { ViewCurrentUserPost } from "../components/posts/ViewCurrentUserPost"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
        <Route path="/tags">
				<Route index element={<TagList />} />
			</Route>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
      <Route path="allposts" element={<AllPostsContainer />} />
      <Route path="/myposts" element={<ViewCurrentUserPost token={token} />} />
    </Routes>
  </>
}
