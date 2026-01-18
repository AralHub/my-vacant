import { Link } from "@tanstack/react-router"
import { ConfigProvider, Menu, theme } from "antd"
import { css, cx } from "antd-style"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { useMenuStore, useThemeStore } from "src/shared/store"
import { Logo } from "src/widgets/shared"
import { SidebarContainer } from "./sidebar.container.tsx"

const SidebarLayout: FC = () => {
	const { token } = theme.useToken()
	const { isDark } = useThemeStore()
	const collapsed = useMenuStore((state) => state.collapsed)

	const menuItems = useMemo(() => {
		if (collapsed) return menuData?.filter((el) => el?.type !== "group")
		return menuData
	}, [collapsed])

	return (
		<>
			<SidebarContainer>
				<div
					style={{
						padding: token.padding,
						paddingInline: token.padding + 4,
						height: 72,
						borderBottom: `1px solid ${token.colorBorder}`,
					}}
				>
					<Link to={"/"}>
						<Logo collapsed={collapsed} />
					</Link>
				</div>
				<ConfigProvider
					theme={{
						components: {
							Menu: {
								itemSelectedBg: token.colorPrimary,
								itemSelectedColor: token.colorWhite,
								itemColor: isDark ? token.colorText : "#4b5563",
								itemHoverBg: isDark ? "rgb(49, 65, 88)" : token.colorPrimaryBg,
								itemActiveBg: isDark ? "rgb(49, 65, 88)" : token.colorPrimaryBg,
								groupTitleFontSize: token.fontSizeSM,
								groupTitleColor: isDark ? "rgba(250, 250, 250, 0.7)" : "rgba(10, 10, 10, 0.7)",
								itemHeight: 44,
							},
						},
					}}
				>
					<Menu
						mode={"inline"}
						inlineCollapsed={collapsed}
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
						items={menuItems}
					/>
				</ConfigProvider>
			</SidebarContainer>
		</>
	)
}

export { SidebarLayout }
