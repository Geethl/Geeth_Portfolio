import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="about" className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ flex: 1, paddingRight: '2rem' }} className="animate-fade-in">
        <h2 style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', marginBottom: '1rem' }}>
          IT Undergraduate at SLIIT
        </h2>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
          Hi, I'm <br /><span className="text-gradient">Geeth Lakshan</span>
        </h1>
        <div style={{ fontSize: '1.75rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '1.5rem', height: '40px' }}>
          <Typewriter
            options={{
              strings: ['Full-Stack Web Developer', 'AI Project Lead', 'Future IT Project Manager', 'SQA Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Based in Kurunegala, Sri Lanka. My core technical interests lie in full-stack web development and mobile application architecture, particularly utilizing the MERN stack and React Native.
          <br /><br />
          I am currently leading a final-year research project titled <strong>"Gaja Saviya,"</strong> which focuses on building an integrated AI framework for Human-Elephant Conflict mitigation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#cv" className="btn btn-primary">
            View CV <ChevronRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            <a href="https://www.linkedin.com/in/geeth-lakshan-a075b5297" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:lakshang614@gmail.com" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
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
