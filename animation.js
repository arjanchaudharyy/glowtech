import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

gsap.to(".text-container .page-text h1", {
  x: "-90%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".text-container",
    scroller: "body",
    markers: false,
    start: "top 10%",
    end: "top -800%",
    scrub: 3,
    pin: true,
  },
})

tl.from(".c1", {
  x: -500,
  opacity: 0,
  duration: 1,
  delay: 0.2,
})
  .from(".c2", {
    x: -500,
    opacity: 0,
    duration: 1,
  })
  .from(".c3", {
    y: -100,
    opacity: 0,
    duration: 1,
  })

gsap.from(".about-content .h2", {
  y: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".h2",
  },
})

gsap.from(".about-content .about-text", {
  x: -900,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".about-text",
  },
})

gsap.from(".stats-list", {
  duration: 1.5,
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".stats-list",
    scroller: "body",
  },
})

// Additional animations from the previous script.js
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
})

gsap.from(".hero-banner", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
})

gsap.from(".service-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".service",
    start: "top 80%",
  },
})

gsap.from(".features-card", {
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
  },
})

gsap.from(".blog-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".blog",
    start: "top 80%",
  },
})

