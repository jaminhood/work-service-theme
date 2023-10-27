const Button = ({ content, size, outline, handleClick }) => {
 if (size === `s`) {
  return (
   <button
    onClick={handleClick}
    className={`w-full px-4 py-1 font-sansation-bold text-sm md:text-base capitalize transition-all duration-500 ease-in-out border hover:bg-transparent ${
     outline ? `bg-light-primary text-main-primary border-light-primary hover:text-light-primary` : `bg-main-primary text-zinc-50 border-main-primary hover:text-main-primary`
    }`}>
    {content}
   </button>
  )
 }

 if (size === `l`) {
  return (
   <button
    onClick={handleClick}
    className={`w-full px-8 py-3 font-sansation-bold text-sm md:text-base capitalize transition-all duration-500 ease-in-out border hover:bg-transparent ${
     outline ? `bg-light-primary text-main-primary border-light-primary hover:text-light-primary` : `bg-main-primary text-zinc-50 border-main-primary hover:text-main-primary`
    }`}>
    {content}
   </button>
  )
 }

 return (
  <button
   onClick={handleClick}
   className={`w-full px-6 py-2 font-sansation-bold text-sm md:text-base capitalize transition-all duration-500 ease-in-out border hover:bg-transparent ${
    outline ? `bg-light-primary text-main-primary border-light-primary hover:text-light-primary` : `bg-main-primary text-zinc-50 border-main-primary hover:text-main-primary`
   }`}>
   {content}
  </button>
 )
}

export default Button
