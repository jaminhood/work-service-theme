import { Icon } from "../../../../shared/icon"

const CustomerDashboardContentTop = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="col-span-12 md:col-span-5">
				<h3 className="text-3xl text-main-primary font-sansation-bold capitalize">Hi Abby</h3>
				<p className="text-base text-main-primary font-sansation-bold">How can we help you today?</p>
			</div>
			<div className="col-span-12 md:col-span-7 flex justify-end">
				<div className="w-96 h-full rounded-lg bg-[#d4cbed] flex gap-2 px-2 items-center">
					<span className="w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer">
						<Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#5E4A96" }} />
					</span>
					<input
						type="search"
						placeholder="Search"
						className="placeholder:text-main-primary text-main-primary bg-transparent w-full focus:outline-[0] focus-visible:outline-transparent outline-[0] font-sansation-regular placeholder:font-sansation-regular"
						style={{ outline: 0 }}
					/>
				</div>
			</div>
		</div>
	)
}

export { CustomerDashboardContentTop }
