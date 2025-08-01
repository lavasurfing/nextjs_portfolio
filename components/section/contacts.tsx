"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contacts() {
  return (
    <div id="contacts" className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md gap-10">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Interested in working together ?
      </h1>
        <Link href={"mailto:ashishhansdah0@gmail.com"} className="z-20 relative">
          <Button className="z-15 relative mt-10 cursor-pointer hover:scale-110 transition duration-200 ease-in" size={"lg"}>
              Send me an email <Mail className="size-5 ml-2" />
          </Button>
        </Link>
    </div>
  );
}

export default Contacts;
