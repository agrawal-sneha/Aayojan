import React, { useState } from 'react';
import EventCard, { EventProps } from './EventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EventsListProps {
  title: string;
  viewAllLink?: string;
  events: EventProps[];
}

const EventsList: React.FC<EventsListProps> = ({ title, viewAllLink, events }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 4
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(events.length - itemsPerPage.lg, prev + 1));
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="text-red-500 hover:text-red-400 font-medium">
              View All
            </a>
          )}
        </div>

        <div className="relative">
          {events.length > itemsPerPage.lg && (
            <>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white ${
                  startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/70'
                }`}
                style={{ marginLeft: '-12px' }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= events.length - itemsPerPage.lg}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white ${
                  startIndex >= events.length - itemsPerPage.lg ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/70'
                }`}
                style={{ marginRight: '-12px' }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.slice(startIndex, startIndex + itemsPerPage.lg).map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;