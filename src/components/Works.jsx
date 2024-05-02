import React , {useState}from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../style'
import { projects } from "../constants"; // = id
import {Tilt} from "react-tilt";
import ProjectTag from './ProjectTag'

function Works() {
  const [tag, setTag] = useState("All"); // ย้าย useState ไปใน Works()

  const handleTagChange = (newTag) => {
    setTag(newTag)
  };

  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
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
  }

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
          <ProjectTag 
          onClick={handleTagChange} 
          tag="All" 
          isSelected={tag === "All"}
          />

          <ProjectTag 
          onClick={handleTagChange} 
          tag="Web" 
          isSelected={tag === "Web"}
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default Works