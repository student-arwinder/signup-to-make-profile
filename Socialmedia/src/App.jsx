//import Sidebar from './components/Sidebar';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatrPost from "./components/Createpost";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";
import PostList from "./components/PostList";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")
  return (
    <PostListProvider>
  <div className="app-container">
  <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
  <div className="content">
  <Header/>

  {selectedTab === "Home" ? <PostList></PostList> : <CreatrPost></CreatrPost>}
  
  <Footer/>
  </div>
  
  </div>
  </PostListProvider>
  );
};

export default App;
