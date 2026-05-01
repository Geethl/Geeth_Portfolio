import React from 'react';
import { FileText, Download } from 'lucide-react';

const CVSection = () => {
  return (
    <section id="cv" className="section container">
      <h2 className="section-title">Curriculum <span className="text-gradient">Vitae</span></h2>
      
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', color: 'var(--accent-primary)' }}>
          <FileText size={40} />
        </div>
        
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Geeth Lakshan - Full Stack Developer</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          Explore my complete academic background, technical skills, projects, and professional experience by downloading my curriculum vitae.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="./CV of Geeth.pdf" download="Geeth_Lakshan_CV.pdf" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            <Download size={20} /> Download CV (PDF)
          </a>
          <a href="./CV of Geeth.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            <FileText size={20} /> View Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
