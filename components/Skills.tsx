import React from 'react'

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="mt-5 flex flex-col items-center w-full">
    <h1 className="text-2xl font-bold text-zinc-100">Skills</h1>
    <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-2xl">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-sm text-zinc-300 border border-zinc-700 px-3 py-1 rounded-md hover:border-zinc-400 hover:text-white transition-colors duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="border-b-2 border-[#f4f1eb] w-3/4 mt-6"></div>
  </div>
  )
}
