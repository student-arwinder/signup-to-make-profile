/*import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";

const PostList = () => {

   const {postList, addInitialPosts} = useContext(PostListData);

   const handelGetPostClick = () => {
    // Could be GET or POST/PUT/PATCH/DELETE
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data) => {
    addInitialPosts(data.posts);
});
   };

    return(

        <>
        {postList.length === 0 && <Welcomemessage onGetPostsClick={handelGetPostClick}/>}

       {postList.map((item) => (
        <Post
         key={item.id} 
         post={item}/>
        ))}
       
        </>
    );

};

export default PostList;*/
//import { useContext} from "react";
import Post from "./Post";
import {useLoaderData} from "react-router-dom";
import Welcomemessage from "./Welcomemessage";


const PostList = () => {
  
  
  const postList = useLoaderData();

  return (
    <>
    
    {postList.length === 0 && <Welcomemessage />}

      {postList.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};


export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((data) => {
    return data.posts
  });
}


 

export default PostList;








/*import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostClick = async () => {
    try {
      const res = await fetch('https://dummyjson.com/posts');
      const data = await res.json();
      addInitialPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      {postList.length === 0 && <Welcomemessage onGetPostsClick={handleGetPostClick} />}

      {postList.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};

export default PostList;*/



/*fetch('https://dummyjson.com/posts')
 .then((res) => res.json())
 .then((data) => {
  addInitialPosts(data.posts);
});*/

      
      
  //const handleGetPostClick = async () => {};
    /*try{
const res = await fetch('https://dummyjson.com/posts');
const data = await res.json();
addInitialPosts(data.posts);
    }
catch (error) {
console.log("error occured on fetching (error)");
}*/
    
