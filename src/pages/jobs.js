import { useEffect, useState } from "react";
import axios from "axios";

export default function Jobs() {
  const [backendJobs, setBackendJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/jobs");
        console.log("✅ Data:", res.data);
        setBackendJobs(res.data);
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      <div>
      {backendJobs.length > 0 ? (
        backendJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
    </div>
  );
}
