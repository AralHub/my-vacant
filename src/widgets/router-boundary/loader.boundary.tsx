import { LoadingOutlined } from "@ant-design/icons"
import { Spin, type SpinProps } from "antd"
import { type FC } from "react"

interface LoaderBoundaryProps extends SpinProps {
	loading?: boolean
}

const LoaderBoundary: FC<LoaderBoundaryProps> = ({ loading, ...props }) => {
	return (
		<>
			<Spin
				fullscreen={true}
				indicator={<LoadingOutlined />}
				spinning={loading}
				{...props}
			/>
		</>
	)
}

export { LoaderBoundary }
