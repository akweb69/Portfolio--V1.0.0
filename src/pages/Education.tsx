import TimelinePage3 from "@/components/ui/eductyions";
import OrbitingSkills from "@/components/ui/skilss";

const Education = () => {
  return (
    <div className="w-full md:grid min-h-screen grid-cols-2 gap-2 items-center bg-gray-950">
      {/* main component */}
      <div className="w-11/12 mx-auto order-2">
        <TimelinePage3></TimelinePage3>
      </div>
      {/* right side */}
      <div className="">
        <OrbitingSkills></OrbitingSkills>
      </div>
    </div>
  );
};

export default Education;
