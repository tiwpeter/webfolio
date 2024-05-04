import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../style';
import { projects } from "../constants"; 
import { Tilt } from "react-tilt";
import ProjectTag from './ProjectTag';
import { github } from "../assets";

function Works() {
  const [type, setType] = useState("All"); 

  const handleTypeChange = (newType) => {
    console.log("Clicked tag:", newType);
    setType(newType);
  };

  const filteredProjects = type === "All" ? projects : projects.filter((project) =>
    project.tags.some(tag => tag.name === type)
  );

  const ProjectCard = ({ index, name, description, image,source_code_link,tags }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Project</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag 
            type="All"
            onClick={handleTypeChange} 
            isSelected={type === "All" } 
          />
          <ProjectTag 
            type="React&Django"
            onClick={handleTypeChange} 
            isSelected={type === "React&Django" } 
          />
        </div>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default Works;
