import { ConfigProvider, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						fontFamily: `"Inter", "Inter Fallback", ${token.fontFamily}`,
						colorTextDescription: "rgb(115, 115, 115)",
						colorPrimary: "rgb(56, 114, 250)",
						colorBgLayout: "rgb(245, 245, 245)",
						// colorBorder: "rgb(245, 245, 245)",
						colorText: "rgb(82, 82, 82)",
						colorTextHeading: token.colorText,
						borderRadius: token.borderRadiusLG,
					},
				}}
				typography={{
					style: {
						marginTop: 0,
						marginBottom: 0,
					},
				}}
			>
				{children}
			</ConfigProvider>
		</>
	)
}

export { AntdProvider }
