/*import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card card-post" style={{ inlineSize: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: 'pointer' }} // added style for pointer cursor
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtags">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;*/
































/*import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({post}) => {

   const {deletePost}= useContext(PostList);


    return(
<div className="card card-post" style={{inlineSize: "30rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() => deletePost(post.id)}>
    
    <MdDelete />
  </span>
  </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map ((tag, index) => (
      <span key={index} class="badge text-bg-primary hastags">{tag}</span>
    ))}
    <div class="alert alert-success reactions" role="alert">
  
  This post is reacted by {post.reactions.likes} people and disliked by{post.reactions.dislike} people.
</div>
    
  </div>
</div>
    );
};


export default Post;*/
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card card-post" style={{ inlineSize: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hastags">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted to by {post.reactions.like} and got {post.reactions.dislike} people.  people.
        </div>
      </div>
    </div>
  );
};

export default Post;
