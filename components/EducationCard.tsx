import React from "react";
import { EducationType } from "../types/education_type";

export default function EducationCard({ education }: { education: EducationType }) {
  const { institution, location, degree, gpa, status, graduationYear } = education;
  const dateLabel = status ?? graduationYear;

  return (
    <div className="w-full max-w-2xl border-l-2 border-zinc-700 pl-6 py-4 hover:border-zinc-300 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-semibold text-zinc-100">
          {degree}
        </h3>
        <span className="text-sm text-zinc-500 whitespace-nowrap">
          {dateLabel}
        </span>
      </div>

      <p className="text-sm text-zinc-400 mt-0.5">{institution}</p>
      <p className="text-sm text-zinc-500">{location}</p>

      {gpa && gpa !== "NA" && (
        <p className="text-sm text-zinc-400 mt-3">
          GPA: {gpa}
        </p>
      )}
    </div>
  );
}