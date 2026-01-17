import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Layout
				style={{
					minHeight: "100vh",
				}}
				hasSider={true}
			>
				{children}
			</Layout>
		</>
	)
}

export { MainLayout }
