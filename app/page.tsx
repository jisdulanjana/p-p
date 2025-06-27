import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContentCreationSection from './components/ContentCreationSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="content">
        <ContentCreationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}