"use client";
import AnimationWrapper from "../animation-wrapper";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data = [] }) {
  const totalProjects = data.length;
  const maxProjects = 10;
  const progress = Math.min(totalProjects / maxProjects, 1);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);
  const router = useRouter();

  return (
    <section
      id="project"
      className="mx-auto max-w-screen-xl px-6 sm:px-8 mt-24 mb-6 sm:mt-14 sm:mb-14"
    >
      <AnimationWrapper className="sm:py-16">
        <div className="relative flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            <span className="text-black">My </span>
            <span className="text-green-500">Projects</span>
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="relative w-[72px] h-[72px]">
              <svg
                className="absolute inset-0"
                width="72"
                height="72"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="stroke-black"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="stroke-green-500"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-black">
                  {totalProjects}
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper>
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.map((item) => {
              const date = item?.createdAt ? item.createdAt.split("T")[0] : "";

              const techs = (item?.technologies || "")
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean);

              return (
                <div
                  key={item._id}
                  className="relative rounded-2xl border-2 border-green-500 p-7 min-h-[320px] bg-white overflow-hidden"
                >
                  <h3 className="text-3xl font-extrabold text-black capitalize truncate">
                    {item.name}
                  </h3>

                  {date && (
                    <p className="mt-2 text-sm font-semibold text-gray-600">
                      {date}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-4 pb-20">
                    {techs.map((tech) => (
                      <span
                        key={`${item._id}-${tech}`}
                        className="
                          max-w-[140px] sm:max-w-[100px]
                          truncate
                          rounded-lg border-2 border-green-500
                          px-6 py-3 text-xs font-semibold text-black
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex  gap-3 px-3">
                    {item.website?.trim() && (
                      <button
                        type="button"
                        onClick={() => router.push(item.website)}
                        className="w-[140px] py-3 bg-green-500 text-white text-lg font-bold rounded-xl"
                      >
                        Website
                      </button>
                    )}
                    {item.youtube?.trim() && (
                      <button
                        type="button"
                        onClick={() => router.push(item.youtube)}
                        className="w-[140px] py-3 bg-green-500 text-white text-lg font-bold rounded-xl"
                      >
                        Youtube
                      </button>
                    )}
                    {item.github?.trim() && (
                      <button
                        type="button"
                        onClick={() => router.push(item.github)}
                        className="w-[140px] py-3 bg-green-500 text-white text-lg font-bold rounded-xl"
                      >
                        Github
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
}
