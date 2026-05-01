import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Certificates = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">Certificates & <span className="text-gradient">Achievements</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {certificates.map((cert, idx) => (
          <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <div 
              className="glass-panel animate-fade-in" 
              style={{ animationDelay: `${idx * 0.2}s`, padding: '0', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
              onClick={() => setSelectedCert(cert)}
            >
              <div style={{ position: 'relative', width: '100%', paddingTop: '75%', background: 'rgba(255,255,255,0.02)' }}>
                {/* Image hidden intentionally from preview as per user request */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                  <Award size={64} opacity={0.2} />
                </div>
                {/* Click overlay hint */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }} className="cert-overlay">
                  <span className="btn btn-primary">Click to View Details</span>
                </div>
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Award className="text-gradient" size={20} /> {cert.title}
                </h3>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', padding: '2rem'
        }} onClick={() => setSelectedCert(null)}>
          <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '0', overflow: 'hidden', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedCert(null)} 
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', zIndex: 10 }}
            >
              <X size={24} />
            </button>
            {selectedCert.imageUrl && (
              <img src={selectedCert.imageUrl} alt={selectedCert.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            )}
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award className="text-gradient" size={28} /> {selectedCert.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.125rem' }}>
                {selectedCert.content}
              </p>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .glass-panel:hover .cert-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
