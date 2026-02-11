import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-rich-black-950 text-neutral-400 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-2 space-y-6 max-w-md">
            <h2 className="text-3xl font-display font-bold text-neutral-100 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-rich-black-950 shadow-glow text-lg">ISL</span>
              Hindi <span className="text-gold-400">ISL</span>
            </h2>
            <p className="leading-relaxed font-light">
              Bridging communication gaps with AI-powered Indian Sign Language translation. Empowering accessibility for everyone, everywhere.
            </p>
            {/* <div className="flex gap-4">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-rich-black-900 rounded-sm hover:bg-gold-500 hover:text-rich-black-950 transition-all shadow-lg hover:shadow-glow group">
                  <Icon className="text-xl transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-neutral-100 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Translate', 'About', 'Team'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-neutral-100 tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3 font-light">
              <li className="flex items-start gap-3">
                 <span className="text-gold-400 mt-1">●</span> 
                 <span>Noida, India</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-gold-400 mt-1">●</span>
                 <a href="mailto:contactwithhindi2isl@gmail.com" className="hover:text-gold-400 transition-colors">contactwithhindi2isl@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-gold-400 mt-1">●</span>
                 <span>+91 62060 58303
                 </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-sm font-light tracking-wide flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Hindi ISL Translator. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}