import { Flex, Layout, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()

	return (
		<>
			<Layout.Content>
				<Flex
					vertical={true}
					gap={token.paddingLG}
					style={{
						padding: token.paddingLG,
					}}
				>
					{children}
				</Flex>
			</Layout.Content>
		</>
	)
}

export { ContentLayout }
