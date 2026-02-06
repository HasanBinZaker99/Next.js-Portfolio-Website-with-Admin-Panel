"use client";
import { useState, useEffect } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "text",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};
export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);

  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  async function handleSendMessage() {
    const res = await addData("contact", formData);
    if (res && res.success) {
      setFormData(initialFormData);
      setshowSuccessMessage(true);
    }
  }
  useEffect(() => {
    if (showSuccessMessage)
      setTimeout(() => {
        setshowSuccessMessage(false);
      }, 3500);
  });
  const isValidForm = () => {
    return formData &&
      formData.name != "" &&
      formData.email !== "" &&
      formData.message != ""
      ? true
      : false;
  };

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
              >
                {" "}
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <AnimationWrapper className="text-gray-500 relative">
        <div className="containter px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem) =>
                controlItem.name === "message" ? (
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="text-sm text-black">
                        {controlItem.label}
                      </label>
                      <textarea
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-green-500 border-[2px] bg-white rounded text-base outline-none text-black py-4 px-3 resize-none leading-6"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="text-sm text-[#000]">
                        {controlItem.label}
                      </label>
                      <input
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-green-500 border-[2px] bg-[#ffffff] rounded text-base outline-none text-[#000] py-1 px-3 resize-none leading-6"
                      ></input>
                    </div>
                  </div>
                ),
              )}
              {showSuccessMessage && (
                <p className="text-[14px] font-bold my-[8px] text-green-600 animate-bounce">
                  Your Message has been delivered successfully! 😊
                </p>
              )}
              <div className="p-2 w-full">
                <button
                  onClick={handleSendMessage}
                  disabled={!isValidForm()}
                  className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg text-2xl tracking-widest bg-green-500 outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
}
