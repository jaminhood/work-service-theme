import ServiceBox from "../../../../shared/service-box"

const CategoryContainerServices = ({ categories }) => {
 return (
  <div className="col-span-1 md:col-span-4">
   {categories.length > 0 ? (
    <div className="grid grid-cols-2 gap-8 pt-4 md:grid-cols-3">
     {categories.map((service) => (
      <ServiceBox key={service.service_id} service={service} />
     ))}
    </div>
   ) : (
    <p className="py-4 text-base text-center font-jost-regular text-main-primary opacity-70">Sorry, No Service to display.</p>
   )}
  </div>
 )
}

export default CategoryContainerServices
