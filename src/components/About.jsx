import React from "react"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-sky-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          About Me
        </h1>

        {/* Card */}
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-3xl transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I'm a junior developer exploring both frontend and backend development. 
              I've built small full-stack projects using HTML, CSS, JavaScript, React, 
              PHP (Laravel) and MySQL. I focus on writing clean code and understanding 
              the "Why" behind each solution. Right now, I'm building small web apps 
              and contributing to open-source projects to gain more hands-on experience. 
              I also completed a 3-month <span className="font-bold">internship </span> 
              at MinShinSaw Co., Ltd. I'm looking for opportunities to work with experienced 
              developers, improve my code, and contribute to impactful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
