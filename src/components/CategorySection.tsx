import React, { useState } from 'react';
import { Music, Radical as MicVocal, Megaphone, Lightbulb, GraduationCap, Award, Ticket, Users } from 'lucide-react';
import { Link } from '../utils/Link';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  events: number;
}

const categories: Category[] = [
  { id: 'concert', name: 'Concerts', icon: <Music className="h-6 w-6" />, events: 156 },
  { id: 'comedy', name: 'Comedy Shows', icon: <MicVocal className="h-6 w-6" />, events: 89 },
  { id: 'talks', name: 'Talks & Seminars', icon: <Megaphone className="h-6 w-6" />, events: 112 },
  { id: 'workshops', name: 'Workshops', icon: <Lightbulb className="h-6 w-6" />, events: 74 },
  { id: 'college', name: 'College Fests', icon: <GraduationCap className="h-6 w-6" />, events: 203 },
  { id: 'awards', name: 'Award Shows', icon: <Award className="h-6 w-6" />, events: 31 },
  { id: 'exhibitions', name: 'Exhibitions', icon: <Ticket className="h-6 w-6" />, events: 64 },
  { id: 'meetups', name: 'Meetups', icon: <Users className="h-6 w-6" />, events: 128 }
];

const CategorySection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Browse by Category</h2>
          <Link to="/categories" className="text-red-500 hover:text-red-400 font-medium">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="block"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div 
                className={`bg-gray-900 rounded-lg p-6 text-center transition-transform duration-300 ${
                  hoveredCategory === category.id ? 'transform scale-105 shadow-xl' : ''
                }`}
              >
                <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                  hoveredCategory === category.id ? 'bg-red-600' : 'bg-gray-800'
                } transition-colors duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.events} events</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;