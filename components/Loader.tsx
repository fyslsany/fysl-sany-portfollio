
import React from 'react';

const Face: React.FC<{ children: React.ReactNode; transform: string }> = ({ children, transform }) => (
  <div
    className="absolute w-40 h-40 border-2 border-cyan-400/50 flex items-center justify-center text-4xl font-bold glassmorphic text-cyan-400"
    style={{ transform }}
  >
    {children}
  </div>
);

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a14]">
      <div className="w-40 h-40" style={{ perspective: '1000px' }}>
        <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', animation: 'spin 12s infinite linear' }}>
          <Face transform="rotateY(0deg) translateZ(80px)">F</Face>
          <Face transform="rotateY(90deg) translateZ(80px)">A</Face>
          <Face transform="rotateY(180deg) translateZ(80px)">F</Face>
          <Face transform="rotateY(-90deg) translateZ(80px)">A</Face>
          <Face transform="rotateX(90deg) translateZ(80px)">{''}</Face>
          <Face transform="rotateX(-90deg) translateZ(80px)">{''}</Face>
        </div>
      </div>
      <p className="mt-12 text-lg text-cyan-400 tracking-widest animate-pulse">Initializing Interface...</p>
      <style>{`
        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
