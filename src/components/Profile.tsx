import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile: React.FC = () => {
  return (
    <Card id="profile" className="bg-white text-gray-800 shadow-md my-12">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-gray-200">
              <AvatarImage src="/profile-picture.jpg" alt="Anshul Sharma" />
              <AvatarFallback className="text-2xl">AS</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h1 className="mb-1 text-3xl font-semibold">Anshul Sharma</h1>
            <h2 className="mb-4 text-xl text-gray-600">Biomedical Engineering Student</h2>
            <p className="text-gray-700 leading-relaxed">
              Dedicated Biomedical Engineering student with a passion for innovating healthcare technologies. Experienced in designing electronic systems for medical diagnostics and imaging, including power supplies, speaker amplifiers, and electronic stethoscopes.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">Signal Processing</li>
              <li className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">Arduino</li>
              <li className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">AI/ML in Healthcare</li>
              <li className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">Medical Imaging</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Profile;