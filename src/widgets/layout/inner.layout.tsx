import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"

const InnerLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Layout>{children}</Layout>
		</>
	)
}

export { InnerLayout }
