import React from "react";
import { FaUniversalAccess, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

const stats = [
  { label: "Translations", value: "1M+" },
  { label: "Active Users", value: "50k+" },
  { label: "Accuracy", value: "98%" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-rich-black-950 text-neutral-200 pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rich-black-900 to-rich-black-950 -z-20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
        <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-gold-900/10 backdrop-blur-sm mb-4">
            <span className="text-gold-300 text-xs font-sans tracking-[0.2em] uppercase">Our Mission</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-display text-neutral-100 leading-tight">
          Empowering <span className="text-transparent bg-clip-text bg-gold-gradient">Communication</span>
        </h1>
        <p className="text-xl text-neutral-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between spoken languages and Indian Sign Language through state-of-the-art AI technology.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: FaUniversalAccess, title: "Accessibility", desc: "Making digital content accessible to the Deaf and Hard of Hearing community." },
          { icon: FaHandHoldingHeart, title: "Inclusivity", desc: "Fostering a world where language barriers do not hinder connection." },
          { icon: FaUsers, title: "Community", desc: "Building a supportive ecosystem for ISL learners and users." }
        ].map((item, index) => (
          <div key={index} className="bg-rich-black-900 p-10 rounded-sm border border-white/5 hover:border-gold-500/50 hover:shadow-glow transition-all duration-500 group text-center">
            <div className="w-20 h-20 mx-auto bg-rich-black-950 rounded-full flex items-center justify-center text-4xl text-gold-400 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <item.icon />
            </div>
            <h3 className="text-2xl font-display font-medium text-neutral-100 mb-4">{item.title}</h3>
            <p className="text-neutral-500 font-sans font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-rich-black-900 rounded-sm p-16 max-w-5xl mx-auto text-center border border-white/5 relative overflow-hidden shadow-luxury">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gold-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-sans uppercase tracking-[0.2em] text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}