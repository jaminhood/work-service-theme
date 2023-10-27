import ServiceBox from "../../../../shared/service-box"

const ServicesContainerServices = ({ services }) => {
 return (
  <div className="col-span-1 md:col-span-4">
   <h3 className="text-2xl text-center md:text-left text-main-primary font-sansation-bold">Services</h3>
   {services.length > 0 ? (
    <div className="grid grid-cols-2 gap-8 pt-4 md:grid-cols-4">
     {services.map((service) => (
      <ServiceBox key={service.service_id} service={service} />
     ))}
    </div>
   ) : (
    <p className="py-4 text-base text-center font-jost-regular text-main-primary opacity-70">Sorry, No Service to display.</p>
   )}
  </div>
 )
}

export default ServicesContainerServices
