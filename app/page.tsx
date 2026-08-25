import Cerification from "@/components/Cerification";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import portfolioData from "@/data/portfolio_data.json"


export default function Home() {
  return (
    <div className="mb-10">
      <Hero />
      <Skills skills={portfolioData.skills} />
      <Experience experiences={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Cerification certifications={portfolioData.certifications} />
    </div>
  );
}
