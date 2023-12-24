import Home from "./home";
import Footer from "./footer";
import Products from "./products";
import Courses from "./courses";
import Blogs from "./blogs";
import Contacts from "./contacts";
import AboutUs from "./aboutus";

const Body = ({ prop }) => {
  return (
    <>
      <div className="px-5 w-full h-full">
        <div className="bg-glass-theme p-2 rounded-md shadow-glass-shadow backdrop-blur-sm border border-glass-border border-solid text-white">
          {prop === "home" && <Home />}
          {prop === "products" && <Products />}
          {prop === "courses" && <Courses />}
          {prop === "blogs" && <Blogs />}
          {prop === "contacts" && <Contacts />}
          {prop === "aboutus" && <AboutUs />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Body;
