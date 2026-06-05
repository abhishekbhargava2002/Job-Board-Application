import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || [],
  );

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const saveJob = (job) => {
    const exists = savedJobs.find((item) => item.id === job.id);

    if (exists) {
      alert("Job already saved!");
      return;
    }

    const updatedJobs = [...savedJobs, job];

    setSavedJobs(updatedJobs);

    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));

    alert("Job Saved!");
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "All" || job.location === location),
  );

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      <Navbar count={savedJobs.length} dark={dark} setDark={setDark} />

      <div className="p-6">
        <SearchBar search={search} setSearch={setSearch} />

        <div className="mt-4">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded text-black"
          >
            <option value="All">All Locations</option>

            <option value="Remote">Remote</option>

            <option value="Pune">Pune</option>

            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <div className="grid gap-4 mt-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} saveJob={saveJob} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
