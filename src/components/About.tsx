import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { skills } from '../data/skills';

// Import the image from your local directory
import profileImage from '../assets/images/img.png';

export default function About() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={profileImage} // Use the imported local image
              alt="Profile"
              className="rounded-lg shadow-md w-full max-w-sm object-cover mx-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6 text-sm">{personalInfo.summary}</p>
            
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-base font-semibold mb-2 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
