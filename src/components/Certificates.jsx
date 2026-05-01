import React from 'react';
import { Award } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Certificates = ({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">Certificates & <span className="text-gradient">Achievements</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {certificates.map((cert, idx) => (
          <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <div 
              className="glass-panel animate-fade-in" 
              style={{ animationDelay: `${idx * 0.2}s`, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Award className="text-gradient" size={28} /> {cert.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {cert.content}
              </p>
              <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert("Certificate details will be available soon!"); }}>
                View Details
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
