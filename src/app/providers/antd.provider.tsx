import { ConfigProvider, theme } from "antd"
import type { AliasToken } from "antd/es/theme/interface"
import { type FC, type PropsWithChildren, useMemo } from "react"
import { useThemeStore } from "src/shared/store"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()
	const { isDark } = useThemeStore()

	const customToken: AliasToken = useMemo(() => {
		if (isDark)
			return {
				colorTextDescription: "rgb(212, 212, 212)",
				colorPrimary: "rgb(56, 114, 250)",
				colorBgLayout: "rgb(30, 39, 52)",
				colorBgContainer: "rgb(39, 49, 66)",
				colorBorder: "rgb(69, 85, 108)",
				colorBorderSecondary: "rgb(69, 85, 108)",
				colorText: "rgb(250, 250, 250)",
				// colorTextHeading: "rgb(250, 250, 250)",
				borderRadius: token.borderRadiusLG,
			} as AliasToken

		return {
			colorTextDescription: "rgb(115, 115, 115)",
			colorPrimary: "rgb(56, 114, 250)",
			colorBgLayout: "rgb(245, 245, 245)",
			// colorBorder: "rgb(245, 245, 245)",
			colorText: "rgb(82, 82, 82)",
			colorTextHeading: token.colorText,
			borderRadius: token.borderRadiusLG,
		} as AliasToken
	}, [isDark, token])

	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
					token: {
						...customToken,
						fontFamily: `"Inter", "Inter Fallback", ${token.fontFamily}`,
					},
				}}
				typography={{
					style: {
						marginTop: 0,
						marginBottom: 0,
					},
				}}
				menu={{
					style: {
						borderInlineEnd: 0,
					},
				}}
				card={{
					variant: "borderless"
				}}
			>
				{children}
			</ConfigProvider>
		</>
	)
}

export { AntdProvider }
