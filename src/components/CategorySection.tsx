import React, { useState } from 'react';
import { Briefcase, Users, Lightbulb, TrendingUp, Award, Calendar, Building, Network } from 'lucide-react';
import { Link } from '../utils/Link';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  events: number;
}

const categories: Category[] = [
  { id: 'conferences', name: 'Conferences', icon: <Briefcase className="h-6 w-6" />, events: 156 },
  { id: 'networking', name: 'Networking', icon: <Users className="h-6 w-6" />, events: 189 },
  { id: 'workshops', name: 'Workshops', icon: <Lightbulb className="h-6 w-6" />, events: 142 },
  { id: 'leadership', name: 'Leadership', icon: <TrendingUp className="h-6 w-6" />, events: 87 },
  { id: 'awards', name: 'Award Shows', icon: <Award className="h-6 w-6" />, events: 31 },
  { id: 'seminars', name: 'Seminars', icon: <Calendar className="h-6 w-6" />, events: 94 },
  { id: 'corporate', name: 'Corporate Events', icon: <Building className="h-6 w-6" />, events: 76 },
  { id: 'meetups', name: 'Tech Meetups', icon: <Network className="h-6 w-6" />, events: 128 }
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