import { Layout, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()

	return (
		<>
			<Layout.Sider
				width={256}
				theme={"light"}
				style={{
					boxShadow: token.boxShadowTertiary,
					height: "100vh",
					position: "sticky",
					top: 0,
					left: 0,
					bottom: 0,
				}}
			>
				{children}
			</Layout.Sider>
		</>
	)
}

export { SidebarContainer }
