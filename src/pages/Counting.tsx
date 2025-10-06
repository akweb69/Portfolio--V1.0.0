"use client";
import { motion } from "framer-motion";
import NumberTicker from "@/components/ui/ticker";
import { Star, Briefcase, Smile } from "lucide-react";

const Counting = () => {
  const stats = [
    {
      id: 1,
      icon: <Briefcase size={42} />,
      value: 67,
      label: "Projects Completed",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      id: 2,
      icon: <Smile size={42} />,
      value: 46,
      label: "Clients Satisfied",
      gradient: "from-pink-500 via-fuchsia-500 to-rose-500",
    },
    {
      id: 3,
      icon: <Star size={42} />,
      value: 3,
      label: "Years of Experience",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="relative w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent blur-3xl animate-pulse"></div>

      {/* Heading section */}
      <div className="relative z-10 text-center w-11/12 mx-auto pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 drop-shadow-lg"
        >
          We Build Tomorrow’s Solutions, Today
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-3xl mt-4 text-gray-300 font-medium"
        >
          Delivering <span className="text-pink-400 font-semibold">67+</span>{" "}
          Successful Projects Worldwide
        </motion.h2>
      </div>

      {/* Stats section */}
      <div className="relative z-10 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative flex flex-col justify-center items-center p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-500 backdrop-blur-xl"
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${item.gradient} transition duration-700`}
            ></div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative mb-5 p-4 rounded-full bg-gradient-to-tr ${item.gradient} text-white shadow-lg`}
            >
              {item.icon}
            </motion.div>

            {/* Counter */}
            <NumberTicker
              value={item.value}
              duration={2500}
              className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-sm"
            />

            {/* Label */}
            <div className="relative text-xl md:text-2xl font-semibold text-gray-300 text-center mt-3 tracking-wide">
              {item.label}
            </div>

            {/* Floating animation on hover */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
              className="absolute bottom-0 h-1 w-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counting;
