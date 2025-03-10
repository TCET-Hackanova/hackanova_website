"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full    font-sans md:px-5 mu-2"
      ref={containerRef}
    >
      
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      
        <h2 className="text-3xl md:text-4xl mb-4 text-white max-w-4xl">
          Hack the Dates
        </h2>
        <div className="flex gap-10">
  <a
    href="https://tiny.cc/8ul8001" // Replace with your desired URL
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold text-lg rounded-md border-dashed border-2 border-gray-300 hover:shadow-lg transition-shadow"
  >
    Software Brochure
  </a>

  <a
    href="https://tiny.cc/eul8001" // Replace with your desired URL
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold text-lg rounded-md border-dashed border-2 border-gray-300 hover:shadow-lg transition-shadow"
  >
    Hardware Brochure
  </a>
</div>
      <h6 className="lg:text-lg text-sm mt-3">Note: A different set of Problem statements will be provided for offline finale</h6>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-10 md:gap-0">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="md:h-8 h-4 w-4 md:w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-violet-400 ">
                {item.title}
              </h3>
            </div>

            <div className="relative mb-10 pl-20 pr-4 md:pl-4 w-full">
            <h3 className="md:hidden text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-2">
                
                {item.title}
                </h3>
              <h3 className=" text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-2">
                
              {item.content}
              </h3>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
