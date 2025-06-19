import React from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Globe, 
  Database,
  GitBranch,
  TestTube
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Next.js', level: 65 },
        { name: 'Vue.js', level: 65 }
      ]
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Styled Components', level: 85 },
        { name: 'SASS/SCSS', level: 90 },
        { name: 'CSS Grid/Flexbox', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Adobe XD', level: 55 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'Jest/Testing Library', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    }
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring seamless experience across all devices'
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimizing load times and user experience with modern best practices'
    },
    {
      icon: Database,
      title: 'State Management',
      description: 'Expert in Redux, Zustand, and React Context for complex applications'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Writing comprehensive tests to ensure code quality and reliability'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience 
            and continuous learning in the ever-evolving world of web development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <highlight.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;