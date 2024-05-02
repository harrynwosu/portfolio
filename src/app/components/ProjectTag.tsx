import React from "react";

export interface ProjectTagProps {
  name: string,
  isSelected: boolean,
  onClick: (name: string) => void,
}

const ProjectTag = ({ name, isSelected, onClick }: ProjectTagProps) => {
  const buttonStyle = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl z-20 cursor-pointer ${buttonStyle}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
