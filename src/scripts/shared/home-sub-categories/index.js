import axios from "axios"
import Container from "../Container"
import SubCategoryBox from "../sub-category-box"
import { SITE_URL } from "../../constants"

const SubCategories = ({ data, setServices, subCatPage }) => {
 const handleClick = async (id) => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get?sub_category_id=${id}`).then((res) => {
   setServices(res.data)
  })
 }

 return (
  <section className="relative py-20 bg-zinc-50">
   <Container>
    <div className="grid items-center grid-cols-2 gap-4 md:grid-cols-4">
     {data?.map((subCat) => (
      <div className="col-span-1 text-center cursor-pointer md:text-left" key={subCat} onClick={() => handleClick(subCat.sub_category_id)}>
       <SubCategoryBox subCat={subCat} subCatPage={subCatPage} />
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default SubCategories
