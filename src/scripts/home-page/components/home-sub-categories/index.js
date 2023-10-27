import axios from "axios"
import { SITE_URL } from "../../../constants"
import { useEffect, useState } from "react"
import Container from "../../../shared/Container"
import SubCategoryBox from "../../../shared/sub-category-box"

const HomeSubCategories = () => {
 const [subCategories, setSubCategories] = useState([])

 const getAllSubCategories = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/sub-categories/get-all`).then((res) => {
   setSubCategories(res.data)
  })
 }

 useEffect(async () => {
  await getAllSubCategories()
 }, [])

 return (
  <section className="relative py-20 bg-zinc-50">
   <Container>
    <div className="grid items-center grid-cols-2 gap-4 md:grid-cols-4">
     {subCategories.map((subCat) => (
      <div className="col-span-1 text-center md:text-left" key={subCat.sub_category_is}>
       <SubCategoryBox subCat={subCat} />
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default HomeSubCategories
