import { Icon } from "../../../shared/icon"
import { CustomerProfileRequestBox } from "./CustomerProfileRequestBox"

const CustomerProfileRequests = () => {
	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">My Requests</h3>
			<div className="pt-4 grid grid-cols-1 gap-4">
				<CustomerProfileRequestBox />
				<CustomerProfileRequestBox />
			</div>
			<div className="absolute right-8 bottom-8 w-[5rem] h-[5rem] rounded-full bg-main-primary flex justify-center items-center cursor-pointer">
				<Icon {...{ name: `work-service`, width: 30, height: 31, fill: "#EEEBF4" }} />
			</div>
		</>
	)
}

export { CustomerProfileRequests }
