import React, { useState, useEffect } from "react"
import useTheme from "../hooks/useTheme"

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    aria-label="Toggle Theme"
    className="relative w-10 h-10 flex items-center justify-center overflow-hidden"
  >
    {/* Sun */}
    <i
      className={`fa-solid fa-sun absolute text-yellow-400 text-xl
      transition-all duration-500 ease-in-out
      ${theme === "dark"
        ? "rotate-0 scale-100 opacity-100"
        : "rotate-90 scale-0 opacity-0"
      }`}
    />
    {/* Moon */}
    <i
      className={`fa-solid fa-moon absolute text-gray-800 dark:text-gray-200 text-xl
      transition-all duration-500 ease-in-out
      ${theme === "dark"
        ? "rotate-90 scale-0 opacity-0"
        : "rotate-0 scale-100 opacity-100"
      }`}
    />
  </button>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [active, setActive] = useState("home")

  const sections = ["home", "about", "skills", "projects", "educations", "contact"]

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-sky-200/90 dark:bg-gray-800 backdrop-blur shadow transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="font-bold text-lg text-gray-900 dark:text-white">
          Portfolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-3">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize px-4 py-2 rounded-full font-medium transition
                  ${active === item
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          
          {/* Desktop theme toggle (END) */}
          <div className="hidden lg:block">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile theme toggle (before burger) */}
          <div className="lg:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl text-gray-900 dark:text-white"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden bg-sky-100 dark:bg-gray-900 px-4 pb-4 space-y-2">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`w-full text-left capitalize px-4 py-2 rounded-full transition
                  ${active === item
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-gray-700"
                  }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
