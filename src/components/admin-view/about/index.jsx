"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "about me",
    placeholder: "About me",
    type: "text",
    label: "About me",
  },
  {
    name: "noofprojects",
    placeholder: "No of Projects",
    type: "text",
    label: "No of Projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of Experience",
    type: "text",
    label: "No of Experience",
  },
  {
    name: "noofclients",
    placeholder: "No of Clients",
    type: "text",
    label: "No of Clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "skills",
  },
];
export default function AdminAboutView({ formData, setFormData }) {
  console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
          Add Info
        </button>
      </div>
      ;
    </div>
  );
}
