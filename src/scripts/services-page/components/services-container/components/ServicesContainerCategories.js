import ServicesContainerCategoryCard from "./ServicesContainerCategoryCard"

const ServicesContainerCategories = ({ categories, activeCategory, handleCategoryClick }) => {
 const allCategories = [
  {
   category_date: ``,
   category_icon: ``,
   category_icon_id: 0,
   category_id: 0,
   category_name: `All`,
  },
  ...categories,
 ]

 return (
  <div className="hidden col-span-1 md:block">
   <h3 className="text-2xl text-main-primary font-sansation-bold">Categories</h3>
   <div className="pt-4">
    {allCategories.map((category) => (
     <ServicesContainerCategoryCard category={category} activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} key={category.category_id} />
    ))}
   </div>
  </div>
 )
}

export default ServicesContainerCategories
