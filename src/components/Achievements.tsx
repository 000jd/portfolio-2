import React from 'react';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <div className="flex gap-3">
                <Trophy className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{achievement.organization}</p>
                  <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                  {achievement.date && (
                    <p className="text-xs text-gray-500 mb-2">{achievement.date}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {achievement.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}