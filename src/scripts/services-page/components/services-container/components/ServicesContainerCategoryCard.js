const ServicesContainerCategoryCard = ({ category, activeCategory, handleCategoryClick }) => {
 const activeClass = parseInt(activeCategory) === parseInt(category.category_id)

 const handleClick = () => {
  handleCategoryClick(category.category_id)
 }

 if (activeClass) {
  return (
   <div
    className="px-4 py-2 my-2 capitalize transition-all duration-500 ease-in-out border-l-2 rounded-md cursor-pointer border-l-main-primary font-jost-regular text-zinc-50 bg-main-primary"
    onClick={handleClick}>
    <p>{category.category_name}</p>
   </div>
  )
 }

 return (
  <div
   className="px-4 py-2 my-2 capitalize transition-all duration-500 ease-in-out border-l-2 rounded-md cursor-pointer border-l-main-primary hover:text-zinc-50 text-main-primary hover:bg-main-primary bg-zinc-200 font-jost-regular"
   onClick={handleClick}>
   <p>{category.category_name}</p>
  </div>
 )
}

export default ServicesContainerCategoryCard
