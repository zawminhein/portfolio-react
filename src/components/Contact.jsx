import React from "react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-sky-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact Me
        </h1>

        {/* Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-500/10">
              <i className="fa-solid fa-paper-plane text-blue-600 dark:text-blue-400 text-2xl"></i>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Get in Touch
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out for new projects, opportunities, or collaborations.
            </p>

            {/* Contact Buttons */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zawminheinmp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg
                           border border-blue-600 text-blue-600 dark:text-blue-400
                           hover:bg-blue-600 hover:text-white
                           dark:hover:bg-blue-500 dark:hover:text-white
                           transition"
              >
                <i className="fa-solid fa-envelope"></i>
                zawminheinmp@gmail.com
              </a>

              {/* Phone */}
              <a
                href="tel:+95997720880"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg
                           border border-blue-600 text-blue-600 dark:text-blue-400
                           hover:bg-blue-600 hover:text-white
                           dark:hover:bg-blue-500 dark:hover:text-white
                           transition"
              >
                <i className="fa-solid fa-phone"></i>
                +95 997720880
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
