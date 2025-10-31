// src/pages/JobCreatePage.js
import React from "react";
import {
  TextInput,
  Textarea,
  Select,
  Slider,
  Button,
  Group,
  Title,
  Stack,
  Box,
  Card,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function JobCreatePage() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      salaryRange: [30000, 80000],
      jobDescription: "",
      requirements: "",
      responsibilities: "",
      deadline: "",
    },
  });

  const onSubmit = (data) => {
    console.log("✅ Job Created:", data);
    alert("Job Created Successfully!");
    navigate("/jobs");
  };

  return (
    <Box bg="#F9FAFB" p="xl" style={{ minHeight: "100vh" }}>
      <Title order={2} mb="lg" style={{ fontWeight: 600 }}>
        Create New Job
      </Title>

      <Card shadow="sm" radius="md" p="xl" withBorder bg="white" maw={900}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="lg">
            <Group grow>
              <TextInput
                label="Job Title"
                placeholder="Enter job title"
                {...register("jobTitle")}
              />
              <TextInput
                label="Company Name"
                placeholder="Enter company name"
                {...register("companyName")}
              />
            </Group>

            <Group grow>
              <TextInput
                label="Location"
                placeholder="Enter location"
                {...register("location")}
              />

              <Select
                label="Job Type"
                placeholder="Select job type"
                data={["Full-time", "Part-time", "Internship", "Contract"]}
                onChange={(value) => setValue("jobType", value)}
              />
            </Group>

            <Box>
              <label
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: 8,
                  display: "block",
                }}
              >
                Salary Range
              </label>

              <RangeSlider
  min={0}
  max={100}
  step={5}
  value={salary}
  onChange={setSalary}
  radius="xl"
  className="w-full"
  label={null}
  styles={{
    track: {
      height: 4,
      backgroundColor: "#111111ff", // light gray background track
      borderRadius: "9999px",
    },
    bar: {
      backgroundColor: "#000000", // pure black active bar
    },
    thumb: {
      width: 12,
      height: 12,
      backgroundColor: "#000000", // ✅ pure black thumb
      border: "2px solid #000000", // same black border for consistency
      boxShadow: "0 0 3px rgba(0,0,0,0.3)", // slight shadow for depth
    },
  }
  }
/>


            <Textarea
              label="Job Description"
              placeholder="Write job details..."
              minRows={3}
              {...register("jobDescription")}
            />

            <Textarea
              label="Requirements"
              placeholder="List requirements..."
              minRows={3}
              {...register("requirements")}
            />

            <Textarea
              label="Responsibilities"
              placeholder="List responsibilities..."
              minRows={3}
              {...register("responsibilities")}
            />

            <TextInput
              label="Application Deadline"
              type="date"
              {...register("deadline")}
            />

            <Group position="right" mt="md">
              <Button
                variant="default"
                onClick={() => navigate("/jobs")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="green"
                style={{
                  backgroundColor: "#22C55E",
                  color: "white",
                }}
              >
                Create Job
              </Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Box>
  );
}

export default JobCreatePage;
