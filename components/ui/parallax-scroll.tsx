"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Projects {
  image: string;
  link:string;
}

export const ParallaxScroll = ({
  projects,
  className,
}: {
  projects: Projects[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(projects.length / 3);

  const firstPart = projects.slice(0, third);
  const secondPart =projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Link href={el.link} >
                <img
                  src={el.image}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:scale-105 transition ease-in-out duration-300"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Link href={el.link}>
              <img
                src={el.link}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:scale-105 transition ease-in-out duration-300"
                height="400"
                width="400"
                alt="thumbnail"
              />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Link href={el.link}>
              <img
                src={el.image}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:scale-105 transition ease-in-out duration-300"
                height="400"
                width="400"
                alt="thumbnail"
              />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
