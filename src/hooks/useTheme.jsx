import { useEffect, useState } from "react"

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme")
  if (saved) return saved

  return "dark"
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return { theme, toggleTheme }
}
