import { SITE_URL } from "../../constants"

const SubCategoryBox = ({ subCat, subCatPage }) => {
 if (subCatPage) {
  return (
   <div className="relative flex flex-col items-center justify-center gap-4 py-4 text-center">
    <div className="">
     <img src={subCat?.sub_category_icon} className="object-cover w-full h-full" />
    </div>
    <h4 className="pb-0 mb-0 text-base">{subCat?.sub_category_name}</h4>
   </div>
  )
 }

 return (
  <a href={`${SITE_URL}ws-login/sign-in`} className="relative flex flex-col items-center justify-center gap-4 py-4 text-center">
   <div className="">
    <img src={subCat?.sub_category_icon} className="object-cover w-full h-full" />
   </div>
   <h4 className="pb-0 mb-0 text-base">{subCat?.sub_category_name}</h4>
  </a>
 )
}

export default SubCategoryBox
