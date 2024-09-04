'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function InfluencerLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 md:h-20 flex items-center shadow-sm bg-white dark:bg-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Influencer Name</span>
          <Image
            src="/profile.png"
            alt="Logo"
            className="h-8 w-8 rounded-full"
            height={32}
            width={32}
          />
          <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-200">CrusaderCrest</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <Image
                alt="Influencer Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
                height="550"
                src="/profile.png?height=550&width=800"
                width="800"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&aposm CrusaderCrest
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Lifestyle influencer, content creator, and digital entrepreneur. Join me on my journey to inspire and empower.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#featured"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I&aposm passionate about creating content that inspires and empowers people to live their best lives. With a focus on lifestyle, wellness, and personal development, I share my experiences and insights to help others on their journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" id="featured">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center text-gray-800 dark:text-gray-200">Featured Content</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Image
                  alt="Featured Content 1"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  height="200"
                  src="/profile.png?height=200&width=300"
                  width="300"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">10 Tips for a Healthier Lifestyle</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Discover simple ways to improve your daily routine and boost your wellbeing.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Image
                  alt="Featured Content 2"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  height="200"
                  src="/profile.png?height=200&width=300"
                  width="300"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">My Favorite Productivity Hacks</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Learn the techniques I use to stay focused and get more done in less time.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Image
                  alt="Featured Content 3"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  height="200"
                  src="/profile.png?height=200&width=300"
                  width="300"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Behind the Scenes: My Creative Process</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Get an inside look at how I create content and manage my online presence.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Connected</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join my community and get exclusive content, updates, and behind-the-scenes access.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 CrusaderCrest. All rights reserved.</p>
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