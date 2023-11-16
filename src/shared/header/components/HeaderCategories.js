import { motion } from "framer-motion"
import { SITE_URL } from "../../../constants"
import axios from "axios"
import { useEffect, useState } from "react"

const HeaderCategories = ({ fixed, isOpened }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getAllCategories = async () => {
      await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories/get`).then((res) => {
        setCategories(res.data)
      })
    }

    getAllCategories()
  }, [])

  return (
    <>
      {categories.length == 0 && (
        <div
          className={`fixed top-0 bottom-0 ${isOpened ? `right-0 left-0` : `right-full -left-full`} ${
            fixed ? `-z-10` : `z-40`
          } flex items-center justify-center md:justify-evenly w-full transition-all duration-500 ease-in-out p-8 md:p-2 border-b shadow-sm text-zinc-50 bg-main-primary md:relative md:right-0 md:left-0`}
        >
          <ul className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:gap-4 md:justify-evenly">
            {categories.map((data) => (
              <motion.li key={data.category_id} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.5, timingFunction: "easeInOut" }}>
                <a href={`${SITE_URL}${data.category_name.toLowerCase()}`} className="capitalize transition-all duration-500 ease-in-out font-sansation-regular">
                  {data.category_name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default HeaderCategories
