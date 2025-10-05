import DecryptingView from "@/components/ui/decrypting";
import GlowCard from "@/components/ui/spotlightcard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "UniGrants",
      subtitle: "Scholarship Management Application",
      description:
        "UniGrants is an advanced scholarship discovery and application management platform that enables students to find and apply for scholarships seamlessly. With an intuitive user interface and powerful tools, UniGrants bridges the gap between students and their dreams.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      liveLink: "https://unigrants.vercel.app/",
      githubLink: "https://github.com/yourusername/unigrants",
      ChallengesFaced: [
        "Overcame challenges in implementing real-time updates using WebSockets, ensuring a smooth and responsive user experience.",
        "Addressed issues with database performance and scalability, implementing optimizations to handle a large number of users and scholarship applications.",
        "Collaborated with a team of developers to ensure the seamless integration of various components, resulting in a cohesive and functional application.",
      ],
      thumbnail:
        "https://i.ibb.co.com/4Rr3PSsk/Screenshot-2025-07-24-220137.png",
    },
    {
      id: 2,
      title: "UniGrants",
      subtitle: "Scholarship Management Application",
      description:
        "UniGrants is an advanced scholarship discovery and application management platform that enables students to find and apply for scholarships seamlessly. With an intuitive user interface and powerful tools, UniGrants bridges the gap between students and their dreams.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      liveLink: "https://unigrants.vercel.app/",
      githubLink: "https://github.com/yourusername/unigrants",
      ChallengesFaced: [
        "Overcame challenges in implementing real-time updates using WebSockets, ensuring a smooth and responsive user experience.",
        "Addressed issues with database performance and scalability, implementing optimizations to handle a large number of users and scholarship applications.",
        "Collaborated with a team of developers to ensure the seamless integration of various components, resulting in a cohesive and functional application.",
      ],
      thumbnail:
        "https://i.ibb.co.com/4Rr3PSsk/Screenshot-2025-07-24-220137.png",
    },
  ];
  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-b from-[#000714] to-[#000d27] ">
      {/* heading */}
      <DecryptingView />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
        {projectData.map((project) => (
          <GlowCard key={project.id} className=" w-full">
            <div className="text-white">
              {/* thumbnail */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.subtitle}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
