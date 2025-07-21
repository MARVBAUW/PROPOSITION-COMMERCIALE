import React from 'react';
import PricingSection from './PricingTable';

const PricingBreakdown: React.FC = () => {
  const sections = [
    {
      title: "GROS ŒUVRE ET STRUCTURE",
      icon: "🏗️",
      rows: [
        { title: "Terrassements viabilisation", htAmount: "16 800,00 €", tva: "3 360,00 €", ttcAmount: "20 160,00 €" },
        { title: "Gros œuvre parpaing", htAmount: "69 600,00 €", tva: "13 920,00 €", ttcAmount: "83 520,00 €" },
        { title: "Charpente industrielle", htAmount: "6 889,00 €", tva: "1 377,80 €", ttcAmount: "8 266,80 €" },
        { title: "Couverture tuile ronde", htAmount: "16 440,00 €", tva: "3 288,00 €", ttcAmount: "19 728,00 €" },
      ],
      subtotal: { htAmount: "109 729,00 €", tva: "21 945,80 €", ttcAmount: "131 674,80 €" }
    },
    {
      title: "ISOLATION ET FAÇADE",
      icon: "🏠",
      rows: [
        { title: "Isolation thermique réglementaire", htAmount: "9 600,00 €", tva: "1 920,00 €", ttcAmount: "11 520,00 €" },
        { title: "Façade enduit", htAmount: "8 400,00 €", tva: "1 680,00 €", ttcAmount: "10 080,00 €" },
      ],
      subtotal: { htAmount: "18 000,00 €", tva: "3 600,00 €", ttcAmount: "21 600,00 €" }
    },
    {
      title: "MENUISERIES",
      icon: "🚪",
      rows: [
        { title: "Menuiseries extérieures PVC", htAmount: "12 636,00 €", tva: "2 527,20 €", ttcAmount: "15 163,20 €" },
        { title: "Menuiseries intérieures base", htAmount: "6 000,00 €", tva: "1 200,00 €", ttcAmount: "7 200,00 €" },
      ],
      subtotal: { htAmount: "18 636,00 €", tva: "3 727,20 €", ttcAmount: "22 363,20 €" }
    },
    {
      title: "ÉQUIPEMENTS TECHNIQUES",
      icon: "⚡",
      rows: [
        { title: "Électricité prestation base", htAmount: "12 000,00 €", tva: "2 400,00 €", ttcAmount: "14 400,00 €" },
        { title: "Plomberie prestations base", htAmount: "9 600,00 €", tva: "1 920,00 €", ttcAmount: "11 520,00 €" },
        { title: "Chauffage économique (PAC air/eau)", htAmount: "5 400,00 €", tva: "1 080,00 €", ttcAmount: "6 480,00 €" },
        { title: "Climatisation", htAmount: "7 800,00 €", tva: "1 560,00 €", ttcAmount: "9 360,00 €" },
      ],
      subtotal: { htAmount: "34 800,00 €", tva: "6 960,00 €", ttcAmount: "41 760,00 €" }
    },
    {
      title: "FINITIONS INTÉRIEURES",
      icon: "🎨",
      rows: [
        { title: "Plâtrerie base", htAmount: "11 400,00 €", tva: "2 280,00 €", ttcAmount: "13 680,00 €" },
        { title: "Carrelage base grand format", htAmount: "14 000,00 €", tva: "2 800,00 €", ttcAmount: "16 800,00 €" },
        { title: "Faïence base", htAmount: "2 100,00 €", tva: "420,00 €", ttcAmount: "2 520,00 €" },
        { title: "Peinture base", htAmount: "6 960,00 €", tva: "1 392,00 €", ttcAmount: "8 352,00 €" },
      ],
      subtotal: { htAmount: "34 460,00 €", tva: "6 892,00 €", ttcAmount: "41 352,00 €" }
    },
    {
      title: "ÉQUIPEMENTS SANITAIRES",
      icon: "🚿",
      rows: [
        { title: "2 Salles de bain/douche base", htAmount: "4 000,00 €", tva: "800,00 €", ttcAmount: "4 800,00 €" },
        { title: "SDE haut de gamme", htAmount: "4 200,00 €", tva: "840,00 €", ttcAmount: "5 040,00 €" },
      ],
      subtotal: { htAmount: "8 200,00 €", tva: "1 640,00 €", ttcAmount: "9 840,00 €" }
    },
    {
      title: "AMÉNAGEMENTS EXTÉRIEURS",
      icon: "🌿",
      rows: [
        { title: "Terrasse 4 m²", htAmount: "650,00 €", tva: "130,00 €", ttcAmount: "780,00 €" },
        { title: "Piscine enterrée béton 39 m² (4,50x8,50m)", htAmount: "52 650,00 €", tva: "10 530,00 €", ttcAmount: "63 180,00 €" },
      ],
      subtotal: { htAmount: "53 300,00 €", tva: "10 660,00 €", ttcAmount: "63 960,00 €" }
    }
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#c1a16a' }}>PROPOSITION FINANCIÈRE DÉTAILLÉE</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#787346' }}>COÛT DES TRAVAUX</h3>
          
          {sections.map((section, index) => (
            <PricingSection key={index} {...section} />
          ))}
        </div>

        {/* Total des travaux */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 mb-8 border-2 shadow-lg" style={{ borderColor: '#c1a16a' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(193, 161, 106, 0.5)' }}>
                  <th className="text-left px-4 py-3 text-lg" style={{ color: '#c1a16a' }}>TOTAL TRAVAUX</th>
                  <th className="text-right px-4 py-3" style={{ color: '#c1a16a' }}>MONTANT HT</th>
                  <th className="text-right px-4 py-3" style={{ color: '#c1a16a' }}>TVA 20%</th>
                  <th className="text-right px-4 py-3" style={{ color: '#c1a16a' }}>MONTANT TTC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100/50">
                  <td className="px-4 py-4 text-gray-900 font-semibold">COÛT DES TRAVAUX</td>
                  <td className="px-4 py-4 text-right text-gray-900 font-mono font-bold text-lg">277 125,00 €</td>
                  <td className="px-4 py-4 text-right text-gray-600 font-mono">55 425,00 €</td>
                  <td className="px-4 py-4 text-right font-mono font-bold text-lg" style={{ color: '#c1a16a' }}>332 550,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBreakdown;