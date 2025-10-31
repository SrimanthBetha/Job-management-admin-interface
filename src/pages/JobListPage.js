import JobFilterBar from "../components/JobFilterBar";
//
//
// src/pages/JobListPage.js
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { TextInput, Select, RangeSlider } from "@mantine/core";
import JobCard from "../components/JobCard";
import CreateJobModal from "../components/CreateJobModal"; 

export default function JobListPage() {
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salary: [50000, 80000],
  });

  // ✅ Job Data (company matches icon filenames in /public/icons/)
  const jobs = [
    {
      title: "Full Stack Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
    "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "Node Js Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "UI/UX Designer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "Full Stack Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "Node Js Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "UI/UX Designer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "Full Stack Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    },
    {
      title: "Node Js Developer",
      experience: "2+ 1-3 yr Exp",
      mode: "Onsite",
      salary: "12 LPA",
      time: "24h Ago",
      description:
      "A user-friendly interface lets you browse stunning videos \nFilter destinations based on interests and create personalized.",
    }


  ];
    const [backendJobs, setBackendJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/jobs");
        setBackendJobs(res.data);
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Filters Section */}
      <div className="mt-24 flex justify-center">
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-6 w-[90%] max-w-6xl">
          {/* Job Title */}
          <div className="flex flex-col w-1/4">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Search By Job Title, Role
            </label>
            <TextInput
              placeholder="e.g. Full Stack Developer"
              value={filters.title}
              onChange={(e) => setFilters({ ...filters, title: e.target.value })}
              radius="xl"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col w-1/5">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Preferred Location
            </label>
            <Select
              placeholder="Select location"
              data={["Onsite", "Remote", "Hybrid"]}
              value={filters.location}
              onChange={(value) => setFilters({ ...filters, location: value })}
              radius="xl"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col w-1/5">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Job Type
            </label>
            <Select
              placeholder="Select type"
              data={["Full Time", "Part Time", "Contract"]}
              value={filters.jobType}
              onChange={(value) => setFilters({ ...filters, jobType: value })}
              radius="xl"
            />
          </div>

          {/* Salary */}
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              <span>Salary Per Month</span>
              <span>₹50k–₹80k</span>
            </label>
            <RangeSlider
              min={50000}
              max={100000}
              step={5000}
              value={filters.salary}
              onChange={(value) => setFilters({ ...filters, salary: value })}
              label={(val) => `₹${Math.round(val / 1000)}k`}
              color="black"
              radius="xl"
              className="mt-1"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹{filters.salary[0].toLocaleString()}</span>
              <span>₹{filters.salary[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Job Cards Grid */}
      {/* ✅ Job Cards Grid */}
<div className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {jobs.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
</div>

    </div>
  );
}
