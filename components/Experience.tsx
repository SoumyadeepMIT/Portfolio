import React from 'react'
import { ExperienceType } from '../types/experience_type';
import ExperienceCard from './ExperienceCard';

const Experience = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="flex flex-col gap-6 w-full items-center">
          {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
          ))}
      </div>
      <div className="border-b-2 border-[#f4f1eb] w-3/4 mt-6"></div>
    </div>
  )
}

export default Experience