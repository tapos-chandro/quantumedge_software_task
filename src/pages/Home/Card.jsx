import { FaMapMarkerAlt, FaSuitcase, FaUsers } from "react-icons/fa";

const Card = ({ job }) => {
    return (
     <div className="bg-white rounded-xl  p-6 w-full mx-auto space-y-4 hover:shadow-2xl ">
      <p className="text-sm text-gray-400">
        {new Date(job.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>

      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>

      <div className="flex justify-between items-center text-sm">
        <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-600">
          {job.budget_type}
        </span>
        <span className="text-gray-800 font-semibold">
          ${job.rate_from}-${job.rate_to}
        </span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        {job.job_description.length > 130
          ? job.job_description.slice(0, 130) + "..."
          : job.job_description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          <FaMapMarkerAlt className="text-xs" />
          Remote
        </span>
        <span className="flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
          <FaSuitcase className="text-xs" />
          {job.experience_level}
        </span>
        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
          <FaUsers className="text-xs" />
          {job.hiring_capacity} Freelancer
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-2">
        {job.skills.slice(0, 3).map((skill) => (
          <span
            key={skill.id}
            className="bg-gray-100 text-gray-800 px-3 py-1 text-xs rounded-full"
          >
            {skill.label}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-sm text-gray-500 pt-1">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className=" flex flex-col  pt-4 border-t border-[#cccccc80] mt-4">
        <span className="text-sm text-gray-400">
          Posted by{" "}
          <span className="text-gray-800 font-semibold">Buyer {job.buyer}</span>
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full lg:w-1/3 w-1/2 my-2 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;