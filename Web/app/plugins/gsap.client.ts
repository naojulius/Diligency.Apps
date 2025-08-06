import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        SplitText)
})