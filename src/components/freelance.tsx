import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

const FreelanceProjects: React.FC = () => {
  return (
    <section id="freelance-projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Freelance Projects</h2>
        <div className="space-y-8">
          <ProjectCard
            title="E-commerce Website"
            description="Developed a fully functional e-commerce website for a local business, including product listings, shopping cart, and secure checkout. The project focused on creating a seamless user experience while ensuring robust backend functionality for inventory management and order processing."
            techStack={["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express.js"]}
            liveLink="https://example-ecommerce.com"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Designed and built a responsive portfolio website for a photographer, showcasing their work with a modern and minimalist design. The site features a dynamic gallery, smooth transitions, and optimized image loading for an enhanced viewing experience across all devices."
            techStack={["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary", "Vercel"]}
            liveLink="https://example-portfolio.com"
          />
          {/* Add more ProjectCard components as needed */}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, liveLink }) => {
  return (
    <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
        <Link 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Live Project
        </Link>
      </CardContent>
    </Card>
  );
};

export default FreelanceProjects;