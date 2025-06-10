import React from 'react';
import WelcomeSection from './WelcomeSection';
import ContentSuggestion from './ContentSugestion';
import UpcomingPosts from './UpcommingPosts';
import RecentContent from './RecentContent';
import WeeklyPerformance from './WeeklyPerformance';

const MainDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="space-y-6">
        <WelcomeSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ContentSuggestion />
            <UpcomingPosts />
          </div>
          
          <div className="space-y-6">
            <RecentContent />
            <WeeklyPerformance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;