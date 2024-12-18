import React from 'react';
import { Brain, Eye, MessageSquare, Database } from 'lucide-react';

const topics = [
  {
    title: 'Supervised Learning',
    icon: Database,
    description: 'Experience with classification and regression models including Random Forests and SVMs.',
  },
  {
    title: 'Deep Learning',
    icon: Brain,
    description: 'Hands-on experience with CNNs, RNNs, and Transformer architectures.',
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    description: 'Proficient in image processing, object detection, and segmentation tasks.',
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    description: 'Working knowledge of text classification, sentiment analysis, and language modeling.',
  },
];

export default function CoreMaterials() {
  return (
    <section id="core-materials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What I Love in ML</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <div key={topic.title} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
              <topic.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}