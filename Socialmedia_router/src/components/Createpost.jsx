import { useContext, useRef } from "react";
import { PostList as PostDat } from "../store/post-list-store";
import  {useNavigate} from "react-router-dom";
const CreatePost = () => {
  const { addPost } = useContext(PostDat);
  const nevigate = useNavigate();

  const userIdElement = useRef();
  const titleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = "";
    titleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body:  postBody,
        reactions: reactions,
        userId:userId,
        tags: tags,
        })
    })
    .then(res => res.json())
  
    .then((post) => {
      console.log("got");
      addPost(post);
      nevigate("/");
    })

    
  };

  return (
    <form className="createpost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="postBody"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags separated by space"
        />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;























/*import { useContext, useRef } from "react";
import {PostList as PostDat} from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostDat);

const  userIdElement = useRef();
const titleElement = useRef();
const postBodyElement = useRef(); 
const  reactionsElement = useRef();
const tagsElement = useRef();


const handelSubmit = (event) => {
  event.preventDefault();
const userId = userIdElement.target.value;
const title = titleElement.target.value;
const postBody = postBodyElement.target.value;
const reactions = reactionsElement.target.value;
const tags = tagsElement.target.value.split(' ');
 
userIdElement.target.value = "";
titleElement.target.value = "";
postBodyElement.target.value = "";
reactionsElement.target.value = "";
tagsElement.target.value = "";

addPost(userId, title, postBody, reactions, tags);



}

  return (
    <form className="createpost" onSubmit={handelSubmit}>

<div className="mb-3">
        <label htmlFor="userId"
         className="form-label">
          Enter your Userid here
          </label>
        <input 
        type="text" 
        ref={userIdElement}
        className="form-control"
         id="UserId"
         placeholder="Your User Id"
          />
      </div>

      <div className="mb-3">
        <label htmlFor="title"
         className="form-label">
          Post-Title
          </label>
        <input 
        type="text" 
        ref={titleElement}
        className="form-control"
         id="title"
         placeholder="How are you feeling today...."
          />
      </div>


      <div className="mb-3">
        <label htmlFor="Post body"
         className="form-label">
          Post-Content
          </label>
        <textarea 
        type="text"
        ref={ postBodyElement}
         rows="4" 
        className="form-control"
         id="title"
         placeholder="Tell us more about it"
          />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions"
         className="form-label">
          No. of reactions
          </label>
        <input 
        type="text" 
        ref={reactionsElement}
        className="form-control"
         id="reactions"
         placeholder="How many people reacted on this post"
          />
      </div>

      <div className="mb-3">
        <label htmlFor="tags"
         className="form-label">
         Enter your hashtags here
          </label>
        <input 
        type="text" 
        ref={tagsElement}
        className="form-control"
         id="tags"
         placeholder="Please enter tags using space"
          />
      </div>

      
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;*/
