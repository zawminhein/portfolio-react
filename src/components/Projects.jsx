import React from "react"

const projects = [
  {
    title: "Intern Project",
    image: "/assets/project_img/NPLPH-movie.png",
    description: "Movie browsing app built during internship.",
    tech: ["Laravel-Initia-React", "Tailwind"],
    live: "#",
    github: "https://github.com/zawminhein/NPLPH_movie.git",
  },
  {
    title: "User Management App",
    image: "/assets/project_img/PhP.jpg",
    description: "Admin dashboard for managing users, roles, and permissions.",
    tech: ["PHP", "MySQL"],
    live: "#",
    github: "https://github.com/zawminhein/php_project.git",
  },
  {
    title: "Mini Social Media App",
    image: "/assets/project_img/Laravel (2).png",
    description: "Users can create posts, like, comment, and manage profiles.",
    tech: ["Laravel", "MySQL"],
    live: "#",
    github: "https://github.com/zawminhein/laravel-project.git",
  },
  {
    title: "Movie App",
    image: "/assets/project_img/Movies.png",
    description: "Browse and search movies using external API.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "https://github.com/zawminhein/React-Movie-App.git",
  },
  {
    title: "Movie App",
    image: "/projects/movie-app.png",
    description: "Browse and search movies using external API.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
