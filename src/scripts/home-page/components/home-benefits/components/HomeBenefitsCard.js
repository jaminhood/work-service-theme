const HomeBenefitsCard = ({ benefit }) => {
 return (
  <div className="p-4 my-8 border-2 rounded-md border-zinc-50 cursor-pointer shadow-xl hover:bg-zinc-50 hover:text-main-primary transition-all ease-in-out duration-500 relative before:absolute before:content-[''] before:top-1/2 before:-left-8 before:border before:border-zinc-50 before:w-8 before:-translate-y-1/2 after:absolute after:content-[''] after:top-1/2 after:-left-12 after:rounded-full after:border-4 after:border-zinc-400 after:p-2 after:bg-main-primary hover:after:bg-zinc-50 hover:after:border-zinc-50 after:transition-all after:ease-in-out after:duration-500 after:-translate-y-1/2">
   <h4 className="mb-2 text-lg font-sansation-bold">{benefit.benefit_heading}</h4>
   <p className="text-sm font-jost-regular">{benefit.benefit_paragraph}</p>
  </div>
 )
}

export default HomeBenefitsCard
