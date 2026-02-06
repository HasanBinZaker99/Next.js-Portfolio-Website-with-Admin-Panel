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
                offset={-80}
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
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden col-start-9 col-end-10 flex justify-end items-center"
            aria-label="Toggle menu"
          >
            <div className="p-2 rounded-md hover:bg-gray-100">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
          <div className="col-start-10 col-end-12 flex justify-end hidden lg:flex">
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
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 sm:px-8">
            <ul className="py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.id} className="w-full">
                  {!item.children ? (
                    <LinkScroll
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={800}
                      offset={-80}
                      onClick={() => {
                        setActiveLink(item.id);
                        setMobileOpen(false);
                      }}
                      className={`block w-full rounded-lg px-4 py-3 font-bold transition ${
                        activeLink === item.id
                          ? "text-green-600 bg-green-50"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </LinkScroll>
                  ) : (
                    <>
                      <div className="block w-full rounded-lg px-4 py-3 font-bold text-black bg-gray-50">
                        {item.label}
                      </div>

                      <ul className="mt-2 ml-3 border-l border-gray-200 pl-3 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <LinkScroll
                              to={child.id}
                              smooth={true}
                              duration={800}
                              offset={-80}
                              onClick={() => {
                                setActiveLink(child.id);
                                setMobileOpen(false);
                              }}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-black hover:bg-green-50 hover:text-green-700 transition"
                            >
                              <IoIosArrowDroprightCircle className="text-sm text-gray-400" />
                              {child.label}
                            </LinkScroll>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
