import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"
import { CustomerCategoriesRenderMenuServiceBox } from "./CustomerCategoriesRenderMenuServiceBox"

const CustomerCategoriesRenderMenuServices = ({ subCategoryID }) => {
	const { loading, getServices, handleLoading } = useThemeContext()
	const { openedCategory, handleOpenCategory } = useCustomerContext()
	const [services, setServices] = useState([])

	const getData = async () => {
		handleLoading(true)
		if (subCategoryID !== null) {
			const data = await getServices(subCategoryID)
			setServices(data.reverse())
		} else {
			setServices([])
		}
		handleLoading(false)
	}

	useEffect(() => {
		getData()
	}, [subCategoryID])

	return (
		<>
			{loading && <Loader />}
			<div className="py-4">
				<h3 className="text-lg text-main-primary font-sansation-bold">Services</h3>
				<div className="grid grid-cols-2 gap-4 py-4">
					{services.map((service, idx) => (
						<CustomerCategoriesRenderMenuServiceBox
							key={idx}
							service={service}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export { CustomerCategoriesRenderMenuServices }
