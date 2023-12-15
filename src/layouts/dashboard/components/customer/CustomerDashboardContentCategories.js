import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"
import { CustomerDashboardContentCategoryBox } from "./CustomerDashboardContentCategoryBox"

const CustomerDashboardContentCategories = () => {
	const { handleOpenCategory, getCategories } = useCustomerContext()
	const [categories, setCategories] = useState([])

	const btnAction = () => handleOpenCategory(`categories`)

	const params = { heading: `Categories`, btnAction, btnValue: `View All` }

	const getData = async () => {
		const data = await getCategories()
		setCategories(data.reverse())
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<CustomerDashboardContentBox {...params}>
			<div className="grid grid-cols-4 md:gap-12 gap-4">
				{categories.map((data, idx) => (
					<CustomerDashboardContentCategoryBox
						key={idx}
						category={data}
					/>
				))}
			</div>
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentCategories }
