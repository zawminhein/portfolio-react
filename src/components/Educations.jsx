import React from "react"

const educations = [
  {
      degree: "Bachelor of Engineering",
      school: "Technological University (Pakokku)",
      period: "2013 – 2019",
      description:
         "Completed a six-year engineering program focused on mechanical systems. Built strong analytical and problem-solving skills through theoretical and practical coursework.",
  },
  {
      degree: "Professional Web Development Certificate",
      school: "Fairway Technology",
      period: "2024",
      description:
        "Completed a comprehensive web development course covering HTML, CSS, JavaScript, PHP, Laravel and modern frameworks. Gained hands-on experience building responsive web applications.",
  }
]

export default function Educations() {
  return (
    <section
      id="educations"
      className="py-24 bg-sky-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-500/30"></div>

          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="relative pl-12"
              >
                {/* Dot */}
                <span className="absolute left-2 top-2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-200 dark:ring-blue-900"></span>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    {edu.school}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.period}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
