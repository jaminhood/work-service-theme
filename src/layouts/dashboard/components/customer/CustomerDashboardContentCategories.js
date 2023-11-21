import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { categories } from "../../../../utils"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"
import { CustomerDashboardContentCategoryBox } from "./CustomerDashboardContentCategoryBox"

const CustomerDashboardContentCategories = () => {
	const { handleOpenCategory } = useCustomerContext()

	const btnAction = () => handleOpenCategory(`categories`)

	const params = { heading: `Categories`, btnAction, btnValue: `View All` }

	return (
		<CustomerDashboardContentBox {...params}>
			<div className="grid grid-cols-4 gap-12">
				{categories.map(data => (
					<CustomerDashboardContentCategoryBox
						key={data}
						category={data}
					/>
				))}
			</div>
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentCategories }
