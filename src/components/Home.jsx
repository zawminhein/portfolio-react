import React from "react"

export default function Home() {
  return (
    <section
      id="home"
      className="py-20 bg-sky-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
            <img
              src="/assets/img/profile.jpg"
              alt="Profile"
              className="w-60 h-72 rounded-full object-cover
                         shadow-lg dark:shadow-blue-500/20
                         bg-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-1">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold
                         text-gray-900 dark:text-white mb-2">
            Zaw Min Hein
          </h1>

          <h2 className="text-blue-600 dark:text-blue-400
                         font-bold text-xl mb-6">
            Web Developer
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-8 mb-8 text-xl">
            <a
              href="https://www.facebook.com/zawmin.hein.7967"
              className="text-gray-700 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/zaw-min-hein-6102ba2a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-700 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/zawminhein"
              className="text-gray-700 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Download Button */}
          <a
            href="/assets/resume/Zaw_Min_Hein_Resume.pdf"
            download
            className="inline-flex items-center gap-2
                       bg-blue-600 dark:bg-blue-500
                       text-white px-6 py-3 rounded-lg
                       hover:bg-blue-700 dark:hover:bg-blue-600
                       transition-colors"
          >
            <i className="fa-solid fa-download"></i>
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}
