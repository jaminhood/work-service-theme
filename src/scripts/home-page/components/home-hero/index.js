import hero_1 from "../../../../assets/imgs/hero-1.png"
import hero_2 from "../../../../assets/imgs/hero-2.png"
import hero_3 from "../../../../assets/imgs/hero-3.png"
import hero_4 from "../../../../assets/imgs/hero-4.png"
import Container from "../../../shared/Container"
import Button from "../../../shared/button"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

const HomeHero = () => {
 const controls = useAnimation()
 const [currentSlide, setCurrentSlide] = useState(0)

 const slides = [hero_1, hero_2, hero_3, hero_4]
 const totalSlides = slides.length

 const nextSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
 }

 useEffect(() => {
  const interval = setInterval(() => {
   nextSlide()
   controls.start({ opacity: 1 })
  }, 10000) // Adjust the delay (in milliseconds) between slides

  return () => clearInterval(interval)
 }, [controls])

 return (
  <section className="relative overflow-hidden md:h-screen">
   <div className="absolute inset-0 -z-10">
    {slides.map((slide, i) => (
     <motion.div
      className="absolute inset-0 -z-20"
      key={i}
      initial={{ opacity: 0 }}
      animate={{
       opacity: i === currentSlide ? 1 : 0,
       transition: { duration: 1 },
      }}>
      <img src={slide} className="object-cover w-full h-full" />
     </motion.div>
    ))}
   </div>
   <Container>
    <div className="grid items-center md:grid-cols-2 md:h-screen">
     <div className="col-span-1 py-20 text-center md:text-left">
      <h1 className="mt-4 mb-8 text-5xl md:mb-0 md:text-6xl font-sansation-bold text-zinc-50">Find an expert for every task, right away</h1>
      <div className="grid items-center grid-cols-1 mt-4 overflow-hidden border rounded-md md:grid-cols-3 border-zinc-50">
       <div className="self-stretch md:col-span-2">
        <input type="search" className="w-full h-full px-8 py-3 bg-transparent focus:outline-0 placeholder:text-zinc-50 text-zinc-50" placeholder="Search for any service.." />
       </div>
       <Button size="l" outline={true} content="Search" />
      </div>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default HomeHero
