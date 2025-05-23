import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
  { id: "resume", title: "Resume", isDownload: true },
  { id: "hireme", title: "Hire Me" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-end items-center max-w-7xl mx-auto">
        {/* Logo can go here if needed */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === "hireme" ? (
                <a
                  href="mailto:adarshravindran417@gmail.com?subject=Hire Me&body=Hello Adarsh,"
                  className="text-white"
                >
                  {nav.title}
                </a>
              ) : nav.isDownload ? (
                <a
                  href="/Adarsh_Ravindran.pdf"
                  download
                  className="text-white"
                >
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  {nav.id === "hireme" ? (
                    <a
                      href="mailto:adarshravindran417@gmail.com?subject=Hire Me&body=Hello Adarsh,"
                      className="text-white"
                    >
                      {nav.title}
                    </a>
                  ) : nav.isDownload ? (
                    <a
                      href="/Adarsh_Ravindran_Resume.pdf"
                      download
                      className="text-white"
                    >
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
