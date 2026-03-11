import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  
  const loadingMessages = [
    'Gathering pixels...',
    'Calibrating aesthetics...',
    'Optimizing vibes...',
    'Compiling minimalist code...',
    'Polishing shadows...',
    'Almost there...',
    'Ready to rock!',
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          onFinished();
        }, 500);
      }
      setProgress(currentProgress);
      
      // Update text based on progress
      const index = Math.floor((currentProgress / 100) * loadingMessages.length);
      if (index < loadingMessages.length) {
        setLoadingText(loadingMessages[index]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#facc15] flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Neo-brutalism Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-black bg-white -rotate-12 -z-10 shadow-neo"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-black bg-pink-500 rotate-12 -z-10 shadow-neo"></div>
      <div className="absolute top-1/4 right-20 w-16 h-16 border-4 border-black bg-lime-400 -z-10 shadow-neo animate-spin-slow"></div>

      <div className="w-full max-w-2xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-space font-black text-black tracking-tighter uppercase leading-none">
          Naufal Rakha<br />
          <span className="bg-black text-white px-4 inline-block transform rotate-1 border-4 border-white shadow-neo">Putra</span>
        </h1>
        
        <div className="space-y-4">
          <div className="relative w-full h-12 bg-white border-4 border-black shadow-neo overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
               <span className="text-white font-mono font-bold text-xl uppercase tracking-widest italic">
                {Math.round(progress)}%
               </span>
            </div>
          </div>
          
          <p className="font-mono font-bold text-xl text-black uppercase animate-pulse">
            {loadingText}
          </p>
        </div>
      </div>

      {/* Marquee effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white py-2 border-t-4 border-white overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 font-mono font-bold tracking-widest uppercase">
              Web Developer • Code Aesthete • Neo-Brutalism • React.js • Tailwind CSS • Minimalist •
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default LoadingScreen;
