import { Link } from "react-router-dom";

function JobCard({ job, saveJob }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl fongit initt-bold text-indigo-600">{job.title}</h2>{" "}
      <p className="mt-2">{job.company}</p>
      <p>{job.location}</p>
      <p>{job.type}</p>
      <Link to={`/job/${job.id}`} className="text-blue-500 block mt-2">
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
