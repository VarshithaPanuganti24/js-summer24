import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for enterprise-level applications serving 100K+ users. Mentoring junior developers and establishing best practices for code quality and performance.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration from JavaScript to TypeScript across 15+ projects',
        'Implemented comprehensive testing strategy increasing coverage to 85%',
        'Mentored 5 junior developers and conducted technical interviews'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed responsive web applications for B2B SaaS platform. Collaborated closely with designers and backend developers to deliver pixel-perfect implementations.',
      achievements: [
        'Built responsive dashboard increasing user engagement by 35%',
        'Integrated third-party APIs and payment systems',
        'Reduced bundle size by 50% through code splitting and optimization',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance'
      ],
      technologies: ['React', 'Redux', 'Sass', 'Jest', 'Docker']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'WebDev Agency',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Created custom websites and web applications for various clients. Gained experience in multiple frameworks and content management systems.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented responsive designs across all major browsers',
        'Optimized website loading times by average of 60%',
        'Collaborated with design team to improve UI/UX workflows'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'WordPress', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in frontend development, showcasing growth, 
            achievements, and the impact I've made at each organization.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;