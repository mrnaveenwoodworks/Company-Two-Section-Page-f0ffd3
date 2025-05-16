import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" className="text-blue-600">
              <rect width="256" height="256" fill="none"/>
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,128H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v48h32a8,8,0,0,1,0,16Z" fill="currentColor"/>
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">Company Name</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" className="text-blue-400">
                  <rect width="256" height="256" fill="none"/>
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,128H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v48h32a8,8,0,0,1,0,16Z" fill="currentColor"/>
                </svg>
                <span className="ml-2 text-lg font-semibold">Company Name</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">© 2023 Company Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com/company" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
                  <rect width="256" height="256" fill="none"/>
                  <path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm68-44H60A28,28,0,0,0,32,64V192a28,28,0,0,0,28,28H196a28,28,0,0,0,28-28V64A28,28,0,0,0,196,36Zm-4,148H64a8,8,0,0,1-8-8V80H88a72,72,0,0,0,0,96h96v8A8,8,0,0,1,192,184Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com/company" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
                  <rect width="256" height="256" fill="none"/>
                  <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/company" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
                  <rect width="256" height="256" fill="none"/>
                  <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <line x1="88" y1="80" x2="88" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;