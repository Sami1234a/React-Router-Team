import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Layout from "../layout/Layout";
import Blog from "../pages/Blog/Blog";
import BlogSingle from "../pages/Blogsingle/BlogSingle";


const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },

            {
                path:"/about",
                element:<About/>
            },

            {
                path:"/team",
                element:<Team/>
            },

            {
                path:"/blog",
                element:<Blog/>
            },

            {
                path:"/blog/:postId",
                element:<BlogSingle/>
            }

        ]
    }
])

export default router