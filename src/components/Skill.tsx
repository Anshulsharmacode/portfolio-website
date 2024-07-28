import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title="Technical Skills"
            skills={["Signal Processing", "Troubleshooting", "Biomedical Equipment Optimization"]}
          />
          <SkillCard
            title="Programming Skills"
            skills={["TypeScript", "JavaScript", "React.js", "HTML", "Machine Learning", "Python"]}
          />
          <SkillCard
            title="Software Skills"
            skills={["MATLAB", "Linux (Ubuntu)", "Windows", "Microsoft Office", "VS Code"]}
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;