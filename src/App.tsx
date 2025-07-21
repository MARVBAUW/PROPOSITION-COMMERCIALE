import React from 'react';
import Header from './components/Header';
import ProjectSummary from './components/ProjectSummary';
import PricingBreakdown from './components/PricingBreakdown';
import Services from './components/Services';
import TotalSummary from './components/TotalSummary';
import Exclusions from './components/Exclusions';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <ProjectSummary />
      <PricingBreakdown />
      <Services />
      <TotalSummary />
      <Exclusions />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;