//import Sidebar from './components/Sidebar';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import  { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
//import CreatrPost from "../components/Createpost";
import PostListProvider from "../store/post-list-store";
//import { useState } from "react";
//import PostList from "../components/PostList";

function App() {

  //const [selectedTab, setSelectedTab] = useState("Home")
  return (
    <PostListProvider>
  <div className="app-container">
  <Sidebar/>
  <div className="content">
  <Header/>

  <Outlet></Outlet>
  
  <Footer/>
  </div>
  
  </div>
  </PostListProvider>
  );
};

export default App;
