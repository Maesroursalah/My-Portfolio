import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Code, 
  Sparkles, 
  Layers, 
  PenTool, 
  BookOpen, 
  Layout, 
  Image as ImageIcon, 
  Cpu, 
  Workflow, 
  Zap, 
  Smartphone, 
  CheckCircle2 
} from 'lucide-react';

export const SkillsStats: React.FC = () => {
  const creativeSkills = [
    {
      title: 'Brand Identity Design',
      description: 'Conceptualizing unique logos, establishing cohesive visual identities, and defining strict corporate design systems.',
      icon: PenTool,
      badge: 'LOGOS & IDENTITY'
    },
    {
      title: 'Graphic Charters & Guidelines',
      description: 'Documenting brand rules, typography hierarchies, and color matrices to ensure brand consistency across all media.',
      icon: BookOpen,
      badge: 'DESIGN SYSTEMS'
    },
    {
      title: 'UI/UX Design',
      description: 'Wireframing layouts and mapping fluid user journeys that balance aesthetic elegance with flawless usability.',
      icon: Layout,
      badge: 'PROTOTYPING & UX'
    },
    {
      title: 'Visual Asset Creation',
      description: 'Crafting high-resolution digital imagery, vector compositions, and structured visual elements from scratch.',
      icon: ImageIcon,
      badge: 'VECTORS & RASTERS'
    }
  ];

  const engineeringSkills = [
    {
      title: 'Full-Stack Web Development',
      description: 'Engineering fully custom web platforms from structural foundation to responsive frontend interface.',
      icon: Cpu,
      badge: 'END-TO-END WEB'
    },
    {
      title: 'Custom JavaScript Architecture',
      description: 'Writing clean, logical, and modular scripts to handle complex applications without bloated overhead.',
      icon: Layers,
      badge: 'MODULAR JS'
    },
    {
      title: 'API Integration & Logic',
      description: 'Connecting front-end components to robust back-end systems and managing smooth data flows.',
      icon: Workflow,
      badge: 'BACKEND & APIS'
    },
    {
      title: 'Performance Optimization',
      description: 'Auditing codebases, compressing assets, and refining logic to secure blazing-fast load speeds.',
      icon: Zap,
      badge: 'CORE WEB VITALS'
    },
    {
      title: 'Responsive Web Design',
      description: 'Building flexible grids and fluid components that look immaculate on any screen size, from mobile to 4K displays.',
      icon: Smartphone,
      badge: 'ALL SCREEN SIZES'
    }
  ];

  return (
    <section id="stats" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            Skills &amp; Capabilities
          </h2>
          <p className="text-rose-200/80 max-w-2xl text-base sm:text-lg font-sans font-light leading-relaxed">
            A comprehensive matrix of brand identity design methodologies, user experience engineering, and full-stack software standards.
          </p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pillar 1: Creative & Strategic Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Pillar Header */}
          <div className="p-6 rounded-3xl bg-[#D68379] text-[#150B0A] flex items-center justify-between shadow-2xl relative overflow-hidden border border-[#EBB5AF]">
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-[#150B0A] text-[#D68379] shadow-md">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#150B0A]/80 font-extrabold tracking-widest block uppercase">
                  ARTISTRY &amp; IDENTITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#150B0A]">
                  🎨 Creative &amp; Strategic Skills
                </h3>
              </div>
            </div>
          </div>

          {/* Skill Items Cards */}
          <div className="space-y-4">
            {creativeSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-3 shadow-lg group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1D0D0C] border border-[#381B19] text-[#D68379] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#fff8f0]">
                        {skill.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#381B19] text-[#D68379] border border-[#572A26] whitespace-nowrap font-semibold">
                      {skill.badge}
                    </span>
                  </div>

                  <p className="text-sm font-sans text-rose-200/85 leading-relaxed font-light pl-11">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pillar 2: Engineering & Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Pillar Header */}
          <div className="p-6 rounded-3xl bg-[#D68379] text-[#150B0A] flex items-center justify-between shadow-2xl relative overflow-hidden border border-[#EBB5AF]">
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-[#150B0A] text-[#D68379] shadow-md">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#150B0A]/80 font-extrabold tracking-widest block uppercase">
                  SOFTWARE &amp; ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#150B0A]">
                  💻 Engineering &amp; Technical Skills
                </h3>
              </div>
            </div>
          </div>

          {/* Skill Items Cards */}
          <div className="space-y-4">
            {engineeringSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-3 shadow-lg group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1D0D0C] border border-[#381B19] text-[#D68379] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#fff8f0]">
                        {skill.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#381B19] text-[#D68379] border border-[#572A26] whitespace-nowrap font-semibold">
                      {skill.badge}
                    </span>
                  </div>

                  <p className="text-sm font-sans text-rose-200/85 leading-relaxed font-light pl-11">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

