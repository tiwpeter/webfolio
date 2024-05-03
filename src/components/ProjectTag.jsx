// ProjectTag.jsx
import React from 'react';

const ProjectTag = ({ type, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => {
        console.log("Clicked tag:", type);
        onClick(type); // ส่งชื่อแท็ก (tags) ของโปรเจกต์ไปยังฟังก์ชัน handleTypeChange
      }}
    >
      {type}
    </button>
  );
}

export default ProjectTag;
