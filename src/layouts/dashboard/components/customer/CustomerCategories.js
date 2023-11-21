import React from "react"
import { CustomerCategoriesMenu } from "./CustomerCategoriesMenu"
import { CustomerCategoriesRequestCTA } from "./CustomerCategoriesRequestCTA"

const CustomerCategories = () => {
	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center">Categories</h3>
			<CustomerCategoriesMenu />
			<CustomerCategoriesRequestCTA />
		</>
	)
}

export { CustomerCategories }
