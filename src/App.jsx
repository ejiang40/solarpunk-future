import React from 'react';
import { Camera } from 'lucide-react';

const Header = () => (
  <header className="bg-green-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">A Vision Into a Solarpunk Future</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-green-200">About</a>
        <a href="#ar" className="hover:text-green-200">AR View</a>
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
      description: 'Website framework, background research, and documentation//placeholder'
    },
    {
      name: 'Leon Li',
      role: 'AI Lead',
      description: 'ChatGPT token and API key implementation//placeholder'
    },
    {
      name: 'Edwin Jiang',
      role: 'Implementation Lead',
      description: 'Program implementation and development//placeholder'
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

const ARPlaceholder = () => (
  <section id="ar" className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">AR Visualization</h2>
      <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">AR View Coming Soon</p>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Principles />
      <ARPlaceholder />
      <Team />
    </div>
  );
};

export default App;