import React from "react"

export default function Footer() {
  return (
    <footer className="bg-sky-200 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto text-center py-12">

        {/* Copyright */}
        <div className="text-gray-600 dark:text-gray-400 text-md">
          &copy; {new Date().getFullYear()} Zaw Min Hein. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
