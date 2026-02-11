import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aditya",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    bio: "Passionate about accessibility and AI. Building bridges with code."
  },
  {
    name: "Member 2",
    role: "UI/UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Designer",
    bio: "Crafting intuitive and beautiful experiences for every user."
  },
  {
    name: "Member 3",
    role: "AI Researcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Researcher",
    bio: "Pushing the boundaries of what's possible with linguistic models."
  },
  {
    name: "Member 4",
    role: "Community Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager",
    bio: "Connecting people and fostering a vibrant community."
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-rich-black-950 text-neutral-200 pt-24 pb-12 px-4 relative">
       {/* Background Decor */}
       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rich-black-900 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-gold-900/10 backdrop-blur-sm mb-4">
                 <span className="text-gold-300 text-xs font-sans tracking-[0.2em] uppercase">The Minds Behind</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-neutral-100">
            Meet Our <span className="text-transparent bg-clip-text bg-gold-gradient">Visionaries</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-sans font-light leading-relaxed">
            A dedicated team of innovators working together to make the world more accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-rich-black-900 rounded-sm overflow-hidden border border-white/5 hover:border-gold-500/50 shadow-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
              <div className="h-48 bg-rich-black-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black-900 to-transparent"></div>
                <img src={member.image} alt={member.name} className="w-32 h-32 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              <div className="p-8 text-center relative">
                <h3 className="text-xl font-bold font-display text-neutral-100 mb-1">{member.name}</h3>
                <p className="text-gold-400 text-xs uppercase tracking-widest font-sans mb-4">{member.role}</p>
                <p className="text-neutral-500 text-sm mb-6 font-sans font-light leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors"><FaGithub size={18} /></a>
                  <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors"><FaLinkedin size={18} /></a>
                  <a href="#" className="text-neutral-400 hover:text-gold-400 transition-colors"><FaTwitter size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}