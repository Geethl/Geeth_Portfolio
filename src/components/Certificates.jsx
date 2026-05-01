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
            <div className="glass-panel animate-fade-in" style={{ animationDelay: `${idx * 0.2}s`, padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '75%', background: 'rgba(255,255,255,0.02)' }}>
              {cert.imageUrl ? (
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                  <Award size={64} opacity={0.2} />
                </div>
              )}
            </div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award className="text-gradient" size={24} /> {cert.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {cert.content}
              </p>
            </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
