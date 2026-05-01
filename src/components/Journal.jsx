import React from 'react';
import { BookOpen } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Journal = ({ entries }) => {
  if (!entries || entries.length === 0) return null;

  return (
    <section id="journal" className="section container">
      <h2 className="section-title">Reflective <span className="text-gradient">Journal</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
        A collection of thoughts and learnings from Professional Practice and Work (PPW), focusing on ethics, project management, and collaboration.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {entries.map((entry, idx) => (
          <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <div className="glass-panel animate-fade-in" style={{ animationDelay: `${idx * 0.2}s`, height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{entry.title}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {new Date(entry.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              {entry.content}
            </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Journal;
