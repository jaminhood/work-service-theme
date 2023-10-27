import { motion } from "framer-motion"
import { SITE_URL } from "../../../constants"
import axios from "axios"
import { useEffect, useState } from "react"

const HeaderCategories = ({ fixed, isOpened }) => {
  const [categories, setCategories] = useState([])

  const getAllCategories = async () => {
    await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/get`).then((res) => {
      setCategories(res.data)
    })
  }

  useEffect(async () => {
    await getAllCategories()
  }, [])

  return (
    <div
      className={`fixed top-0 bottom-0 ${isOpened ? `right-0 left-0` : `right-full -left-full`} ${
        fixed ? `-z-10` : `z-40`
      } flex items-center justify-center md:justify-evenly w-full transition-all duration-500 ease-in-out p-8 md:p-2 border-b shadow-sm text-zinc-50 border-b-main-primary bg-main-primary md:relative md:right-0 md:left-0`}
    >
      <ul class="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4 md:justify-evenly w-full">
        {categories.map((data) => (
          <>
            <motion.li key={data.category_id} initial={{ x: "-100%" }} animate={{ x: 0 }}>
              <a href={`${SITE_URL}${data.category_name.toLowerCase()}`} class="transition-all ease-in-out duration-500 font-sansation-regular capitalize">
                {data.category_name}
              </a>
            </motion.li>
            {data != 7 && <span className="hidden md:block">|</span>}
          </>
        ))}
      </ul>
    </div>
  )
}

export default HeaderCategories
