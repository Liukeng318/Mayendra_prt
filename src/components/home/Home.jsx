import React from "react"
import { About } from "../pages/About"
import { Awards } from "../pages/Awards"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Experience } from "../pages/Experience"
import { Interest } from "../pages/Interest"
import { Skills } from "../pages/Skills"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Counter />
      <Skills />
      <Interest />
      <Awards />
      <Contact />
    </>
  )
}
