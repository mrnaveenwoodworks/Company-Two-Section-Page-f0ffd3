import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="600" height="600"><rect width="256" height="256" fill="none"/><polygon points="60 64 24 184 96 184 60 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="158" cy="74" r="42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="136" y="156" width="88" height="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Innovating Solutions for Tomorrow's Challenges
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            We combine expertise and technology to deliver exceptional results 
            for businesses across industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 text-center"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Company brand image */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 opacity-20 md:opacity-40 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyQmNvbXBhbnklMkJicmFuZCUyQmdyYXBoaWN8ZW58MHx8fHwxNzQ3MzY4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="abstract company brand graphic" />
      </div>
    </div>
  );
};

export default HeroSection;