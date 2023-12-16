const CustomerChatContainer = ({ title, children }) => {
	return (
		<div className="py-4">
			<h3 className="text-lg text-main-primary font-sansation-bold capitalize">{title} Chats</h3>
			{children}
		</div>
	)
}

export { CustomerChatContainer }
