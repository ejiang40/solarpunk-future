import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const ARView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [highlights, setHighlights] = useState({
    windows: false,
    wall: false,
    landscape: false
  });

  // Placeholder images (using API placeholders)
  const placeholderImages = [
    '/api/placeholder/400/300',
    '/api/placeholder/350/250',
    '/api/placeholder/300/200'
  ];

  // Highlight placeholder images
  const highlightImages = {
    'windows-highlight': '/api/placeholder/400/300',
    'wall-highlight': '/api/placeholder/400/300',
    'landscape-highlight': '/api/placeholder/400/300'
  };

  // Simulated generated images based on selections
  const generatedImages = {
    'windows': '/api/placeholder/500/400',
    'wall': '/api/placeholder/550/450',
    'landscape': '/api/placeholder/600/500',
    'windows-wall': '/api/placeholder/620/450',
    'windows-landscape': '/api/placeholder/640/500',
    'wall-landscape': '/api/placeholder/660/550',
    'windows-wall-landscape': '/api/placeholder/680/600'
  };

  const toggleOption = (option) => {
    // Toggle the selected option
    const newOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    
    setSelectedOptions(newOptions);

    // Update highlights
    setHighlights(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleImageSelect = (index) => {
    // Only allow first placeholder to be selected
    if (index === 0) {
      setSelectedImage(index);
    } else {
      alert('Coming soon!');
    }
  };

  const handleGenerate = () => {
    if (selectedOptions.length === 0) return;

    setIsLoading(true);
    setTimeout(() => {
      const key = selectedOptions.sort().join('-');
      setGeneratedImage(generatedImages[key] || generatedImages[selectedOptions[0]]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="ar" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">AR Visualization Demo</h2>
        <div className="flex">
          <div className="w-3/4 pr-8 relative">
            {isLoading ? (
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Generating AI Visualization...</p>
              </div>
            ) : generatedImage ? (
              <img 
                src={generatedImage} 
                alt="Generated AR Visualization" 
                className="w-full h-96 object-cover rounded-lg"
              />
            ) : selectedImage !== null ? (
              <div className="relative">
                <img 
                  src={placeholderImages[selectedImage]} 
                  alt={`Selected Placeholder ${selectedImage + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                {/* Overlay highlights */}
                {Object.entries(highlights).map(([option, isActive]) => 
                  isActive ? (
                    <img
                      key={option}
                      src={highlightImages[`${option}-highlight`]}
                      alt={`${option} highlight`}
                      className="absolute top-0 left-0 w-full h-96 object-cover opacity-50 rounded-lg"
                    />
                  ) : null
                )}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {placeholderImages.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt={`Placeholder ${index + 1}`}
                    className={`${index === 0 ? 'cursor-pointer hover:opacity-75' : 'opacity-50'} transition-opacity`}
                    onClick={() => handleImageSelect(index)}
                  />
                ))}
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
              disabled={selectedOptions.length === 0 || selectedImage === null}
              className="w-full py-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-400"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

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