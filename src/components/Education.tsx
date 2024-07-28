import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="space-y-8">
          <EducationCard
            institution="Shri Govindram Seksaria Institute of Technology"
            degree="Bachelor of Technology in Biomedical Engineering"
            duration="2021 – 2025"
            grade="GPA: 6.0/10.0"
            courses={[
              'Bio-instrumentation', 'Bioelectricity and Transducers', 'Human Anatomy and Physiology',
              'Signals and Systems', 'Programming Tools and Techniques', 'Biomedical Signal Processing',
              'Biomedical Statistical Signal Processing', 'Biomechanics'
            ]}
          />
          <EducationCard
            institution="Saraswati Vidya Mandir, Shujalpur"
            degree="Higher Secondary Education"
            duration="2020-2021"
            grade="Percentage: 73.0%"
            courses={['Mathematics', 'Chemistry', 'Physics']}
          />
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  courses: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, duration, grade, courses }) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{institution}</h3>
        <p className="text-lg text-gray-600 mb-1">{degree}</p>
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
        <p className="font-medium text-gray-700 mb-4">{grade}</p>
        <h4 className="font-medium text-gray-700 mb-2">Relevant Coursework:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Education;