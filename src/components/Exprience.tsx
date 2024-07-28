import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="space-y-8">
          <ExperienceCard
            company="Annapurna Health Care Pvt Ltd"
            position="Bio-Medical Engineer"
            duration="June 2023 – July 2023 (20 Days)"
            responsibilities={[
              "Maintained and repaired medical equipment to ensure optimal performance and compliance with safety regulations.",
              "Troubleshot technical issues to minimize downtime and support continuous patient care.",
              "Collaborated with healthcare teams to integrate new technologies and enhance operational efficiency."
            ]}
          />
          <ExperienceCard
            company="V ONE Hospital"
            position="Bio-Medical Engineer"
            duration="May 2024 – June 2024 (1.5 Months)"
            responsibilities={[
              "Ensured reliable operation of medical equipment through regular maintenance, calibration, and compliance with safety standards.",
              "Addressed and resolved technical issues swiftly to minimize downtime and ensure uninterrupted patient care.",
              "Collaborated with healthcare professionals to deploy and optimize new technologies, improving efficiency."
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, position, duration, responsibilities }) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{company}</h3>
        <p className="text-lg text-gray-600 mb-1">{position}</p>
        <p className="text-sm text-gray-500 mb-4">{duration}</p>
        <h4 className="font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Experience;