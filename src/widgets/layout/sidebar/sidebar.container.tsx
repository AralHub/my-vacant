import { Layout, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"
import { useMenuStore } from "src/shared/store"

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()
	const collapsed = useMenuStore(state => state.collapsed)

	return (
		<>
			<Layout.Sider
				width={256}
				collapsed={collapsed}
				theme={"light"}
				style={{
					boxShadow: token.boxShadowTertiary,
					borderInlineEnd: `1px solid ${token.colorBorder}`,
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
