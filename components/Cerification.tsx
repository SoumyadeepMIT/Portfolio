import React from 'react'
import { CertificationType } from '../types/certification_type';
import CertificationCard from './CertificationCard';

const Cerification = ({ certifications }: { certifications: CertificationType[] }) => {
  return (
    <div className="mt-5 flex flex-col items-center">
    <h2 className="text-2xl font-bold text-zinc-100 mb-6">Certifications</h2>
    <div className="flex flex-col gap-6 w-full items-center">
        {certifications.map((cert, index) => (
        <CertificationCard key={index} certification={cert} />
        ))}
    </div>
    </div>
  )
}

export default Cerification