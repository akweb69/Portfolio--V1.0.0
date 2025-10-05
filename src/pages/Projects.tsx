import DecryptingView from "@/components/ui/decrypting";
import GlowCard from "@/components/ui/spotlightcard";

const Projects = () => {
  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-b from-[#000714] to-[#000d27] ">
      {/* heading */}
      <DecryptingView />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlowCard>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
            <p className="text-gray-300">
              This is the first spotlight card with some content.
            </p>
          </div>
        </GlowCard>
      </div>
    </div>
  );
};

export default Projects;
