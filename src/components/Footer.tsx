import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold">Joydip Das</p>
            <p className="text-gray-400">Machine Learning Engineer</p>
          </div>
          <div className="flex gap-8 mb-6 md:mb-0">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Joydip Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}