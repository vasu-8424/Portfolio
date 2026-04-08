"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

function scrollToSection(href: string) {
  const id = href.replace(/^#/, "")
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobile, isOpen])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href)
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-6xl flex justify-center pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg pointer-events-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-50 pointer-events-none"></div>
          {isMobile ? (
            <div className="relative flex items-center justify-between w-full">
              <Link href="/" className="font-bold text-lg flex-shrink-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Vasuu
                </span>
                <span className="text-white">Nakka</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center justify-between w-full">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-lg mr-4 flex-shrink-0">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Veera
                  </span>
                  <span className="text-white">Vasuu</span>
                </Link>
                <div className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors bg-transparent border-none outline-none"
                      style={{ background: "none", cursor: "pointer" }}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <a 
                href="/VEERA%20VASU%20NAKKA.pdf" 
                download
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/VEERA%20VASU%20NAKKA.pdf', '_blank');
                }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 whitespace-nowrap px-6 text-white transition-all duration-300"
                >
                  Resume
                </Button>
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-0 z-50">
            <div className="flex flex-col items-center justify-center min-h-screen py-20 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="px-8 py-3 text-xl font-medium text-white hover:text-purple-400 transition-colors bg-transparent border-none outline-none"
                  style={{ background: "none", cursor: "pointer" }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="/VEERA%20VASU%20NAKKA.pdf" 
                download
                className="w-full flex justify-center mt-6"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/VEERA%20VASU%20NAKKA.pdf', '_blank');
                }}
              >
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 w-44 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
