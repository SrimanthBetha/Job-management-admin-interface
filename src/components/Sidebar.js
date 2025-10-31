import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li className="font-medium text-blue-600">Jobs</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Applications</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Departments</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
