import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Background from './components/Background';

// Placeholder for slides
import HeroSlide from './slides/HeroSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import AgentViewSlide from './slides/AgentViewSlide';
import TrackRecordSlide from './slides/TrackRecordSlide';
import ResultsSlide from './slides/ResultsSlide';
import MechanicsSlide from './slides/MechanicsSlide';
import CantonSlide from './slides/CantonSlide';
import PillarsSlide from './slides/PillarsSlide';
import MarketSlide from './slides/MarketSlide';
import TeamSlide from './slides/TeamSlide';
import AskSlide from './slides/AskSlide';
import ContactSlide from './slides/ContactSlide';
// import RoadmapSlide from './slides/RoadmapSlide';
// import TeamSlide from './slides/TeamSlide';
// import ContactSlide from './slides/ContactSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;
  const mainRef = useRef(null);

  useEffect(() => {
    const options = {
      root: mainRef.current,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(mainRef.current.children).indexOf(entry.target);
          if (index !== -1) {
            setCurrentSlide(index);
          }
        }
      });
    }, options);

    const slides = mainRef.current.children;
    Array.from(slides).forEach(slide => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index) => {
    const slides = mainRef.current.children;
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Background />

      <main ref={mainRef} style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', position: 'relative', zIndex: 1 }}>
        <HeroSlide />
        <ProblemSlide />
        <SolutionSlide />
        <AgentViewSlide />
        <TrackRecordSlide />
        <ResultsSlide />
        <MechanicsSlide />
        <CantonSlide />
        <PillarsSlide />
        <MarketSlide />
        <TeamSlide />
        <AskSlide />
        <ContactSlide />
      </main>

      {/* Navigation Dots */}
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 100
      }}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            onClick={() => scrollToSlide(i)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: currentSlide === i ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.3s',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
