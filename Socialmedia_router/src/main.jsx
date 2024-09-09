import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import App from './route/App.jsx'
import CreatePost from './components/Createpost.jsx';
import PostList , {postLoader}  from "./components/PostList.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App/>,
     children: [
      {path: "/", element: <PostList/>, loader: postLoader},
    {path: "/create-post", element: <CreatePost/>},
  ],
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
