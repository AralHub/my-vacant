import { Flex, type FlexProps, Image, Typography } from "antd"
import { type FC } from "react"

interface LogoProps extends FlexProps {
	collapsed?: boolean
}

const Logo: FC<LogoProps> = ({ collapsed, ...props }) => {
	return (
		<>
			<Flex
				gap={8}
				align={"center"}
				style={{
					whiteSpace: "nowrap",
					minWidth: 40,
					flexShrink: 0,
				}}
				{...props}
			>
				<Image
					src={"/react.svg"}
					fallback={"/public/react.svg"}
					width={40}
					height={40}
					style={{
						flexShrink: 0,
						minWidth: 40,
					}}
					preview={false}
				/>
				<Typography.Title
					level={3}
					hidden={collapsed}
				>
					MyVacant
				</Typography.Title>
			</Flex>
		</>
	)
}

export { Logo }
