import React from 'react';
import { Github, Linkedin, Mail, FileText, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Header() {
  return (
    <header className="relative py-16 flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNGNUY3RkEiIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjQiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
          Hi, I'm {personalInfo.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a 
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 text-sm"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Github size={20} />
          </a>
          <a 
            href={`https://linkedin.com${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={`https://${personalInfo.blog}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <BookOpen size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}