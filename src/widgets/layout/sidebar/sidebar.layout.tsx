import { Link } from "@tanstack/react-router"
import { ConfigProvider, Menu, theme } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { menuData } from "src/shared/data"
import { Logo } from "src/widgets/shared"
import { SidebarContainer } from "./sidebar.container.tsx"

const SidebarLayout: FC = () => {
	const { token } = theme.useToken()

	return (
		<>
			<SidebarContainer>
				<div
					style={{
						padding: token.padding,
						height: 72,
						borderBottom: `1px solid ${token.colorBgLayout}`,
						borderInlineEnd: `1px solid ${token.colorBgLayout}`,
					}}
				>
					<Link to={"/"}>
						<Logo />
					</Link>
				</div>
				<ConfigProvider
					theme={{
						components: {
							Menu: {
								itemSelectedBg: token.colorPrimary,
								itemSelectedColor: token.colorWhite,
								itemColor: "#4b5563",
								itemHoverBg: token.colorPrimaryBg,
								groupTitleFontSize: token.fontSizeSM,
								groupTitleColor: "rgba(10, 10, 10, 0.7)",
								itemHeight: 44,
							},
						},
					}}
				>
					<Menu
						style={{
							padding: `${token.paddingSM}px ${token.padding - 4}px`,
						}}
						styles={{
							itemTitle: {
								paddingInline: token.paddingSM,
								fontWeight: 500,
							},
						}}
						classNames={{
							item: cx(css`
								&:active {
									scale: 0.95;
								}
							`),
						}}
						items={menuData}
					/>
				</ConfigProvider>
			</SidebarContainer>
		</>
	)
}

export { SidebarLayout }
