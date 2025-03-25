"use client"

import { useEffect, useState } from "react"

export function useMobile() {
  // Start with a default value that matches the server-rendered state
  // to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkIfMobile()

      // Add event listener
      window.addEventListener("resize", checkIfMobile)

      // Clean up
      return () => {
        window.removeEventListener("resize", checkIfMobile)
      }
    }
  }, [])

  return isMobile
}

