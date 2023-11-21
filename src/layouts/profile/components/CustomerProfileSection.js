import { CustomerProfileInfo } from "./CustomerProfileInfo"
import { CustomerProfileSectionContainer } from "./CustomerProfileSectionContainer"

const CustomerProfileSection = () => {
	const generalLinks = [
		{
			icon: `work-service`,
			title: `Personal Data`,
			link: `personal-data`,
		},
		{
			icon: `work-service`,
			title: `Security`,
			link: `security`,
		},
		{
			icon: `work-service`,
			title: `My Requests`,
			link: `my-requests`,
		},
		{
			icon: `work-service`,
			title: `Invite A Friend`,
			link: `invite-a-friend`,
		},
	]

	const supportLinks = [
		{
			icon: `work-service`,
			title: `Support`,
			link: `support`,
		},
		{
			icon: `work-service`,
			title: `FAQ`,
			link: `faq`,
		},
		{
			icon: `work-service`,
			title: `Terms & Conditions`,
			link: `terms-conditions`,
		},
	]

	return (
		<div className="">
			<CustomerProfileInfo />
			<CustomerProfileSectionContainer
				title="General"
				links={generalLinks}
			/>
			<CustomerProfileSectionContainer
				title="Support"
				links={supportLinks}
			/>
		</div>
	)
}

export { CustomerProfileSection }
