// Works.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../style';
import { projects } from "../constants"; 
import { Tilt } from "react-tilt";
import ProjectTag from './ProjectTag';

function Works() {
  const [type, setType] = useState("All"); 

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const ProjectCard = ({
    index,
    name,
    description,
    types,
    image,
    source_code_link,
  }) => {
    const isTypeSelected = types.some(projectType => projectType === "All" || projectType.name === type);
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

          <div className="mt-5">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <h2 className=''>d</h2>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Project
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
              {projects.flatMap(project => project.tags).map((tag, index) => (
        <ProjectTag 
          key={index} 
          type={tag.name} 
          onClick={handleTypeChange} 
          isSelected={tag === "All" || tag.name === type} 
        />
      ))}
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
      {projects.flatMap(project => project.tags).map((tag, index) => (
        <ProjectTag 
          key={index} 
          type={tag.name} 
          onClick={handleTypeChange} 
          isSelected={tag === "All" || tag.name === type} 
        />
      ))}
      </div>
    </>
  );
}

export default Works;
