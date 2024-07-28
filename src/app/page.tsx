import Education from "@/components/Education";
import Experience from "@/components/Exprience";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Project";
import Skills from "@/components/Skill";
import FreelanceProjects from "@/components/freelance";
import { Contact } from "lucide-react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="container mx-auto px-4 space-y-24 py-24">
        <Profile />
        <FreelanceProjects />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>
    </main>
  );
}