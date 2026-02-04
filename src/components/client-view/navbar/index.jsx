"use client";
import Image from "next/image";
import { useState, useEffect, Children } from "react";
import logo from "../../../assets/logo.png";
import { Link as LinkScroll, scroller } from "react-scroll";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
    children: [
      { id: "certificate", label: "Certificate" },
      { id: "problem-solving", label: "Problem Solving (LeetCode)" },
    ],
  },
  {
    id: "project",
    label: "Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];
function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <div key={item.id} className="relative inline-block group pb-2">
      <LinkScroll
        activeClass="active"
        key={item.id}
        to={item.id}
        spy={true}
        smooth={true}
        duration={1000}
        onSetActive={() => setActiveLink(item.id)}
        className={`px-4 py-2 mx-2 cursor-pointer  inline-block relative ${
          activeLink === item.id
            ? "text-green-500 font-bold underline decoration-green-500 underline-offset-6 animation-active "
            : " text-[#000] font-bold hover:underline hover:decoration-green-500   hover:text-green-500 hover:underline-offset-6"
        }`}
      >
        {item.label}
      </LinkScroll>

      {item.children && (
        <ul
          className="absolute top-full group-hover:block  bg-[oklch(96.8%_0.007_246.508)] shadow-lg rounded-md w-max min-w-max border border-gray-100     opacity-0 translate-y-2 scale-95
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:scale-100
    transition-all duration-300 ease-out"
        >
          {item.children.map((child) => (
            <li key={child.id}>
              <LinkScroll
                to={child.id}
                smooth={true}
                duration={800}
                className="whitespace-nowrap px-4 py-2 inline-flex items-center text-black font-semibold hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all duration-200 hover:translate-x-1"
                onClick={() => setActiveLink(child.id)}
              >
                <IoIosArrowDroprightCircle className="mr-1 text-gray-400 text-sm transition-colors duration-200 group-hover:text-green-600 shrink-0" />
                {child.label}
              </LinkScroll>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex items-center">
              <div className="flex flex-col leading-tight">
                <span
                  className={` text-[18px] font-semibold text-gray-900 ${
                    pulse ? "animate-pulse" : ""
                  }`}
                >
                  Hasan <span className="text-green-500">Zaker</span>
                </span>
                <span className="text-[12px] text-black font-bold ">
                  Full-Stack Engineer
                </span>
              </div>
            </div>
          </div>
          <ul className="hidden  lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 flex justify-end">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-2 px-5 border-2 border-green-600 text-green-600 font-semibold rounded-full text-xl hover:bg-gray-400 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              {" "}
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
