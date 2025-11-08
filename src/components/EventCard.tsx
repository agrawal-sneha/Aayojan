import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { Link } from '../utils/Link';

export interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
  college?: string;
}

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  date,
  location,
  category,
  imageUrl,
  college
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'conference': 'bg-blue-600',
      'networking': 'bg-green-600',
      'workshop': 'bg-green-600',
      'leadership': 'bg-purple-600',
      'cultural': 'bg-pink-600',
      'technical': 'bg-cyan-600',
      'management': 'bg-orange-600',
      'corporate': 'bg-gray-600',
      'seminars': 'bg-indigo-600',
    };
    
    // Default to a neutral color if category isn't in our map
    return colors[category.toLowerCase()] || 'bg-gray-600';
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}
    >
      <Link to={`/event/${id}`} className="block">
        <div className="relative h-60 w-full">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent`}></div>
          
          <span className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-bold text-white ${getCategoryColor(category)}`}>
            {category}
          </span>
          
          {college && (
            <span className="absolute top-3 right-3 px-2 py-1 bg-black bg-opacity-60 rounded-md text-xs font-medium text-white">
              {college}
            </span>
          )}
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className="absolute top-10 right-3 p-1.5 bg-black bg-opacity-60 rounded-full text-white hover:text-red-500 transition-colors duration-200"
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-lg line-clamp-2">{title}</h3>
            
            <div className="flex items-center mt-2 text-gray-300 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-3">{date}</span>
              <MapPin className="h-4 w-4 mr-1" />
              <span className="truncate">{location}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;