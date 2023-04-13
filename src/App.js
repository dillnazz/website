import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Comments from "./pages/Comments/Comments.jsx";
import Course from "./pages/Course/Course.jsx";
import Home from "./pages/Home/Home.jsx";
import Teachers from "./pages/Teachers/Teachers.jsx";
import './index.css'
import Layout from "./components/Layout/Layout.jsx";


const App = () => {
  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="comments" element={<Comments />} />
          <Route path="course" element={<Course />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
