import React from "react"
import { CustomerCategoriesMenu } from "./CustomerCategoriesMenu"
import { CustomerCategoriesRequestCTA } from "./CustomerCategoriesRequestCTA"

const CustomerCategories = () => {
	return (
		<>
			<h3 className="text-2xl text-center text-main-primary font-sansation-bold">Categories</h3>
			<CustomerCategoriesMenu />
			<CustomerCategoriesRequestCTA />
		</>
	)
}

export { CustomerCategories }

