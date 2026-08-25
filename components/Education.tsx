import React from 'react'
import {EducationType} from '../types/education_type';
import EducationCard from './EducationCard';

const Education = ({ education }: { education: EducationType[] }) => {
  return (
    <div className="mt-5 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-zinc-100 mb-6">Education</h2>
        <div className="flex flex-col gap-6 w-full items-center">
            {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
            ))}
        </div>
        <div className="border-b-2 border-[#f4f1eb] w-3/4 mt-6"></div>
    </div>
  )
}

export default Education