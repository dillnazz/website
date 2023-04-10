import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Comments from "./pages/Comments";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";

import './index.css'


const App = () => {
  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
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
