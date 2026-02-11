import React, { useState } from "react";
import { FaCopy, FaMicrophone, FaPlay } from "react-icons/fa";

export default function Dashboard() {
  const [text, setText] = useState("Hello");
  const [inputLanguage, setInputLanguage] = useState("Hindi"); // Default to Hindi
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-rich-black-950 flex items-center justify-center px-4 pt-24 pb-12 bg-luxury-gradient">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-stretch bg-rich-black-900 shadow-luxury rounded-sm p-6 md:p-10 border border-white/5 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl -z-10"></div>
        
        {/* Left Section - Input */}
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display text-neutral-100 mb-2">
                    Translate to <span className="text-gold-400">ISL</span>
                </h1>
                <p className="text-neutral-500 font-sans font-light tracking-wide">
                Convert {inputLanguage} text into visual communication.
                </p>
            </div>
            
            {/* Language Toggle */}
            <div className="flex bg-rich-black-950 border border-neutral-800 rounded-sm p-1">
                <button 
                    onClick={() => setInputLanguage("English")}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                        inputLanguage === "English" 
                        ? "bg-gold-500 text-rich-black-950 shadow-glow" 
                        : "text-neutral-500 hover:text-gold-200"
                    }`}
                >
                    English
                </button>
                <button 
                    onClick={() => setInputLanguage("Hindi")}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                        inputLanguage === "Hindi" 
                        ? "bg-gold-500 text-rich-black-950 shadow-glow" 
                        : "text-neutral-500 hover:text-gold-200"
                    }`}
                >
                    Hindi
                </button>
            </div>
          </div>

          <div className="relative flex-grow group">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-full min-h-[250px] bg-rich-black-950 border border-neutral-800 rounded-sm p-6 focus:border-gold-500/50 focus:outline-none text-lg text-neutral-200 placeholder-neutral-700 resize-none transition-colors font-sans"
              placeholder={`Enter ${inputLanguage} text manually...`}
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
               <button 
                  onClick={handleCopy}
                  className="p-3 bg-rich-black-900 border border-neutral-800 text-neutral-400 rounded-sm hover:text-gold-400 hover:border-gold-400 transition-all"
                  title="Copy text"
                >
                  {isCopied ? <span className="text-xs text-gold-400 font-bold uppercase tracking-widest">Copied</span> : <FaCopy />}
                </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-rich-black-950 px-8 py-4 rounded-sm font-bold font-sans uppercase tracking-wider shadow-glow hover:shadow-lg transition-all active:translate-y-0.5">
              <FaPlay /> Translate Now
            </button>
            <button className="flex-none flex items-center justify-center bg-transparent border border-neutral-700 hover:border-gold-400 text-neutral-400 hover:text-gold-300 p-4 rounded-sm transition-all" title="Voice Input">
               <FaMicrophone className="text-xl" />
            </button>
          </div>
        </div>

        {/* Right Section - Output */}
        <div className="flex flex-col bg-black rounded-sm border border-neutral-800 overflow-hidden relative shadow-inner">
          <div className="absolute top-4 left-4 z-10 bg-rich-black-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold-400 border border-gold-900/30">
             Live Output
          </div>
          
          <div className="flex-grow flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rich-black-800 to-black relative">
            <div className="relative w-full aspect-video max-w-md mx-auto">
               <div className="absolute inset-0 bg-gold-500/5 rounded-full blur-3xl animate-pulse"></div>
               <img 
                  className="relative w-full h-full object-contain drop-shadow-2xl z-10 opacity-90" 
                  src="https://i.pinimg.com/originals/9e/36/92/9e369214c2c804cd74057866789d2294.gif" 
                  alt="ISL Animation"
                />
            </div>
          </div>

          <div className="p-8 bg-rich-black-900 border-t border-neutral-800">
             <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Translating</p>
             <p className="text-xl font-display font-medium text-neutral-100 line-clamp-2 leading-relaxed">"{text}"</p>
          </div>
        </div>

      </div>
    </div>
  );
}
