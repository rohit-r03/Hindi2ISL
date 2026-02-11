import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-rich-black-950/90 backdrop-blur-md border-b border-white/5 shadow-luxury">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Project Name */}
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-rich-black-950 font-display font-bold text-xl shadow-glow transition-transform group-hover:scale-105">
            ISL
          </div>
          <span className="text-2xl font-display font-bold tracking-widest text-gold-100 uppercase">
            Hindi <span className="text-gold-400">ISL</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium font-sans tracking-wide">
          {[
            { name: 'Home', path: '/' },
            { name: 'Translate', path: '/dashboard' },
            { name: 'About', path: '/about' },
            { name: 'Team', path: '/team' }
          ].map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `relative px-1 py-1 text-sm uppercase transition-all duration-500 hover:text-gold-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gold-400 before:transition-all before:duration-300 hover:before:w-full ${
                    isActive ? 'text-gold-400 font-semibold before:w-full' : 'text-neutral-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
            <NavLink 
                to="/dashboard" 
                className="hidden md:block px-8 py-3 bg-transparent border border-gold-400/30 text-gold-300 font-sans text-sm tracking-wider uppercase hover:bg-gold-400 hover:text-rich-black-950 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
                Get Started
            </NavLink>

            {/* Mobile Menu Button */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none text-2xl text-gold-200 hover:text-gold-400 transition-colors"
            >
            {open ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-rich-black-900/95 backdrop-blur-xl border-t border-gold-900/50 px-6 py-8 space-y-6 absolute w-full left-0 shadow-2xl h-screen">
          {[
            { name: 'Home', path: '/' },
            { name: 'Translate', path: '/dashboard' },
            { name: 'About', path: '/about' },
            { name: 'Team', path: '/team' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-2xl font-display uppercase tracking-widest ${
                  isActive ? 'text-gold-400' : 'text-neutral-400 hover:text-gold-200'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
