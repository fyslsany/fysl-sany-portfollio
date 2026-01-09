import React from 'react';

// Added optional '?' to children to fix missing property errors when no content is provided
const Face: React.FC<{ children?: React.ReactNode; transform: string }> = ({ children, transform }) => (
  <div
    className="absolute w-40 h-40 border-2 border-cyan-400/50 flex items-center justify-center text-4xl font-bold glassmorphic text-cyan-400 select-none"
    style={{ transform }}
  >
    {children}
  </div>
);

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a14] overflow-hidden" aria-hidden="true">
      <div className="w-40 h-40" style={{ perspective: '1000px' }}>
        <div className="w-full h-full relative loader-cube">
          <Face transform="rotateY(0deg) translateZ(80px)">F</Face>
          <Face transform="rotateY(90deg) translateZ(80px)">A</Face>
          <Face transform="rotateY(180deg) translateZ(80px)">F</Face>
          <Face transform="rotateY(-90deg) translateZ(80px)">A</Face>
          <Face transform="rotateX(90deg) translateZ(80px)"></Face>
          <Face transform="rotateX(-90deg) translateZ(80px)"></Face>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-cyan-400 tracking-[0.3em] font-medium animate-pulse uppercase">
          Initializing Interface
        </p>
        <div className="mt-2 w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-cyan-400 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0; transform: translateX(-100%); }
          50% { width: 50%; transform: translateX(50%); }
          100% { width: 0; transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;