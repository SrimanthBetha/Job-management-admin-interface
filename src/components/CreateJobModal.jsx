import { Modal, TextInput, Select, Textarea, Button, Group } from "@mantine/core";
import { useState } from "react";
import axios from "axios"; // add this import at the top
import jobsData from "../data/jobs";
export default function CreateJobModal({ opened, onClose ,setBackendJobs}) {
  const [salaryRange, setSalaryRange] = useState({ min: "", max: "" });
// inside the component (before return)
const handlePublish = async () => {
  const jobData = {
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Hyderabad",
    jobType: "Full Time",
    salaryRange: "₹12,00,000",
    description: "Work on scalable web applications using React and Node.js",
  };

  try {
  // Simulate saving job locally instead of sending to backend
  setBackendJobs((prevJobs) => [...prevJobs, jobData]);

  console.log("✅ Job Created (local):", jobData);
  alert("Job Published Successfully (local)!");
  onClose(); // close modal after success
} catch (error) {
  console.error("❌ Error creating job:", error);
  alert("Job Published Successfully!");
}

};
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<h2 className="text-lg font-semibold text-center w-full">Create Job Opening</h2>}
      centered
      size="lg"
      radius="md"
      overlayProps={{ backgroundOpacity: 0.55, blur: 4 }}
      classNames={{
        body: "px-6 pb-6",
        header: "flex justify-center border-b border-gray-200",
      }}
    >
      {/* ✅ Two-column grid for form fields */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Job Title */}
        <TextInput label="Job Title" placeholder="" />

        {/* Company Name */}
        <TextInput label="Company Name" placeholder="" />

        {/* ✅ Location Dropdown */}
        <Select
          label="Location"
          placeholder="Select location"
          data={["Chennai", "Hyderabad"]}
          radius="md"
          withCheckIcon={false}
        />

        {/* ✅ Job Type Dropdown */}
        <Select
          label="Job Type"
          placeholder="Select type"
          data={["Internship", "Full Time", "Part Time", "Contract"]}
          radius="md"
          withCheckIcon={false}
        />

        {/* Salary Range */}
        <div>
          <label className="text-sm font-medium text-gray-700">Salary Range</label>
          <div className="flex gap-2 mt-1">
            <TextInput
              placeholder="₹0"
              value={salaryRange.min}
              onChange={(e) => setSalaryRange({ ...salaryRange, min: e.target.value })}
            />
            <TextInput
              placeholder="₹12,00,000"
              value={salaryRange.max}
              onChange={(e) => setSalaryRange({ ...salaryRange, max: e.target.value })}
            />
          </div>
        </div>

        {/* Application Deadline */}
        <TextInput label="Application Deadline" placeholder="dd/mm/yyyy" />
      </div>

      {/* Job Description */}
      <Textarea
        label="Job Description"
        placeholder="Please share a description to let the candidate know more about the job role"
        minRows={4}
        className="mt-4"
      />

      {/* Footer Buttons */}
      <Group justify="flex-end" mt="md">
  <Button variant="default" onClick={onClose}>
    Cancel
  </Button>
  <Button
    radius="md"
    className="!bg-blue-500 hover:!bg-blue-600 text-white px-6"
    onClick={handlePublish}
  >
    Publish →
  </Button>
</Group>


    </Modal>
  );
}
