import "./ShowDetails.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import { Link, useParams } from "react-router-dom";
import BOOKIMG from "../../assets/img/BOOKIMG.png";
import ORIMG from "../../assets/img/ORGIMG.png";
import FURIMG from "../../assets/img/FURNEW.png";
import RNIMG from "../../assets/img/RENEW.png";
import TRVELIMG from "../../assets/img/TRVELIMG.png";
import UNIIMG from "../../assets/img/UNIIMG.png";
import back from "../../assets/img/back.svg";

const ShowDetails = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  const { id } = useParams();
  let projects = [
    {
      id: 1,
      Name: "Books",
      link: "https://nouralhoudakattan.github.io/books/",
      img: BOOKIMG,
      text: "React,Api",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
    {
      id: 2,
      Name: "  Organic",
      link: "https://nouralhoudakattan.github.io/FINAL-L1/",
      img: ORIMG,
      text: "html,Css",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
    {
      id: 3,
      Name: "Furniture",
      link: "https://nouralhoudakattan.github.io/task-5/",
      img: FURIMG,
      text: "Html,Css",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
    {
      id: 4,
      Name: "Runbot",
      link: "https://nouralhoudakattan.github.io/task-4/",
      img: RNIMG,
      text: "Html,Css",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
    {
      id: 5,
      Name: "Travel",
      link: "https://nouralhoudakattan.github.io/travel/",
      img: TRVELIMG,
      text: "react",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
    {
      id: 6,
      Name: "university",
      link: "https://nouralhoudakattan.github.io/travel/",
      img: UNIIMG,
      text: "react",
      dit: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.",
    },
  ];

  const pro = projects.find((e) => e.id === parseInt(id));

  return (
    <div>
      <Link to="/">
        {" "}
        <img src={back} alt="" className="btn-back" />
      </Link>
      <div
        className="pshow"
        style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
      >
        <div className="item-img-det">
          {
            <img
              src={pro.img}
              alt=""
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          }
        </div>
        <div
          className="item-text-det"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3>Name:</h3>
          <p>{pro.Name}</p>
          <h3>Details:</h3>
          <p className="description">{pro.dit}</p>
          <h3>Languages and Techniqes</h3>
          <p className="description">{pro.text}</p>
          <h3>Github</h3>
          <Link to={pro.link}>{pro.link}</Link>
        </div>
      </div>
    </div>
  );
};
export default ShowDetails;
