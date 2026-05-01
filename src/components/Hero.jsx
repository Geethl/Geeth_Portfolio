import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ flex: 1, paddingRight: '2rem' }} className="animate-fade-in">
        <h2 style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', marginBottom: '1rem' }}>
          4th Year IT Undergraduate at SLIIT
        </h2>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          Hi, I'm <br/><span className="text-gradient">Geeth Lakshan</span>
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Based in Kurunegala, Sri Lanka. My core technical interests lie in full-stack web development and mobile application architecture, particularly utilizing the MERN stack and React Native. 
          <br/><br/>
          I am currently leading a final-year research project titled <strong>"Aegis Life,"</strong> focusing on building an integrated AI health and wellness platform.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#cv" className="btn btn-primary">
            View CV <ChevronRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-2">
        <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '4px' }}>
            <div style={{ position: 'absolute', width: '150%', height: '150%', background: 'conic-gradient(from 90deg at 50% 50%, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0) 100%)', animation: 'spin 8s linear infinite' }}></div>
            <div style={{ position: 'absolute', inset: '4px', background: 'var(--bg-color)', borderRadius: '12px', zIndex: 1, overflow: 'hidden' }}>
                <img src="./Geeth.png" alt="Geeth Lakshan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
