'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function InfluencerLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <header className="px-4 lg:px-6 h-16 md:h-20 flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Influencer Name</span>
          <Image
            src="/profile.png"
            alt="Logo"
            className="h-10 w-10 rounded-full ring-2 ring-purple-500 dark:ring-purple-400"
            height={40}
            width={40}
          />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">CrusaderCrest</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#featured">
            Featured
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Influencer Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last shadow-2xl ring-4 ring-purple-500/20"
                  height="550"
                  src="/profile.png?height=550&width=800"
                  width="800"
                />
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    Hi, I&apos;m CrusaderCrest
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Lifestyle influencer, content creator, and digital entrepreneur. Join me on my journey to inspire and empower.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 text-sm font-medium text-white shadow-lg transition-all hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 dark:focus-visible:ring-purple-400"
                    href="#contact"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-purple-600 shadow-lg transition-all hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700"
                    href="#featured"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900"
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I&apos;m passionate about creating content that inspires and empowers people to live their best lives. With a focus on lifestyle, wellness, and personal development, I share my experiences and insights to help others on their journey.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900" id="featured">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Content
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4 bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    alt={`Featured Content ${index}`}
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                    height="200"
                    src="/profile.png?height=200&width=300"
                    width="300"
                  />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {index === 1 && "10 Tips for a Healthier Lifestyle"}
                    {index === 2 && "My Favorite Productivity Hacks"}
                    {index === 3 && "Behind the Scenes: My Creative Process"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {index === 1 && "Discover simple ways to improve your daily routine and boost your wellbeing."}
                    {index === 2 && "Learn the techniques I use to stay focused and get more done in less time."}
                    {index === 3 && "Get an inside look at how I create content and manage my online presence."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900"
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Stay Connected</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join my community and get exclusive content, updates, and behind-the-scenes access.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-800 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-full">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-purple-600 hover:text-pink-600 dark:text-purple-400 dark:hover:text-pink-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <p className="text-xs text-gray-600 dark:text-gray-400">© 2023 CrusaderCrest. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}