import React, { useState } from "react";
import { TextInput, Select, RangeSlider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function JobFilterBar() {
  const [salary, setSalary] = useState([50, 80]); // Default ₹50k–₹80k

  return (
    <div className="w-full bg-white shadow-md py-6 px-10 flex flex-wrap items-center justify-between gap-6">
      {/* 🔍 Search Input */}
      <TextInput
        placeholder="Search By Job Title, Role"
        className="w-64"
        radius="md"
      />

      {/* 📍 Location Dropdown with Icon */}
      <div className="flex items-center gap-2 w-52">
        <img src="/icons/loc.png" alt="Location" className="w-5 h-5" />
        <Select
          placeholder="Preferred Location"
          data={["Hyderabad", "Bangalore", "Remote"]}
          radius="md"
          withCheckIcon={false}
        />
      </div>

      {/* 💼 Job Type Dropdown */}
      <Select
        placeholder="Job Type"
        data={["Full-time", "Internship", "Remote"]}
        className="w-52"
        radius="md"
        withCheckIcon={false}
      />

      {/* 💰 Salary Range (Minimal Figma Style) */}
      <div className="w-72 flex flex-col items-start justify-start">
        <div className="flex justify-between w-full text-sm text-gray-600 mb-2">
          <span>Salary Per Month</span>
          <span className="font-medium text-gray-800">
            ₹{salary[0]}k–₹{salary[1]}k
          </span>
        </div>

        <RangeSlider
  min={0}
  max={100}
  step={5}
  value={salary}
  onChange={setSalary}
  radius="s"
  className="w-full"
  label={null}
  classNames={{
    bar: "bg-black",
    track: "bg-gray-300",
    thumb: "bg-black border-black w-[1px] h-[1px]",
  }}
/>

      </div>
    </div>
  );
}
