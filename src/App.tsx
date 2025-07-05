import React from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Mukesh Yadav</h1>
              <p className="text-xl text-blue-100">Freelance Video Editor</p>
            </div>
            <div className="mt-4 md:mt-0 space-y-2">
              <div className="flex items-center text-blue-100">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:mk7007686150@gmail.com" className="hover:text-white transition-colors">
                  mk7007686150@gmail.com
                </a>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 7007686150</span>
              </div>
              <div className="flex items-center text-blue-100">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Instagram className="w-4 h-4 mr-2" />
                <a 
                  href="https://www.instagram.com/cute__boy_.00?igsh=MTI5OTQ4dmV3YmhxOA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @cute__boy_.00
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Freelance video editor with over 1 year of experience in creating high-quality video content for brands, 
              social media, real estate, and food industry clients. Proficient in Adobe Premiere Pro, After Effects, 
              Photoshop, and Illustrator. Known for visual storytelling, fast-paced edits, and engaging video aesthetics.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Adobe Premiere Pro</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Adobe After Effects</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Adobe Photoshop</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Adobe Illustrator</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Social Media Video Editing</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Reels & Short-form Content</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                <span className="text-blue-800 font-medium">Color Grading & Transitions</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Projects
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Travelling Works</h3>
                <p className="text-gray-700 mb-3">
                  Fast-paced Instagram reel with vibrant transitions and storytelling.
                </p>
                <a 
                  href="https://www.instagram.com/reel/DALgLpiidSn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Works – Rocket India</h3>
                <p className="text-gray-700 mb-3">
                  Food promotional content for Instagram with appealing edits.
                </p>
                <a 
                  href="https://www.instagram.com/roketindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real Estate – NAMO Homes Jhansi</h3>
                <p className="text-gray-700 mb-3">
                  Property showcase videos with clean, professional transitions.
                </p>
                <a 
                  href="https://www.instagram.com/namohomesjhansi?igsh=MXgxdGkyNng4ZDV2bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Freelancing Experience
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Freelance Video Editor</h3>
                  <p className="text-gray-600">Self-employed – Remote</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    July 2023 – Present
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Edited 50+ videos for various clients in travel, food, and real estate.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Specialized in Instagram reels, product promos, and cinematic edits.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Worked closely with clients to meet tight deadlines and creative goals.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Education
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">12th Standard (Senior Secondary)</h3>
              <p className="text-gray-700">Kendriya Vidyalaya, Kanpur</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-4 text-center text-gray-600">
          <p className="text-sm">
            This resume can be printed or exported as PDF for professional use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;