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
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
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
                              <p className="font-bold">
                                {experienceItem.duration}
                              </p>
                              <p className="font-extrabold mt-2">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </p>
                              <p className="font-extrabold mt-2">
                                {experienceItem.position}
                              </p>
                              <p className="font-bold mt-2">
                                {experienceItem.jobprofile}
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

        {/* Education Part Start */}
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
    </div>
  );
}
