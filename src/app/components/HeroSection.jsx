"use client";
import React from "react";
import Image from "next/image";
import MagicButton from './MagicButton';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";



const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "V Meenakshi Iyer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
                "AI Researcher",
                1000,
                "Researcher",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          
          {/* Buttons with Margin */}
          <div className="space-y-5 mt-6"> {/* Add space between the buttons */}
            <MagicButton title="Contact Me" href="/#contact" />
            <MagicButton title="CV and Resume" href="https://drive.google.com/drive/folders/1q3JnwgZFGCQeJKjvWwt2cq_ab8yDtHwd?usp=sharing" target="_blank" rel="noopener noreferrer" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="order-1 lg:order-2 w-full max-w-5xl mx-auto from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
  <div className="flex flex-row">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
  </div>
  <div className="px-4 lg:px-8 py-5">
    <div className="flex flex-row space-x-2">
      <div className="h-3 w-3 rounded-full bg-red-400"></div>
      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
      <div className="h-3 w-3 rounded-full bg-green-200"></div>
    </div>
  </div>
  <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
    <code className="font-mono text-xs md:text-sm lg:text-base">
      <div className="blink">
        <span className="mr-2 text-pink-500">const</span>
        <span className="mr-2 text-white">coder</span>
        <span className="mr-2 text-pink-500">=</span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">V Meenakshi Iyer</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">skills:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">React</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NextJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Redux</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Express</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NestJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MySql</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MongoDB</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Docker</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Java</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Solidity</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">AWS</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
        <span className="text-orange-400">function</span>
        <span className="text-gray-400">{'() {'}</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">hardWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">problemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.length</span>
        <span className="mr-2 text-amber-300">&gt;=</span>
        <span className="text-orange-400">5</span>
      </div>
      <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
      <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
      <div><span className="text-gray-400">{`};`}</span></div>
    </code>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
