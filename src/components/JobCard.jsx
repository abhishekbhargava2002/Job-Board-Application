import { Link } from "react-router-dom";

function JobCard({ job, saveJob }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white text-black dark:bg-gray-800 dark:text-white">

      <h2 className="text-xl font-bold">
        {job.title}
      </h2>

      <p className="mt-2">
        {job.company}
      </p>

      <p>{job.location}</p>

      <p>{job.type}</p>

      <Link
        to={`/job/${job.id}`}
        className="text-blue-500 block mt-2"
      >
        View Details
      </Link>

      <button
        onClick={() => saveJob(job)}
        className="bg-green-500 text-white px-3 py-1 rounded mt-3"
      >
        Save Job
      </button>

    </div>
  );
}

export default JobCard;