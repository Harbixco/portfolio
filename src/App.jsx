import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header
        firstColor={{ backgroundColor: "#081b29" }}
        SecondColor={{ backgroundColor: "white" }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              emoji="&#129321;"
              blackColor={{ backgroundColor: "#1a2232" }}
              LightBlue={{ color: "#368ae1" }}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/Education"
          element={
            <Education
              LightBlue={{ color: "#368ae1" }}
              blackColor={{ backgroundColor: "#151b28" }}
            />
          }
        />
        <Route
          path="/Skills"
          element={
            <Skills
              blackColor={{ backgroundColor: "#151b28" }}
              LightBlue={{ backgroundColor: "#1a2232" }}
            />
          }
        />
        <Route
          path="/Contact"
          element={<Contact LightBlue={{ color: "#368ae1" }} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
