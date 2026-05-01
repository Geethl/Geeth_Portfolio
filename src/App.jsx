import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Journal from './components/Journal';
import CareerPlan from './components/CareerPlan';
import Certificates from './components/Certificates';
import CVSection from './components/CVSection';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState({ journal: [], careerPlan: [], certificates: [] });
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    };

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const mockData = {
      journal: [
        {
          title: 'Ethics & Professionalism in IT',
          content: 'Through the Professional Practice and Work (PPW) module, I developed a profound understanding of the ethical responsibilities inherent in software engineering. I learned that building systems is not merely about writing efficient code, but about ensuring data privacy, unbiased algorithmic design, and maintaining the highest standards of professional integrity in every deliverable.',
          date: '2026-05-01T10:00:00.000Z'
        },
        {
          title: 'Leadership & Team Dynamics',
          content: 'Leading the "Gaja Saviya" AI framework project provided practical exposure to Agile methodologies and conflict resolution. The PPW curriculum empowered me to transition my mindset from a solitary programmer to a collaborative team player, emphasizing the critical importance of transparent communication, sprint planning, and empathetic leadership in complex IT ecosystems.',
          date: '2026-04-15T10:00:00.000Z'
        },
        {
          title: 'Transitioning to an IT Professional',
          content: 'Perhaps the most significant takeaway from PPW was the paradigm shift regarding my career trajectory. I learned how to align my technical proficiency in the MERN stack and React Native with overarching business objectives. This alignment is crucial for my long-term goal of stepping into Software Quality Assurance and IT Project Management.',
          date: '2026-03-20T10:00:00.000Z'
        }
      ],
      careerPlan: [
        {
          title: 'Phase 1: Industry Immersion (0-1 Years)',
          content: 'My immediate objective is to secure a rigorous internship at an industry-leading organization such as DIMO Lanka or Azend Technologies. During this phase, I aim to transition my academic knowledge into enterprise-grade experience, specifically focusing on Software Quality Assurance (SQA) pipelines, Agile workflows, and professional project management environments.',
        },
        {
          title: 'Phase 2: Specialization & Certification (1-3 Years)',
          content: 'Post-graduation, I plan to solidify my position as an SQA professional or Junior Business Analyst. I will pursue globally recognized certifications such as the ISTQB Foundation Level or PMP (Project Management Professional) to validate my expertise in ensuring software reliability and managing cross-functional technical teams.',
        },
        {
          title: 'Phase 3: Leadership & Strategy (3-5+ Years)',
          content: 'My ultimate long-term trajectory is to become an IT Project Manager (ITPM). I intend to leverage my full-stack development background to bridge the communication gap between technical engineering teams and corporate stakeholders, driving high-impact, successful software deliveries from conception to deployment.',
        }
      ],
      certificates: [
        {
          title: 'Certifications...',
          content: 'Completed rigorous training to solidify my theoretical understanding and practical application of Agile frameworks, Scrum methodologies, and continuous project delivery pipelines.',
          imageUrl: './certificate.png'
        }
      ]
    };

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-gradient" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: '4px', background: 'var(--gradient-text)', width: `${scrollProgress}%`, zIndex: 9999, transition: 'width 0.1s ease-out' }}></div>

      <div className="bg-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Journal entries={data.journal} />
        <CareerPlan plans={data.careerPlan} />
        <Certificates certificates={data.certificates} />
        <CVSection />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Geeth Lakshan. Built with MERN Stack.</p>
      </footer>
    </>
  );
}

export default App;
