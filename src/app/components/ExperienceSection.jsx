// @flow strict


import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./AnimatedLottie";
import GlowCard from "./GlowCard";
import experience from "./code.json";

// Define the experiences array
const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: "South Bay Area Research Institute, California ",
      duration: "(May 2024 - Present)"
    },
    {
      id: 2,
      title: "IT Project Manager Intern",
      company: "IIT Bombay",
      duration: "(Oct 2023 - March 2024)"
    },
    {
      id: 3,
      title: "Research Intern",
      company: "Nestle",
      duration: "(Oct 2023 - Dec 2023)"
    }
  ];
  
  function ExperienceSection() {
    return (
      <div id="experience" >
      
  
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
              Experiences
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
  
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-full h-full">
                <AnimationLottie animationPath={experience} />
              </div>
            </div>
  
            <div>
              <div className="flex flex-col gap-6">
                {experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                   
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExperienceSection;