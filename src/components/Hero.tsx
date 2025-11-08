import React, { useState } from 'react';
import { Search } from 'lucide-react';

const moods = [
  'Energetic', 'Relaxed', 'Social', 'Creative', 'Adventurous', 'Cultural', 'Professional'
];

const Hero: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
        <img
          src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"
          alt="People enjoying an event"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Discover Your Next <span className="text-red-600">Experience</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Find events that match your mood, connect with people, and create memories that last a lifetime.
        </p>

        <div className="relative max-w-xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 rounded-lg bg-black/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search for events, venues, or artists..."
          />
        </div>

        <div className="mb-8">
          <h3 className="text-white text-lg mb-3">How are you feeling today?</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood === selectedMood ? null : mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  mood === selectedMood
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default Hero;