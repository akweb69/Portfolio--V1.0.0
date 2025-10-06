"use client";
import { motion } from "framer-motion";
import NumberTicker from "@/components/ui/ticker";
import { Star, Briefcase, Smile } from "lucide-react";

const Counting = () => {
  const stats = [
    {
      id: 1,
      icon: <Briefcase size={40} className="text-white" />,
      value: 67,
      label: "Projects Completed",
    },
    {
      id: 2,
      icon: <Smile size={40} className="text-white" />,
      value: 46,
      label: "Clients Satisfied",
    },
    {
      id: 3,
      icon: <Star size={40} className="text-white" />,
      value: 3,
      label: "Years of Experience",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col justify-center items-center p-8 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/40 shadow-lg border border-gray-200/30 dark:border-gray-700/40 hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="mb-4 p-3 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-md"
            >
              {item.icon}
            </motion.div>
            <NumberTicker
              value={item.value}
              duration={2500}
              className="text-5xl md:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-transparent drop-shadow-sm"
            />
            <div className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 text-center mt-2">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counting;
