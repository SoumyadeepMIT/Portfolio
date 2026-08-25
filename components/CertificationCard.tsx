import React from "react";
import { CertificationType } from "../types/certification_type";

export default function CertificationCard({ certification }: { certification: CertificationType }) {
  const { name, issuer, year, link } = certification;

  const content = (
    <div className="border-l-2 border-zinc-700 pl-6 py-4 hover:border-zinc-300 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-semibold text-zinc-100">
          {name}
        </h3>
        <span className="text-sm text-zinc-500 whitespace-nowrap">
          {year}
        </span>
      </div>

      <p className="text-sm text-zinc-400 mt-0.5">{issuer}</p>
    </div>
  );

  if (!link) {
    return <div className="w-full max-w-2xl">{content}</div>;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full max-w-2xl">
      {content}
    </a>
  );
}