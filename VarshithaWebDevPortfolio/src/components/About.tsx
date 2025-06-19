import React from 'react';
import { User, Heart, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <User className="h-6 w-6 text-blue-600 mr-2" />
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Frontend Developer with 8 years of experience creating 
                exceptional digital experiences. I specialize in building responsive, 
                accessible, and performant web applications that users love.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a deep passion for crafting beautiful, functional interfaces 
                that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                What I Love
              </h3>
              <ul className="text-lg text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Creating pixel-perfect designs that work seamlessly across all devices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Optimizing performance and accessibility for the best user experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Learning new technologies and staying up-to-date with industry trends
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborating with designers and backend developers to bring ideas to life
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fun Facts About Me</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">∞</div>
                  <div className="text-sm text-gray-600">Cups of Coffee</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Learning Mode</div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-600 italic">
                  "Code is poetry written in logic"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;