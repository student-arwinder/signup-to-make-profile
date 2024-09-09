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

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import Loadingspinner from "./Loadingspinner";

const PostList = () => {
  const { postList, addInitialPosts} = useContext(PostListData);
  
  const [fetching, setFetching] = useState(false);


   useEffect(() => {
    
   const fetchData = async () => {
    setFetching(true);
    //console.log("fetch started");
     
    try{
      const res = await fetch('https://dummyjson.com/posts');
      const data = await res.json();
      addInitialPosts(data.posts);
      setFetching(false);
      //console.log("data fetched");
    }
    catch (error) {
      //console.log("error occured", error);
    }
   };
   fetchData();
//console.log("data fetching end");

return () => {
  clearInterval(fetchData);
  console.log("Cleaning up Useeffect");
};

    
}, []);

  return (
    <>
    {fetching && <Loadingspinner/>} 

      {!fetching && postList.length === 0 && <Welcomemessage />}

      {!fetching && postList.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};

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
    
