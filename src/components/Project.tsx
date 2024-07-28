import React from 'react';
import { FaBolt, FaVolumeUp, FaHeartbeat } from 'react-icons/fa';

const ProjectCard: React.FC<{ title: string; description: string; components: string; icon: React.ReactNode }> = ({
  title,
  description,
  components,
  icon,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center mb-4">
      <div className="text-3xl text-blue-600 mr-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4 flex-grow">{description}</p>
    <p className="text-sm text-gray-600">
      <strong>Components Used:</strong> {components}
    </p>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Dual Power Supply (5V, 12V)"
            description="Designed and implemented a dual power supply system using a single transformer to provide both 5V and 12V DC outputs. The project involved end-to-end development from circuit design to final assembly."
            components="Transformer (Dual-secondary or center-tap), Bridge Rectifiers (KBPC5010), Voltage Regulators (LM7812, LM7805), Capacitors (Electrolytic, Ceramic), Heat Sinks, Fuses, and Switches"
            icon={<FaBolt />}
          />
          <ProjectCard
            title="Speaker Amplifier"
            description="Designed and built a speaker amplifier to enhance audio performance, focusing on delivering high-quality sound output with reliable power handling."
            components="PCB, Capacitors, Resistors, Inductors, Power supply, Heat sink"
            icon={<FaVolumeUp />}
          />
          <ProjectCard
            title="Electronic Stethoscope Using Piezo Sensor"
            description="Developed a comprehensive electronic stethoscope system integrating a piezo sensor and Arduino UNO to capture and process heart and lung sounds. Utilized the XL6009 for voltage regulation, the HC-05 Bluetooth module for wireless data transmission, and implemented filters to enhance audio quality. Created a web application to visualize and analyze the collected audio data in real-time."
            components="Piezo sensor, Arduino UNO, Power supply, XL6009, HC-05, Filter, Web application"
            icon={<FaHeartbeat />}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;