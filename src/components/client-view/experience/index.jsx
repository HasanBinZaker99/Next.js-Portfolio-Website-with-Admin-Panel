"use client";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import Image from "next/image";
import { motion, time } from "framer-motion";
import website_designing from "../../../assets/course_certificate/website_designing.jpg";
import ajaxPhpMysql from "../../../assets/course_certificate/ajaxPhpMysql.jpg";
import laravel from "../../../assets/course_certificate/laravel.jpg";
import bitm from "../../../assets/course_certificate/bitm.jpg";
import ccna from "../../../assets/course_certificate/ccna.jpg";
import python_begineer from "../../../assets/course_certificate/python_begineer.png";
import DiligentSoftIt from "../../../assets/course_certificate/DiligentSoftIt.jpg";
import java_begineer from "../../../assets/course_certificate/java_begineer.jpg";
import java_intermediate from "../../../assets/course_certificate/java_intermediate.jpg";
import JavaScriptMarathon from "../../../assets/course_certificate/JavaScriptMarathon.jpg";
import python_intermediate from "../../../assets/course_certificate/python_intermediate.png";
import { useState, useEffect, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Element } from "react-scroll";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  const slides = [
    website_designing,
    ajaxPhpMysql,
    laravel,
    bitm,
    java_begineer,
    java_intermediate,
    JavaScriptMarathon,
    python_begineer,
    python_intermediate,
    ccna,
    DiligentSoftIt,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <motion.div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
                {"My Experience".split(" ").map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className={`${
                      index === 1 ? "text-green-500" : "text-black"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </motion.div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="w-full flex justify-center">
              <motion.div className=" mx-auto w-fit">
                <Timeline
                  position="right"
                  sx={{
                    m: 0,
                    p: 0,
                    width: "fit-content",
                    "& .MuiTimelineItem-root:before": {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot
                              sx={{
                                bgcolor: "oklch(72.3% 0.219 149.579)",
                              }}
                            />
                            <TimelineConnector
                              sx={{
                                bgcolor: "oklch(72.3% 0.219 149.579)",
                              }}
                            />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-green-500 mt-[14px] ml-[16px]">
                              <p className="font-extrabold ">
                                {experienceItem.position}
                              </p>
                              <p className="font-extrabold mt-2">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </p>
                              <p className="font-bold mt-2">
                                {experienceItem.duration}
                              </p>
                              <ul className="mt-2 space-y-1">
                                {experienceItem.jobprofile
                                  .split("|")
                                  .map((line, index) => (
                                    <li
                                      key={index}
                                      className="text-sm text-gray-700 flex gap-2"
                                    >
                                      <span className="text-green-900 font-bold">
                                        .
                                      </span>
                                      <span>{line.trim()}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>

        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-green-500" : "text-black"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="w-full flex justify-center">
              <motion.div className=" mx-auto w-fit">
                <Timeline
                  position="right"
                  sx={{
                    m: 0,
                    p: 0,
                    width: "fit-content",
                    "& .MuiTimelineItem-root:before": {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  {educationData && educationData.length
                    ? educationData.map((educationItem) => (
                        <TimelineItem
                          key={
                            educationItem._id ||
                            `${educationItem.college}-${educationItem.year}`
                          }
                        >
                          <TimelineSeparator>
                            <TimelineDot
                              sx={{
                                bgcolor: "oklch(72.3% 0.219 149.579)",
                              }}
                            />
                            <TimelineConnector
                              sx={{
                                bgcolor: "oklch(72.3% 0.219 149.579)",
                              }}
                            />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-green-500 mt-[14px] ml-[16px]">
                              <p className="font-bold">
                                Year: {educationItem.year}
                              </p>

                              <p className="font-extrabold mt-2">
                                College: {educationItem.college}
                              </p>
                              <p className="font-bold mt-2">
                                Degree: {educationItem.degree}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
      <Element name="certificate" id="certificate" className="scroll-mt-28">
        <AnimationWrapper>
          <h1 className="flex justify-center items-center w-full h-40 p-6 text-4xl font-bold">
            Professional{" "}
            <span className="text-green-500 ml-3"> Certificate</span>
          </h1>
          <div className="mt-2 flex justify-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((img, i) => (
                  <div key={i} className="relative min-w-full h-full">
                    <Image
                      src={img}
                      alt={`slide-${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
              >
                <FaChevronLeft className="text-green-600" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
              >
                <FaChevronRight className="text-green-600" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === activeIndex ? "bg-green-500" : "bg-gray-300"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </Element>
    </div>
  );
}
