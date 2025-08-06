

const BeachElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating beach elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">
        ⛱️
      </div>
      
      <div className="absolute top-32 right-20 text-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}>
        🌊
      </div>
      
      <div className="absolute top-48 left-1/4 text-2xl animate-float opacity-40" style={{ animationDelay: '2s' }}>
        🐚
      </div>
      
      <div className="absolute top-64 right-1/3 text-3xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>
        🏖️
      </div>
      
      <div className="absolute bottom-32 left-16 text-4xl animate-float opacity-50" style={{ animationDelay: '0.5s' }}>
        🌴
      </div>
      
      <div className="absolute bottom-48 right-16 text-2xl animate-float opacity-40" style={{ animationDelay: '3s' }}>
        🐢
      </div>
      
      <div className="absolute top-96 left-2/3 text-xl animate-float opacity-30" style={{ animationDelay: '2.5s' }}>
        🦀
      </div>
      
      <div className="absolute bottom-72 left-1/3 text-2xl animate-float opacity-50" style={{ animationDelay: '1.2s' }}>
        ⭐
      </div>

      {/* Scattered footprints */}
      <div className="absolute top-1/3 left-1/5 text-lg opacity-20 rotate-12">
        👣
      </div>
      
      <div className="absolute top-2/3 right-1/4 text-lg opacity-15 -rotate-12">
        👣
      </div>
      
      <div className="absolute bottom-1/3 left-2/3 text-lg opacity-25 rotate-45">
        👣
      </div>

      {/* Beach towels */}
      <div className="absolute top-1/2 left-8 text-2xl opacity-30 rotate-12">
        🏄‍♀️
      </div>
      
      <div className="absolute bottom-1/4 right-8 text-2xl opacity-25 -rotate-12">
        🏄‍♂️
      </div>

      {/* Animated waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-ocean-300/30 to-transparent animate-wave"
          style={{ clipPath: 'polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-ocean-400/20 to-transparent animate-wave-slow"
          style={{ 
            clipPath: 'polygon(0 60%, 100% 85%, 100% 100%, 0% 100%)',
            animationDelay: '-2s'
          }}
        ></div>
      </div>
    </div>
  );
};

export default BeachElements;