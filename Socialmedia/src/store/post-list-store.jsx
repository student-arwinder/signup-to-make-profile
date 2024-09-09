import { createContext, useCallback, useMemo, useReducer } from "react";

 export const PostList = createContext({
postList: [],
addPost: () => {},
addInitialPosts: () => {},
deletePost: () => {},
});


const postListReducer = (currPostList, action) => {
   let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
 newPostList = currPostList.filter((item ) => 
    item.id !== action.payload.postid);
    }
    else if(action.type === "ADD_INITIAL_POST"){
        newPostList = action.payload.posts; 
    }
    else if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({children}) => {
const [postList, dispatchPostList] = useReducer(postListReducer, []);

const addPost = (userId, title, postBody, reactions, tags) => {
dispatchPostList({
    type: "ADD_POST",
    payload: {
    id: Date.now(),
    title: title,
    body:  postBody,
    reactions: reactions,
    userId:userId,
    tags: tags,
    },
});

};

const addInitialPosts = (posts) => {
    dispatchPostList({
        type: "ADD_INITIAL_POST",
        payload: {
            posts,
        },
    });
    
    };


const deletePost = useCallback ((postid) => {
    dispatchPostList({
        type: "DELETE_POST",
        payload: {
            postid,
        },
    });
},
 [dispatchPostList]
);


//const arr = [2, 4, 5, 6, 7];
//const sortedArr  = useMemo(() => arr.sort(), [arr]);

    return (<PostList.Provider value=
        {{
            postList: postList,
            addPost: addPost,
            addInitialPosts: addInitialPosts,
            deletePost: deletePost,
    }}
    >
        {children}
    </PostList.Provider>)

};


export default PostListProvider;































/*const DEFAULT_POST_LIST = [{
    id: "1",
    title: "Going to Play",
    body: "i am glad to share this thing that i am selected in indian team",
    reactions: "3k",
    userId: "user-1",
    tags: ['football', 'sports', 'fitness', 'enjoy']
},
{
    id: "2",
    title: "Going to college",
    body: " After long vacation of 2 momth i am going back to my college",
    reactions: "12",
    userId: "user-2",
    tags: ['college', 'study', 'student'],
},
];*/