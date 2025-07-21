import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-white via-gray-50 to-white text-gray-900 py-8 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <img src="/Diapositive4.PNG" alt="PROGINEER Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#c1a16a' }}>PROGINEER</h1>
              <p className="text-lg text-gray-600">Architecture & Maîtrise d'Œuvre</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold mb-1" style={{ color: '#c1a16a' }}>PROPOSITION COMMERCIALE</div>
            <div className="text-gray-600">Construction neuve individuelle</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#787346' }}></div>
            <div>
              <div className="text-sm text-gray-500">CLIENTS</div>
              <div className="font-semibold">Monsieur et Madame Velly</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5" style={{ color: '#787346' }} />
            <div>
              <div className="text-sm text-gray-500">LOCALISATION</div>
              <div className="font-semibold">Gémenos (13420)</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5" style={{ color: '#787346' }} />
            <div>
              <div className="text-sm text-gray-500">DATE</div>
              <div className="font-semibold">9 juillet 2025</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;