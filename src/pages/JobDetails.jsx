import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <h2 className="p-6">Job Not Found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>

      <p className="mt-4">Company: {job.company}</p>

      <p>Location: {job.location}</p>

      <p>Type: {job.type}</p>

      <p className="mt-4">{job.description}</p>
    </div>
  );
}

export default JobDetails;
