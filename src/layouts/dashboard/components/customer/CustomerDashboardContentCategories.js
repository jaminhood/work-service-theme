import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"
import { CustomerDashboardContentCategoryBox } from "./CustomerDashboardContentCategoryBox"

const CustomerDashboardContentCategories = () => {
	const { loading, getDashboardData, handleLoading } = useThemeContext()
	const { handleOpenCategory } = useCustomerContext()
	const [categories, setCategories] = useState([])

	const btnAction = () => handleOpenCategory(`categories`)

	const params = { heading: `Categories`, btnAction, btnValue: `View All` }

	const getData = async () => {
		handleLoading(true)
		const { categories } = await getDashboardData()
		setCategories(categories.reverse())
		handleLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			{loading && <Loader />}
			<CustomerDashboardContentBox {...params}>
				<div className="grid grid-cols-4 gap-4 md:gap-12">
					{categories.map((data, idx) => (
						<CustomerDashboardContentCategoryBox
							key={idx}
							category={data}
						/>
					))}
				</div>
			</CustomerDashboardContentBox>
		</>
	)
}

export { CustomerDashboardContentCategories }
