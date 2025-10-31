import React from "react";
import { Card, Button, Badge, Text } from "@mantine/core";

export default function JobCard({
  title,
  experience,
  mode,
  salary,
  time,
  description,
}) {
  const descriptionPoints = description
    ? description.split("\n").filter((point) => point.trim() !== "")
    : [];

  // ✅ Choose icon from /public/icons based on title
  const getIconSrc = () => {
    if (title.toLowerCase().includes("full stack"))
      return "/icons/fullstack.png";
    if (title.toLowerCase().includes("node"))
      return "/icons/node.png";
    if (title.toLowerCase().includes("ui") || title.toLowerCase().includes("ux"))
      return "/icons/uiux.png";
    return "/icons/default.png"; // fallback
  };

  return (
    <Card
      shadow="sm"
      radius="lg"
      className="relative hover:shadow-xl transition-all border border-gray-100 bg-white rounded-2xl p-6"
    >
      {/* ✅ Top-right time badge */}
      <div className="absolute top-4 right-4 bg-blue-200 text-black text-xs font-semibold px-3 py-1 rounded-full">
        {time}
      </div>

      {/* ✅ Left-aligned icon above title */}
<div className="flex items-start mb-3">
  <img
    src={process.env.PUBLIC_URL + getIconSrc()}
    alt="job icon"
    className="w-14 h-14 object-contain"
  />
</div>


      <div className="flex justify-between items-start mb-4">
        <div >
          <h3 className="text-[18px] font-semibold leading-tight text-gray-900">
            {title}
          </h3>

          <Text size="sm" className="text-gray-600 mt-1">
            {experience} • {mode}
          </Text>
        </div>

        <Badge color="blue" radius="sm" variant="light" > 
          {salary}
        </Badge>
      </div>

      <ul className="list-disc pl-5 text-gray-500 text-sm leading-relaxed mb-4 text-left">
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="mt-4">
        <Button
          fullWidth
          radius="l"
          className="!bg-blue-450 hover:!bg-blue-500 text-white font-semibold py-1 rounded-semi"
        >
          Apply Now
        </Button>
      </div>
    </Card>
  );
}
