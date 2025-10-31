import React from "react";
import { useForm } from "react-hook-form";
import { TextInput, Textarea, Select, Button, Group } from "@mantine/core";

const JobForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Job Created:", data);
    alert("Job Created Successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Job Title"
          placeholder="Full Stack Developer"
          {...register("title")}
        />
        <TextInput
          label="Company Name"
          placeholder="Amazon, Microsoft, Swiggy"
          {...register("company")}
        />

        <TextInput
          label="Location"
          placeholder="Choose Preferred Location"
          {...register("location")}
        />
        <Select
          label="Job Type"
          placeholder="Select"
          data={["Full Time", "Part Time", "Contract", "Internship"]}
          {...register("jobType")}
        />

        <TextInput
          label="Salary Range"
          placeholder="₹50,000 - ₹80,000"
          {...register("salary")}
        />
        <TextInput
          label="Application Deadline"
          placeholder="YYYY-MM-DD"
          type="date"
          {...register("deadline")}
        />
      </div>

      <Textarea
        label="Job Description"
        placeholder="Write a brief job description..."
        {...register("description")}
      />
      <Textarea
        label="Requirements"
        placeholder="List required skills or qualifications..."
        {...register("requirements")}
      />
      <Textarea
        label="Responsibilities"
        placeholder="Describe key responsibilities..."
        {...register("responsibilities")}
      />

      <Group justify="space-between" mt="md">
        <Button variant="outline" onClick={() => reset()}>
          Save Draft
        </Button>
        <Button type="submit" color="blue">
          Publish
        </Button>
      </Group>
    </form>
  );
};

export default JobForm;
