import axios from "axios"
import { useEffect, useState } from "react"
import Container from "../../../shared/Container"
import ServicesContainerCategories from "./components/ServicesContainerCategories"
import { SITE_URL } from "../../../constants"
import ServicesContainerServices from "./components/ServicesContainerServices"

const ServicesContainer = () => {
 const [categories, setCategories] = useState([])
 const [services, setServices] = useState([])
 const [activeServices, setActiveServices] = useState([])
 const [activeCategory, setActiveCategory] = useState(0)

 // const getAllCategories = async () => {
 //  await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/web/get`).then((res) => {
 //   setCategories(res.data)
 //  })
 // }

 // const getAllServices = async () => {
 //  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/web/get`).then((res) => {
 //   setServices(res.data)
 //   setActiveServices(res.data)
 //  })
 // }

 // useEffect(async () => {
 //  await getAllCategories().then(async () => await getAllServices())
 // }, [])

 // useEffect(() => {
 //  if (parseInt(activeCategory) === 0) {
 //   setActiveServices(services)
 //  } else {
 //   setActiveServices(services.filter((service) => parseInt(service.service_category_id) === parseInt(activeCategory)))
 //  }
 // }, [activeCategory])

 // const handleCategoryClick = (id) => {
 //  setActiveCategory(id)
 // }

 // const categoriesParams = { categories, activeCategory, handleCategoryClick }

 return (
  <section className="py-20">
   <Container>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
     {/* <ServicesContainerCategories {...categoriesParams} /> */}
     <ServicesContainerServices services={activeServices} />
    </div>
   </Container>
  </section>
 )
}

export default ServicesContainer
