import React from 'react'
import { ExperienceType } from '../types/experience_type';

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
    const { company, location, role, durationStart, durationEnd, description } = experience;
  return (
    <div className="w-full max-w-2xl border-l-2 border-zinc-700 pl-6 py-4 hover:border-zinc-300 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-semibold text-zinc-100">
          {role} <span className="text-zinc-400 font-normal">· {company}</span>
        </h3>
        <span className="text-sm text-zinc-500 whitespace-nowrap">
          {durationStart} — {durationEnd}
        </span>
      </div>

      <p className="text-sm text-zinc-500 mt-0.5">{location}</p>

      <p className="text-sm text-zinc-400 leading-relaxed mt-3">
        {description}
      </p>
    </div>
  )
}

export default ExperienceCard