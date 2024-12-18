import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div key={edu.institution} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                {edu.type === 'university' ? (
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                ) : (
                  <School className="w-6 h-6 text-blue-600" />
                )}
                <div>
                  <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                  {edu.field && <p className="text-gray-700 mb-1">{edu.field}</p>}
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}