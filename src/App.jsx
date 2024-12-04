import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const ARView = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [customOverlays, setCustomOverlays] = useState({
    windows: false,
    wall: false,
    landscape: false
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const placeholderImages = [
    '/solarpunk-future/images/placeholder-1.png',
    '/solarpunk-future/images/placeholder-2.jpg',
    '/solarpunk-future/images/placeholder-3.png'
  ];

  const highlightImages = {
    'windows-highlight': '/solarpunk-future/images/WindowsOverlay.png',
    'wall-highlight': '/solarpunk-future/images/WallOverlay.png',
    'landscape-highlight': '/solarpunk-future/images/LandscapeOverlay.png'
  };

  const customImages = {
    'windows': '/solarpunk-future/images/WindowsCustom.png',
    'wall': '/solarpunk-future/images/WallCustom.png',
    'landscape': '/solarpunk-future/images/LandscapeCustom.png'
  };

  const toggleOption = (option) => {
    const newOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    
    setSelectedOptions(newOptions);

    setCustomOverlays(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleImageSelect = (index) => {
    if (index === 0) {
      setSelectedImage(index);
    }
  };

  const handleGenerate = () => {
    if (selectedOptions.length === 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerating(true);
    }, 1500);
  };

  const renderComingSoonOverlay = () => (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <p className="text-xl font-bold">Coming Soon!</p>
      </div>
    </div>
  );

  return (
    <section id="ar" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">AR Visualization Demo</h2>
        <div className="flex flex-col">
          <div className="flex justify-center space-x-4 mb-4">
            {placeholderImages.map((image, index) => (
              <div 
                key={index} 
                className="relative w-1/4 cursor-pointer"
                onClick={() => index === 0 ? handleImageSelect(index) : null}
              >
                <img 
                  src={image} 
                  alt={`Placeholder ${index + 1}`}
                  className={`w-full h-64 object-cover rounded-lg ${
                    index !== 0 ? 'opacity-50' : ''
                  }`}
                />
                {index !== 0 && renderComingSoonOverlay()}
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="w-3/4 pr-8 relative">
              {isLoading ? (
                <div className="bg-gray-200 h-128 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Generating AI Visualization...</p>
                </div>
              ) : (
                <div className="relative">
                  {/* Base Image */}
                  <img 
                    src={placeholderImages[selectedImage]} 
                    alt={`Selected Placeholder ${selectedImage + 1}`}
                    className="w-full h-128 object-cover rounded-lg"
                  />

                  {/* Overlay Highlights - Only show when overlays are selected and not generating */}
                  {!isGenerating && Object.entries(customOverlays).map(([option, isActive]) => 
                    isActive ? (
                      <img
                        key={`highlight-${option}`}
                        src={highlightImages[`${option}-highlight`]}
                        alt={`${option} highlight`}
                        className="absolute top-0 left-0 w-full h-128 object-cover opacity-50 rounded-lg pointer-events-none"
                      />
                    ) : null
                  )}

                  {/* Custom Modifications - Show only after generating */}
                  {isGenerating && Object.entries(customOverlays).map(([option, isActive]) => 
                    isActive ? (
                      <img
                        key={`custom-${option}`}
                        src={customImages[option]}
                        alt={`${option} custom modification`}
                        className="absolute top-0 left-0 w-full h-128 object-cover rounded-lg pointer-events-none"
                      />
                    ) : null
                  )}
                </div>
              )}
            </div>
            <div className="w-1/4 space-y-4">
              {['windows', 'wall', 'landscape'].map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`w-full py-2 rounded-lg transition-colors ${
                    selectedOptions.includes(option)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
              <button
                onClick={handleGenerate}
                disabled={selectedOptions.length === 0}
                className="w-full py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-400"
              >
                Generate
              </button>
              <button
                onClick={() => {
                  setIsGenerating(false);
                  setSelectedOptions([]);
                  setCustomOverlays({
                    windows: false,
                    wall: false,
                    landscape: false
                  });
                }}
                className="w-full py-2 rounded-lg bg-red-500 text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Rest of the component remains the same as in the original file
const Header = () => (
  <header className="bg-green-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">A Vision Into a Solarpunk Future</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-green-200">About</a>
        <a href="#ar" className="hover:text-green-200">Demo Example</a>
        <a href="#principles" className="hover:text-green-200">Philosophy</a>
        <a href="#team" className="hover:text-green-200">Team</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Revolutionize our Sprawling Urban Landscape</h2>
      <p className="text-xl mb-8">Experience a sustainable future through augmented reality</p>
      <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg flex items-center mx-auto">
        <Camera className="mr-2" />
        Launch AR View
      </button>
    </div>
  </section>
);

const Principles = () => {
  const principles = [
    { title: 'Biomimicry', description: 'Create designs which are meant to fit in with nature and not the other way around; Discover architectural ethics from the planet itself.'},
    { title: 'Sustainability', description: 'Explore environmentally conscious and sustainable options; envision eco-technology.' },
    { title: 'Passive Design', description: 'Discover natural heating, cooling, and lighting solutions; strive for little to no invasiveness on natural surroundings.' },
    { title: 'Adaptability', description: 'Envision flexible spaces that evolve with nature\'s needs; fight against the environmental crisis.' },
    { title: 'Community Focus', description: 'Design spaces that foster community interaction and symbiosis, with people and with nature.' }
  ];

  return (
    <section id="principles" className="py-16 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Design Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-800">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: 'Tanner Lamar',
      role: 'Communication & Framework Lead',
      description: 'Website framework, background research, documentation & philosophy head'
    },
    {
      name: 'Leon Li',
      role: 'AI Lead',
      description: 'AI Implementation / Image Modification'
    },
    {
      name: 'Edwin Jiang',
      role: 'Implementation Lead',
      description: 'Website framework'
    }
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-green-800">{member.name}</h3>
              <h4 className="text-lg text-green-600 mb-2">{member.role}</h4>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Principles />
      <ARView />
      <Team />
    </div>
  );
};

export default App;