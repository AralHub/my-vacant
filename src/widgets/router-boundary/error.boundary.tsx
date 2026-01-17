import { ErrorComponent, useRouter } from "@tanstack/react-router"
import type { ErrorComponentProps } from "@tanstack/router-core"
import { Button, Image, Result } from "antd"
import { type FC } from "react"

const ErrorBoundary: FC<ErrorComponentProps> = ({ error }) => {
	const { history } = useRouter()

	return (
		<>
			<Result
				icon={
					<Image
						src={"/assets/error-404.png"}
						fallback={"/public/assets/error-404.png"}
						width={"100%"}
					/>
				}
				title={"500"}
				subTitle={"Server error"}
				extra={<Button onClick={() => history.back()}>Back to Home</Button>}
				children={<ErrorComponent error={error} />}
			/>
		</>
	)
}

export { ErrorBoundary }
