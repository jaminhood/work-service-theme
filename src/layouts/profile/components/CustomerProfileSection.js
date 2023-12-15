import { CustomerProfileInfo } from "./CustomerProfileInfo"
import { CustomerProfileSectionContainer } from "./CustomerProfileSectionContainer"

const CustomerProfileSection = () => {
	const generalLinks = [
		{
			icon: `user`,
			title: `Personal Data`,
			link: `personal-data`,
		},
		{
			icon: `shield`,
			title: `Security`,
			link: `security`,
		},
		{
			icon: `my-requests`,
			title: `My Requests`,
			link: `my-requests`,
		},
		{
			icon: `invite-a-service`,
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
