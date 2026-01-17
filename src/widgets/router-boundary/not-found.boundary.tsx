import { Button, Image, Result } from "antd"
import { type FC } from "react"

const NotFoundBoundary: FC = () => {
	return (
		<>
			<Result
				icon={
					<Image
						src={"/assets/error-404.png"}
						fallback={"/public/assets/error-404.png"}
						width={454}
						preview={false}
						height={454}
					/>
				}
				title={"Page not Found"}
				subTitle={"Sorry, the page you are looking for doesn't exist"}
				extra={
					<Button
						type={"primary"}
						style={{
							height: 48,
						}}
						onClick={() => history.back()}
					>
						Back to Home
					</Button>
				}
			/>
		</>
	)
}

export { NotFoundBoundary }
