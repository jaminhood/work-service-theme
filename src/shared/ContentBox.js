import Container from "./Container"

const ContentBox = ({ cls, children }) => {
	return (
		<div className={`relative px-4 py-20 ${cls}`}>
			<Container>{children}</Container>
		</div>
	)
}

export default ContentBox
