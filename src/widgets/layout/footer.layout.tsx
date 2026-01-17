import { Layout, theme, Typography } from "antd"
import { type FC } from "react"

const FooterLayout: FC = () => {
	const { token } = theme.useToken()

	return (
		<>
			<Layout.Footer
				style={{
					backgroundColor: token.colorBgContainer,
					padding: token.padding,
					display: "flex",
					gap: 8,
					justifyContent: "space-between",
				}}
			>
				<Typography.Paragraph>
					© {new Date().getFullYear()} MyVacant. All Rights Reserved.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Made by <span style={{ color: token.colorPrimary }}>Aralhub</span>
				</Typography.Paragraph>
			</Layout.Footer>
		</>
	)
}

export { FooterLayout }
