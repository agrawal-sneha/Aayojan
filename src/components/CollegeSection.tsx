import React from 'react';
import { Link } from '../utils/Link';

interface College {
  id: string;
  name: string;
  logo: string;
  events: number;
}

const colleges: College[] = [
  {
    id: 'iit-delhi',
    name: 'IIT Delhi',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 24
  },
  {
    id: 'nit-nagaland',
    name: 'NIT Nagaland',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 18
  },
  {
    id: 'iim-ahmedabad',
    name: 'IIM Ahmedabad',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 32
  },
  {
    id: 'du-delhi',
    name: 'Delhi University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 45
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 29
  },
  {
    id: 'iisc-bangalore',
    name: 'IISc Bangalore',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    events: 21
  }
];

const CollegeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Colleges</h2>
          <Link to="/colleges" className="text-red-500 hover:text-red-400 font-medium">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colleges.map((college) => (
            <Link key={college.id} to={`/college/${college.id}`} className="block">
              <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-700">
                  <img 
                    src={college.logo} 
                    alt={college.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{college.name}</h3>
                <p className="text-gray-400 text-xs">{college.events} events</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-6 md:p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Are you a college event organizer?</h3>
              <p className="text-gray-300 mb-6">
                List your college events, fests, and workshops on Aayojan to reach a wider audience and boost attendance.
                Get detailed analytics, manage registrations, and more!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                Register Your College
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="College fest" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeSection;