import SubCategories from "../../../shared/home-sub-categories"
import { useState, useEffect } from "react"
import axios from "axios"
import { SITE_URL } from "../../../constants"

const CategoryHero = () => {
 const [subCategories, setSubCategories] = useState([])

 const getCategory = async (id) => {
  let cat = {}
  await axios
   .get(`${SITE_URL}wp-json/ws-api/v1/categories/get`)
   .then((res) => {
    const category = res.data.find((categ) => categ.category_name.toLowerCase() === id.toLowerCase())
    return category
   })
   .then(async (category) => {
    await axios.get(`${SITE_URL}wp-json/ws-api/v1/sub-categories/get?category_id=${category.category_id}`).then((res) => {
     cat = res.data
    })
   })

  return cat
 }

 const handleClick = (service) => {
  localStorage.setItem(`theme-services`, JSON.stringify(service))
 }

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get-all`).then((res) => {
   localStorage.setItem(`theme-services`, JSON.stringify(res.data))
  })
 }, [])

 useEffect(async () => {
  const url = window.location.href
  const categoryFromURL = url.split(`/`)
  categoryFromURL.pop()
  const categoryID = categoryFromURL.pop()
  const category = await getCategory(categoryID)
  setSubCategories(category)
 }, [])

 return <SubCategories data={subCategories} setServices={handleClick} subCatPage={true} />
}

export default CategoryHero
