import React, { useState } from "react";
import { Button } from "@mantine/core";
import CreateJobModal from "./CreateJobModal"; // ✅ Import the modal

export default function Navbar() {
  const [opened, setOpened] = useState(false); // ✅ Manage modal state

  return (
    <>
      {/* ✅ Navbar Section */}
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl flex items-center justify-between py-4 px-10 relative">
            {/* Left: Logo */}
            <div className="flex items-center space-x-8 text-gray-700 font-medium mx-auto">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/cybermind.png"
                  alt="Cybermind Logo"
                  className="w-20 h-15"
                />
                <a href="#" className="hover:text-purple-600 transition">
                  Home
                </a>
              </div>

              <a href="#" className="hover:text-blue-600 transition">
                Find Jobs
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Find Talents
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                About Us
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Testimonials
              </a>

              {/* ✅ Create Job Button */}
              <Button
                radius="xl"
                onClick={() => setOpened(true)} // 🔥 Opens the modal
                className="!bg-purple-600 hover:!bg-purple-700 text-white font-medium px-6 shadow-sm"
              >
                Create Jobs
              </Button>
            </div>

            {/* Right empty space */}
            <div className="w-28" />
          </div>
        </div>
      </nav>

      {/* ✅ Modal Component */}
      <CreateJobModal opened={opened} onClose={() => setOpened(false)} />
    </>
  );
}
