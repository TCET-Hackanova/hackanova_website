"use client";
import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { RiSteamFill, RiTeamFill, RiTeamLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { FaUsers, FaClipboardList, FaTools } from "react-icons/fa";
// import Image from "next/image";
export function BentoGridThirdDemo() {
  return (
    <div className="container mb-20 z-10 relative before:absolute before:bg-gradient-to-b from-purple-600 via-purple-950 to-black  before:-inset-2 before:-z-10 before:blur-3xl before:round-[inherit]">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[30rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}


//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 justify-center items-center"
//     >
//       <div className="flex flex-col items-start text-left gap-2">
//         <p className="text-5xl flex flex-col gap-2 md:text-4xl lg:text-5xl font-bold text-white">
//           Redefining
//           <p className="bg-gradient-to-r from-orange-500 to-purple-800 bg-clip-text text-transparent">
//             Norms
//           </p>
//         </p>
//         <p className="text-5xl font-bold text-white">Through</p>
//         <p className="text-5xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
//           Intelligence
//         </p>
//       </div>
//     </motion.div>
//   );
// };
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);

  //timer details
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-02-17T22:00:00").getTime();


    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex gap-2 flex-1 p-5 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 text-white justify-center"
    >
      <h1 className="text-4xl text-center font-semibold">Registration Are Open Till</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mx-auto">
        <motion.div
          className=" flex flex-col items-center p-4 rounded-lg bg-black/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-extrabold ">{time.days}</span>
          <span className="text-xl">Days</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-4 rounded-lg bg-black/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-extrabold ">{time.hours}</span>
          <span className="text-xl">Hours</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-4 rounded-lg bg-black/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-extrabold ">{time.minutes}</span>
          <span className="text-xl">Minutes</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-4 rounded-lg bg-black/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-extrabold ">{time.seconds}</span>
          <span className="text-xl">Seconds</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <FaUsers className="lg:text-7xl text-4xl text-red-600" /> {/* Icon for Teams */}
        <p className="sm:text-sm text-xs lg:text-xl text-center font-semibold text-neutral-500 mt-4">
          30+ 
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs lg:text-xl rounded-full px-2 py-0.5 mt-4">
          Teams
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl p-4 bg-black dark:border-white/[0.1] border border-pink-400 flex flex-col items-center justify-center">
        <FaClipboardList className="lg:text-7xl text-4xl text-green-600" />{" "}
        {/* Icon for Registrations */}
        <p className="sm:text-sm text-xs lg:text-xl text-center font-semibold text-neutral-500 mt-4">
          850+ 
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs lg:text-xl rounded-full px-2 py-0.5 mt-4">
        Registrations
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <FaTools className="lg:text-6xl text-4xl text-orange-600" />{" "}
        {/* Icon for Project Builds */}
        <p className="sm:text-sm lg:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
          30+  
        </p>
        <p className="lg:text-xl border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Project
        </p>
      </motion.div>
    </motion.div>
  );
};


const SkeletonOne = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate={hovered ? "hover" : "initial"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 justify-center items-center relative overflow-hidden"
    >
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white p-4 ${
          hovered ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <p className="lg:text-xl text-sm text-justify">
        Hackanova 4.0, organized by TSDW, is a hackathon focused on AI and Blockchain technologies, challenging participants to create innovative solutions under the theme "Redefining Norms Through Intelligence." It promotes collaboration, creativity, and competition, fostering the development of advanced tech solutions.</p>
      </motion.div>

      <motion.div
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-start text-left gap-2"
      >
        <p className="text-5xl flex flex-col gap-2 md:text-4xl lg:text-5xl font-bold text-white">
          Redefining
          <span className="bg-gradient-to-r from-orange-500 to-purple-800 bg-clip-text text-transparent">
            Norms
          </span>
        </p>
        <p className="text-5xl font-bold text-white">Through</p>
        <p className="text-5xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
          Intelligence
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate={hovered ? "hover" : "initial"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Text Overlay on Hover */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white p-4 ${
          hovered ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <p className="lg:text-lg text-sm  text-justify">
        The TCET Student Development and Welfare Association (TSDW), established in 2004-05 under the guidelines of Mumbai University, serves as a dynamic platform for creativity, innovation, and holistic growth. Commonly known as the Student Council, TSDW represents the student body and spearheads flagship events such as Hackanova These events beautifully merge technology, art, and community engagement.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        <img
          src="./img/TSDW.png"
          alt="Logo"
          className="max-w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default SkeletonFive;


const items = [
  {
    title: "Hackanova 4.0",
    description: (
      <span className="text-sm">
        Where Ideas Ignite, spreading an endless technical exposure
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Registrations are Open Till 17th Feb 2025",
    description: (
      <span className="text-sm">Pack your bags and get ready to hack.</span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Hackanova 3.0 Stats",
    description: (
      <span className="text-sm">
        The numbers that speak for themselves.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "TSDW ",
    description: (
      <span className="text-sm">Thakur Student Development Welfare.</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];