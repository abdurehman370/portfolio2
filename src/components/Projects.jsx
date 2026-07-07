import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, socialLinks } from '../data/portfolioData';

// Custom SVG Icons for clean visual rendering
const GitHubIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CaseStudyIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const MaximizeIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ProjectCard = ({ project, aosDelay, onImageClick }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60' 
        : 'bg-white/10 hover:bg-white/20'
    }`}
  >
    <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 flex flex-col justify-between ${
      project.isFlagship 
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
        : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
    }`}>
      <div>
        {/* Badge */}
        {project.badge && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
            {project.badge}
          </span>
        )}

        {/* Number + Title */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-medium">
          {project.description}
        </p>

        {/* What I Delivered (Deliverables Checklist) */}
        {project.features && project.features.length > 0 && (
          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <h4 className="text-white/40 text-[10px] font-black tracking-wider uppercase mb-3">
              What I Delivered
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed font-medium">
                  <ZapIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Screenshots Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h4 className="text-white/40 text-[10px] font-black tracking-wider uppercase mb-3">
              Project Interface Screenshots (Scroll $\rightarrow$)
            </h4>
            <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-white/15 scrollbar-track-transparent">
              {project.images.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => onImageClick(project, i)}
                  className="relative aspect-video h-20 md:h-24 rounded-lg overflow-hidden border border-white/10 bg-black/40 shrink-0 cursor-pointer group/thumb hover:scale-105 hover:border-red-500/40 transition-all duration-300"
                  title={img.caption}
                >
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-all duration-300">
                    <MaximizeIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10 mt-auto">
        {/* GitHub */}
        {project.links.github && (
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            <GitHubIcon />
            GitHub Repo
          </a>
        )}

        {/* Case Study */}
        {project.links.caseStudy && (
          <a 
            href={project.links.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            <CaseStudyIcon />
            Case Study (PDF)
          </a>
        )}

        {/* Scraping Demo (I-Car) */}
        {project.links.demo1 && (
          <a 
            href={project.links.demo1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs md:text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <PlayIcon />
            Scraping Demo
          </a>
        )}

        {/* Pricing Demo (I-Car) */}
        {project.links.demo2 && (
          <a 
            href={project.links.demo2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs md:text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <PlayIcon />
            Pricing Demo
          </a>
        )}

        {/* Shopify Storefront Demo link */}
        {project.links.demo && (
          <a 
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs md:text-sm font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Shopify App Store
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  // Lightbox Modal States
  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (project, index) => {
    setActiveProject(project);
    setImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of production-grade systems and tools built with focus on database integrity, microservice scalability, and AI automation.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/15 transition-all duration-300 z-50 hover:scale-110"
              aria-label="Close Lightbox"
            >
              <CloseIcon />
            </button>

            {/* Lightbox Frame */}
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl flex items-center justify-center">
                
                {/* Main Image */}
                <motion.img 
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={activeProject.images[imageIndex].src} 
                  alt={activeProject.images[imageIndex].caption} 
                  className="max-h-[80vh] max-w-full object-contain"
                />

                {/* Left Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 bg-black/50 hover:bg-[#ff2a2a] text-white p-3 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
                  aria-label="Previous Image"
                >
                  <ArrowLeftIcon />
                </button>

                {/* Right Navigation */}
                <button 
                  onClick={nextImage}
                  className="absolute right-4 bg-black/50 hover:bg-[#ff2a2a] text-white p-3 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
                  aria-label="Next Image"
                >
                  <ArrowRightIcon />
                </button>
              </div>

              {/* Lightbox Metadata */}
              <div className="mt-6 text-center max-w-2xl px-4">
                <h4 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1">
                  {activeProject.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base mb-4 font-medium">
                  {activeProject.images[imageIndex].caption}
                </p>
                <span className="text-xs font-mono text-white/40 tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  {imageIndex + 1} / {activeProject.images.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
