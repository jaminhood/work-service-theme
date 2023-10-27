import Container from "../Container"
import heroImg from "../../../assets/imgs/page-hero.jpg"

const Hero = ({ page_name }) => {
 return (
  <section className="relative">
   <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-main-primary before:opacity-70 -z-10">
    <img src={heroImg} className="object-cover w-full h-full" />
   </div>
   <Container>
    <div className="flex justify-center items-center py-20 md:h-[60vh]">
     <div className="text-center">
      <h1 className="mt-4 text-4xl capitalize md:text-7xl font-sansation-bold text-zinc-50">{page_name}</h1>
      <p className="py-4 text-base font-jost-regular text-zinc-300">{page_name}</p>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default Hero
