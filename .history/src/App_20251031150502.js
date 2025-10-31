import React from "react";
import { MantineProvider } from "@mantine/core";
import Navbar from "../frontend/components/Navbar";
import JobListPage from "./pages/JobListPage";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <Navbar />
        <JobListPage />
      </div>
    </MantineProvider>
  );
}

export default App;
