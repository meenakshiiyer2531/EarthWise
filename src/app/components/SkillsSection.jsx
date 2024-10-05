import Image from "next/image";
import Marquee from "react-fast-marquee";

// Skills list
const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'NextJS',
  'Tailwind',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Git',
  'AWS',
  'Bootstrap',
  'Docker',
  'Go',
  'Figma',
  'Firebase',
  'MaterialUI',
  'Nginx',
  'Strapi',
  'C',
  'Dart',
  'Flutter',
  'Kotlin',
  'Cplusplus',
  'Java',
  'Python',
  'Svelte',
  'Django',
  'SQLite',
  'Vitejs',
  'Canva'
];

// Function to get image paths for skills
const skillsImage = (skill) => {
  return `/images/skills/${skill.toLowerCase()}.png`;
};

function SkillsSection() {
  return (
    <div id="skills">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-2xl rounded-md">
            SKILLS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const imagePath = skillsImage(skill);
          
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={imagePath}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default SkillsSection;
