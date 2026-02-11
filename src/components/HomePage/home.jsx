 
import Cards from "../cards/Cards";
// import '/index.css';

function Home(){
    const features = [
        {
            image: "https://images.controlshift.app/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzM2NDUsInB1ciI6ImJsb2JfaWQifX0=--04c275206eb9acdd7059973c7ef80054d0dc9d06/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJnaWYiLCJzdHJpcCI6dHJ1ZSwicmVzaXplX3RvX2ZpdCI6WzEwMjQsNTEyXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--d144d98db292d06fb25170dac510acefa91ec255/ISL.gif",
            title: "Streamlining",
            description: "Fostering seamless collaboration among Developers and IT Operations with precision.",
            link: "#",
            alt: "Streamlining Design illustration",
            buttonText: "Read More"
        },
        {
            image: "https://images.controlshift.app/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzM2NDUsInB1ciI6ImJsb2JfaWQifX0=--04c275206eb9acdd7059973c7ef80054d0dc9d06/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJnaWYiLCJzdHJpcCI6dHJ1ZSwicmVzaXplX3RvX2ZpdCI6WzEwMjQsNTEyXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--d144d98db292d06fb25170dac510acefa91ec255/ISL.gif",
            title: "Streamlining Design",
            description: "Fostering seamless collaboration among Developers and IT Operations with precision.",
            link: "#",
            alt: "Streamlining Design illustration",
            buttonText: "Read More"
        },
        {
            image: "https://images.controlshift.app/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzM2NDUsInB1ciI6ImJsb2JfaWQifX0=--04c275206eb9acdd7059973c7ef80054d0dc9d06/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJnaWYiLCJzdHJpcCI6dHJ1ZSwicmVzaXplX3RvX2ZpdCI6WzEwMjQsNTEyXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--d144d98db292d06fb25170dac510acefa91ec255/ISL.gif",
            title: "Streamlining Design",
            description: "Fostering seamless collaboration among Developers and IT Operations with precision.",
            link: "#",
            alt: "Streamlining Design illustration",
            buttonText: "Read More"
        },
        {
            image: "https://images.controlshift.app/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzM2NDUsInB1ciI6ImJsb2JfaWQifX0=--04c275206eb9acdd7059973c7ef80054d0dc9d06/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJnaWYiLCJzdHJpcCI6dHJ1ZSwicmVzaXplX3RvX2ZpdCI6WzEwMjQsNTEyXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--d144d98db292d06fb25170dac510acefa91ec255/ISL.gif",
            title: "Streamlining Design",
            description: "Fostering seamless collaboration among Developers and IT Operations with precision.",
            link: "#",
            alt: "Streamlining Design illustration",
            buttonText: "Read More"
        }
    ];
    return(
       <>
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 px-4 relative overflow-hidden bg-rich-black-950">
        {/* Luxury Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rich-black-800/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 -z-10 animate-pulse"></div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 p-8 md:pl-16">
            <div className="content space-y-8">
                <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-gold-900/10 backdrop-blur-sm">
                    <span className="text-gold-300 text-xs font-sans tracking-[0.2em] uppercase">The Future of Translation</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] text-neutral-100">
                    Turning Words into <br/> <span className="text-transparent bg-clip-text bg-gold-gradient">Visual Art</span>
                </h1>
                <p className="text-xl text-neutral-400 font-sans font-light max-w-lg leading-relaxed">
                    Bridging the gap with Indian Sign Language through an elegant, AI-powered translation experience.
                </p>
                <div className="flex gap-6 justify-center md:justify-start pt-4">
                    <button className="px-10 py-4 bg-gold-500 hover:bg-gold-400 text-rich-black-950 font-sans font-semibold text-sm tracking-wider uppercase rounded-sm shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-1">
                        Get Started
                    </button>
                    <button className="px-10 py-4 border border-neutral-700 hover:border-gold-400 text-neutral-300 hover:text-gold-300 font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-rich-black-800 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 z-10">
            <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-300 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-white/5 transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-rich-black-950/20 mix-blend-overlay z-10"></div>
                    <img 
                        src="https://i.pinimg.com/originals/6a/dc/6a/6adc6a4018d5e1b69e7553ee704adb41.gif" 
                        alt="ISL Animation" 
                        className="w-full max-w-md object-cover grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700"
                    />
                </div>
            </div>
        </div>   
    </div>

    <section className="py-24 px-4 bg-rich-black-900 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <h2 className="text-sm font-sans tracking-[0.3em] text-gold-500 uppercase mb-4">Features</h2>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                    Designed for <span className="italic font-serif text-gold-200">Excellence</span>
                </h1>
                <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
             </div>
             
             <div className="flex flex-wrap justify-center gap-10">
    {features.map((feature, index) => (
       <Cards
         key={index}
         image={feature.image}
         title={feature.title}
         description={feature.description}
         link={feature.link}
         alt={feature.alt}
         buttonText={feature.buttonText}
       />
     ))}
             </div>
        </div>
    </section>

    <section className="py-24 px-4 bg-rich-black-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <h2 className="text-sm font-sans tracking-[0.3em] text-gold-500 uppercase mb-4">Process</h2>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-white">
                    Seamless <span className="italic font-serif text-gold-200">Integration</span>
                </h1>
             </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative px-4">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent -z-10"></div>

                {[
                    { step: "I", title: "Input Text", desc: "Type or speak the Hindi sentence you want to translate." },
                    { step: "II", title: "Processing", desc: "Our AI analyzes the text and maps it to ISL grammar and signs." },
                    { step: "III", title: "Get Translation", desc: "Watch the animated avatar perform the sign language translation instantly." }
                ].map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center group">
                        <div className="w-32 h-32 rounded-full bg-rich-black-900 border border-gold-500/30 flex items-center justify-center text-4xl font-display font-bold text-gold-400 mb-8 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-gold-400 group-hover:shadow-glow">
                            {item.step}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-neutral-200 mb-4 group-hover:text-gold-300 transition-colors">{item.title}</h3>
                        <p className="text-neutral-500 font-sans font-light max-w-xs leading-relaxed group-hover:text-neutral-300 transition-colors">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
     </>   
    )
}
export default Home;