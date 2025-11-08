import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsList from './components/EventsList';
import CategorySection from './components/CategorySection';
import CollegeSection from './components/CollegeSection';
import ReferralSection from './components/ReferralSection';
import Footer from './components/Footer';
import { featuredEvents, collegeEvents, trendingEvents } from './data/mockEvents';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      <div className="py-6 bg-black">
        <EventsList 
          title="Featured Corporate Events" 
          viewAllLink="/events/featured"
          events={featuredEvents}
        />
      </div>
      
      <CategorySection />
      
      <div className="py-6 bg-gradient-to-b from-gray-900 to-black">
        <EventsList 
          title="College & Campus Events" 
          viewAllLink="/events/college"
          events={collegeEvents}
        />
      </div>
      
      <CollegeSection />
      
      <div className="py-6 bg-black">
        <EventsList 
          title="Trending Professional Events" 
          viewAllLink="/events/trending"
          events={trendingEvents}
        />
      </div>
      
      <ReferralSection />
      <Footer />
    </div>
  );
};

export default HomePage;