import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Blog from "./contentWeb/blog";
import Home from "./contentWeb/home";
import Contact from "./contentWeb/contact"
import Profile from "./contentWeb/profile";
import BlogDetails from "./contentWeb/blogDetails";
import UnknownPath from "./contentWeb/unknownPath";

function App() {
  return (
    
    <nav id="link-path">
      <ul>
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/contact"}>contact</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/profile"}>Profile</Link></li>
      </ul>
    
    
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="profile" element={<Profile/>} />
        
        <Route path="blog" element={<Blog/>} />
        <Route path="/blog/:details" element={<BlogDetails/>} />
        <Route path="*" element={<UnknownPath/>}></Route>
      </Routes>
    </nav>

    
  );
}

export default App;
