import  { useState } from 'react';
import video from "./Smart City Digital City Video.mp4";
import image from "./woman.jpg"
import { 
  Rocket, 
  Code2, 
  Cpu, 
  Globe, 
  Shield, 
  Sparkles,
  Menu,
  X,
  Zap,
  Brain,
  Cloud,
  Database,
  Network,
  Lock,
  Server,
  Laptop,
  HeartHandshake,
  Users,
  MessageSquare,
  Headphones,
  Wrench
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black text-white relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-red-circuits-527-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Header */}
      <header className="glass fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold">TechVerse</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-red-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-red-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-red-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-red-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 transition-colors">Contact</button>
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0   w-screen glass md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[-200%]'}`}>
          <div className="flex bg-red-500 bg-opacity-55  h-screen flex-col items-center justify-center  space-y-8 text-xl">
            <button onClick={() => scrollToSection('home')} className="hover:text-red-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-red-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-red-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-red-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 transition-colors">Contact</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-screen pt-24 pb-12">
          <div className="text-center mb-16 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
              Welcome to the Future
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the intersection of technology and innovation
            </p>
          </div>

          <div className="bento-grid">
            {/* Innovation Hub */}
            <div className="bento-item glass rounded-2xl p-6 col-span-2 hover:bg-red-900/10 transition-colors overflow-hidden">
  
  <div className="relative h-48  -m-6 ">
    <div className='w-full h-full'>
      <img className='hover:scale-125 transition-all ease-in-out duration-300 w-full h-full object-cover' src={image} alt="" />
    </div>
  </div>
</div>

            {/* Development */}
            <div className="bento-item glass rounded-2xl p-6 row-span-2 hover:bg-red-900/10 transition-colors overflow-hidden">
              <div className="relative h-64 -mx-6 -mt-6 ">
               <video
                src={video}
                autoPlay 
                loop 
                muted
                className="w-full h-full object-cover"
                ></video>
              </div>
              <Code2 className="w-10 h-10 text-red-500 mt-6 mb-4" />
              <h2 className=" text-2xl font-bold mb-2">Development</h2>
              <p className="text-gray-300">Creating robust solutions with modern technologies</p>
            </div>

            {/* Processing Power */}
            <div className="bento-item glass rounded-2xl p-6 hover:bg-red-900/10 transition-colors overflow-hidden">
              <div className="hover:scale-125 transition-all ease-in-out duration-300 relative h-48 -mx-6 -mt-6 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Processing"
                  className=" w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <Cpu className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Processing</h2>
              <p className="text-gray-300">Harnessing computational power</p>
            </div>

            {/* Global Network */}
            <div className="bento-item glass rounded-2xl p-6 overflow-hidden hover:bg-red-900/10 transition-colors">
              <div className="hover:scale-125 transition-all ease-in-out duration-300 relative h-48 -mx-6 -mt-6 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Network"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <Globe className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Global Network</h2>
              <p className="text-gray-300">Connected worldwide, always available</p>
            </div>

            {/* Security */}
            <div className="bento-item glass rounded-2xl p-6 hover:bg-red-900/10 transition-colors overflow-hidden">
              <div className="relative h-48 -mx-6 -mt-6 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Security"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <Shield className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Security</h2>
              <p className="text-gray-300">Protected by advanced security measures</p>
            </div>

            {/* Future Tech */}
            <div className="bento-item glass rounded-2xl p-6 col-span-2 hover:bg-red-900/10 transition-colors overflow-hidden">
              <div className="relative h-48 -mx-6 -mt-6 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Future Tech"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <Sparkles className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Future Tech</h2>
              <p className="text-gray-300">Glimpse into tomorrow's technological landscape</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Brain className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI Technology</h3>
                <p className="text-gray-300">Advanced artificial intelligence solutions</p>
              </div>
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Computing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Cloud className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
                <p className="text-gray-300">Scalable cloud infrastructure</p>
              </div>
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Data Analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Database className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                <p className="text-gray-300">Powerful data insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-64 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Users className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A diverse group of experts passionate about technology and innovation.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-64 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <HeartHandshake className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Empowering businesses through cutting-edge technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Consulting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <MessageSquare className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Consulting</h3>
                <p className="text-gray-300">Expert guidance for your technical needs</p>
              </div>
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Laptop className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Development</h3>
                <p className="text-gray-300">Custom software solutions</p>
              </div>
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <Headphones className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Support</h3>
                <p className="text-gray-300">24/7 technical assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 overflow-hidden">
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Contact"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                    <p className="text-gray-300">We're here to help with your technology needs</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-red-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-red-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-red-500 focus:outline-none"></textarea>
                  </div>
                  <button className="w-full py-3 px-6 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;