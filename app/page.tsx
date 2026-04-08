"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Trophy, Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { useMobile } from "@/hooks/use-mobile"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingNav } from "@/components/floating-nav"

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}



export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Android Developer & Application Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Veera vasuu Nakka
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="ghost"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/vasu-8424" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/veera-vasu-3ab53623a/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/VeeraVasu743096" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:vasuunakka@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <div className="relative h-full">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative h-full rounded-xl overflow-hidden border border-zinc-800">
                <div className="aspect-square">
                  <Image
                    src="/Veeravasu.jpg"
                    alt="Veera vasuu"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-0 w-full px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <GlassmorphicCard className="h-full flex flex-col">
                <div className="flex-grow">
                  <p className="text-lg text-zinc-300">
                    As a Full Stack Developer, I excel in creating comprehensive web solutions using the MERN stack. My expertise spans from crafting intuitive user interfaces with React to implementing robust backend systems with Node.js and MongoDB, ensuring seamless end-to-end functionality.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    In the mobile development space, I've built a strong foundation as an Android Developer using React Native and Expo. My portfolio includes several successful applications that showcase my ability to deliver secure, performant, and user-friendly mobile experiences.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    I'm currently expanding my skill set by delving into Machine Learning and Data Structures & Algorithms. This pursuit reflects my dedication to growth and my ambition to create more sophisticated, efficient solutions that can make a real impact in the tech world.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Veera vasuu Nakka</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">vasuunakka@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Kakinada</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="/VEERA%20VASU%20NAKKA.pdf" 
                    download
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/VEERA%20VASU%20NAKKA.pdf', '_blank');
                    }}
                  >
                    <Button className="mt-6 bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="React Native" level={80} />
            <SkillBadge name="MongoDB" level={90} />
            <SkillBadge name="Supabase" level={65} />
            <SkillBadge name="Postman" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Women safety app"
              description="Women safety app is a mobile application that helps women to stay safe by providing emergency services and location sharing."
              tags={["React Native", "TypeScript", "Android", "MongoDB"]}
              image="/image.png?height=400&width=600"
              demoUrl="https://github.com/PNikhileswar/Women-Safety/tree/Nikhil"
              repoUrl="https://github.com/PNikhileswar/Women-Safety/tree/Nikhil"
            />
            <ProjectCard
              title="Brent Street Pizza"
              description="Full stack web application for pizza ordering and delivery."
              tags={["React", "Node.js", "MongoDB","javascript"]}
              image="/pizza.jpg"
              demoUrl="https://brent-street-pizzzaaa.vercel.app/"
              repoUrl="https://github.com/varuntejreddy03/Brent-Street-Pizza.git"
            />
            <ProjectCard
              title="AI Fake news detection"
              description="An AI-powered content generation tool using AI model."
              tags={["Next.js", "Pandas", "python", "MongoDB"]}
              image="/fakenews.jpeg"
              demoUrl="https://github.com/vasu-8424/Fake-News-Detection"
              repoUrl="https://github.com/vasu-8424/Fake-News-Detection"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "TypeScript", "css", "javascript"]}
              image="/portfolio.jpg"
              demoUrl="https://portfoliovasuu.vercel.app/"
              repoUrl="https://github.com/vasu-8424/Portfolio"
            />
            <ProjectCard
              title="Ruby Ai"
              description="startup website for AI based solutions"
              tags={["React", "javascript", "css","vite"]}
              image="/image copy.png"
              demoUrl="https://www.rubyai.co.in"
              repoUrl="https://github.com/vasu-8424/Ruby_AI.git"
            />
            <ProjectCard
              title="Let Us Wed"
              description="Let Us Wed is a comprehensive wedding planning platform designed to streamline the entire wedding organization process for couples. It serves as a one-stop solution for managing vendors, budgets, guest lists, and event schedules, ensuring a seamless and stress-free planning experience."
              tags={["Node.js", "Tailwind CSS", "React", "javascript", "mongodb", "express", "socket.io"]}
              image="/letuswed.png"
              demoUrl="https://let-us-wed.vercel.app/"
              repoUrl="https://github.com/vasu-8424/let-us-wed.git"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Achievements" subtitle="Hackathon Success Stories" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <GlassmorphicCard>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">1st Prize - Vedic-Vision National level Hackathon 2k24</h3>
                <p className="text-zinc-400 mb-4">Developed an innovative Cricket management website with Real time Updates</p>
                <div className="flex flex-wrap gap-2">
                  {["React Js", "MongoDB", "Node.js","Full stack Using MERN"].map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2nd Prize - Hackoverflow National level Hackathon 2k24</h3>
                <p className="text-zinc-400 mb-4">Created a Women Safety App For Empowering women with real-time safety features</p>
                <div className="flex flex-wrap gap-2">
                  {["React native", "Typescript", "Expo","websocket"].map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2nd Prize - SRKR Google dev challenge 2k25</h3>
                <p className="text-zinc-400 mb-4">Developed a real-time Health care app with create awareness about health in undeserved community areas</p>
                <div className="flex flex-wrap gap-2">
                  {["React native", "Machine learning", "Typescript","API"].map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <GlassmorphicCard className="h-full">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">vasuunakka@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">https://www.linkedin.com/in/veeravasu/</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">https://github.com/vasu-8424</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <h4 className="text-base font-medium mb-3">Current Status</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
                <p className="text-zinc-400 text-sm">I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">VEERA</span>
              <span className="text-white">VASUU</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Veera vasuu Nakka. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/vasu-8424" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/veera-vasu-3ab53623a/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/VeeraVasu743096" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:vasuunakka@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}