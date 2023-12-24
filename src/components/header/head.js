import "./head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from ".././media/name-symbol.png";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Head = ({ prop }) => {
  const expandedNav =
    "absolute top-16 left-0 w-full flex flex-col gap-6 items-center py-2 text-lg font-bold p-5 mt-3";
  const normalNav =
    "absolute -top-full left-0 flex flex-col gap-6 items-center py-2 text-lg font-bold";
  const extendedNav = " lg:static lg:flex-row lg:justify-between";
  const [bar, setBar] = useState(normalNav);
  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle-button");

    toggleBtn.addEventListener("click", () => {
      if (bar === normalNav) setBar(expandedNav);
      else setBar(normalNav);
    });
  });

  const linkProp = "cursor-pointer p-3 rounded";
  const hoverState = " hover:bg-stem-red";

  return (
    <>
      <header className="p-5">
        <nav className="bg-glass-theme rounded-md shadow-glass-shadow lg:backdrop-blur-md border border-glass-border border-solid text-white flex items-center justify-between px-12 h-16 lg:gap-8">
          <Link
            to="/"
            className="text-2xl font-bold px-2 py-1 whitespace-nowrap"
          >
            <img src={logo} alt="Stemsage" title="Stemsage" className="w-48" />
          </Link>
          <div className={bar + extendedNav}>
            <div className="max-lg:bg-glass-theme flex lg:flex-row flex-col w-full z-50 max-lg:backdrop-blur-lg">
              <ul className="flex flex-col items-center gap-2 lg:flex-row lg:pr-6">
                <Link to="/">
                  <li
                    className={
                      prop === "home"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    Home
                  </li>
                </Link>
                <Link to="/products">
                  <li
                    className={
                      prop === "products"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    Products
                  </li>
                </Link>
                <Link to="/courses">
                  <li
                    className={
                      prop === "courses"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    Courses
                  </li>
                </Link>
                <Link to="/blogs">
                  <li
                    className={
                      prop === "blogs"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    Blogs
                  </li>
                </Link>
                <Link to="/contacts">
                  <li
                    className={
                      prop === "contacts"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    Contacts
                  </li>
                </Link>
                <Link to="/aboutus">
                  <li
                    className={
                      prop === "aboutus"
                        ? linkProp + " bg-stem-red"
                        : linkProp + hoverState
                    }
                  >
                    About Us
                  </li>
                </Link>
              </ul>
              <div className="flex flex-col items-center gap-6 xl:flex-row">
                <button
                  data-tooltip-id="login-tooltip"
                  className="bg-green-600 rounded-lg px-2 py-1 hover:bg-green-700"
                >
                  Login
                </button>
                <button
                  data-tooltip-id="signup-tooltip"
                  className="bg-blue-600 rounded-lg px-2 py-1 hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="toggle-button lg:hidden">
            <FontAwesomeIcon size="2x" icon={faBars} />
          </div>
        </nav>
      </header>
      <ReactTooltip
        id="login-tooltip"
        place="bottom"
        content="Ruko Zara!!✋!! Sabar Karo.."
        style={{ zIndex: 99 }}
      />
      <ReactTooltip
        id="signup-tooltip"
        place="bottom"
        variant="info"
        content="SignUp Karna Tohda Kazual Hai!!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Head;
