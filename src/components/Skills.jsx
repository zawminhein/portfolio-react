import React, { useEffect, useRef, useState } from "react"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 50 },
      { name: "Tailwind CSS", level: 50 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 75 },
      { name: "Java", level: 25 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 50 },
      { name: "Git", level: 50 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // Animate when section appears
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-sky-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
