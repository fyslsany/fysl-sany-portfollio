
import React from 'react';
import { Palette, Globe, Building2, ShoppingBag, BrainCircuit } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  location: string;
  services: string;
  icon: React.ReactNode;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'GreenLeaf Cafe',
    location: 'London, UK',
    services: 'Brand Identity & Logo Design',
    icon: <Palette size={40} />,
  },
  {
    id: 2,
    name: 'Al-Noor Medical Supplies',
    location: 'Dubai, UAE',
    services: 'Website Landing Page & Responsive Layout',
    icon: <Globe size={40} />,
  },
  {
    id: 3,
    name: 'TechSpark IT Solutions',
    location: 'Dhaka, Bangladesh',
    services: 'Corporate Branding & Social Media Visuals',
    icon: <Building2 size={40} />,
  },
  {
    id: 4,
    name: 'Sahara Boutique',
    location: 'Riyadh, Saudi Arabia',
    services: 'Creative Poster Design & E-commerce UI Concept',
    icon: <ShoppingBag size={40} />,
  },
   {
    id: 5,
    name: 'Global Study Network',
    location: 'New York, USA & Dhaka, Bangladesh',
    services: 'AI-Powered Research Workflow & Digital Content Design',
    icon: <BrainCircuit size={40} />,
  },
];

const ClientCard: React.FC<{ client: Client }> = ({ client }) => (
  <div className="glassmorphic rounded-xl border border-white/10 p-6 flex flex-col items-start h-full transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2">
    <div className="text-cyan-400 mb-4">
      {client.icon}
    </div>
    <h3 className="text-xl font-bold text-white">{client.name}</h3>
    <p className="text-sm text-gray-400 mb-4">{client.location}</p>
    <div className="w-full h-[1px] bg-white/10 my-2"></div>
    <p className="text-gray-300 flex-grow">{client.services}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">🌍 Client Spotlight</h2>
          <p className="text-lg text-gray-400 mt-2">Showcasing successful collaborations from around the globe.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map(client => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
