import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import "./Projects.css";
import books from "../../assets/img/books.jpg";
import final from "../../assets/img/final.jpg";
import furniture from "../../assets/img/furniture.jpg";
import Rentup from "../../assets/img/Rentup.jpg";
import travel from "../../assets/img/travel.jpg";
import uni from "../../assets/img/uni.jpg";
import { Link } from "react-router-dom";
const Projects = () => {
  let projects = [
    { id: 1, Name: books, link: "https://nouralhoudakattan.github.io/books/" },
    {
      id: 2,
      Name: final,
      link: "https://nouralhoudakattan.github.io/FINAL-L1/",
    },
    {
      id: 3,
      Name: furniture,
      link: "https://nouralhoudakattan.github.io/task-5/",
    },
    {
      id: 4,
      Name: Rentup,
      link: "https://nouralhoudakattan.github.io/task-4/",
    },
    {
      id: 5,
      Name: travel,
      link: "https://nouralhoudakattan.github.io/travel/",
    },
    {
      id: 6,
      Name: uni,
      link: "https://nouralhoudakattan.github.io/part-university/",
    },
  ];
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="projects"
      id="Projects"
      style={{ backgroundColor: theme.backgroundImage }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>Projects</h1>

      <div className="card-pro">
        {projects.map((e) => {
          return (
            <div className="card-pro-child  ">
              <img src={e.Name} alt="" />
              <div className="button-card">
                <div>
                  <Link to={`/Show/${e.id}`}>
                    {" "}
                    <button id="btn-card">show detiles</button>{" "}
                  </Link>
                  <Link to={e.link}>
                    {" "}
                    <button>Demo</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
