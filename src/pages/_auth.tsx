import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Col, Flex, Image, Layout, Row, theme, Typography } from "antd"

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
})

function RouteComponent() {
	const { token } = theme.useToken()

	return (
		<>
			<Layout
				style={{
					minHeight: "100vh",
					backgroundColor: token.colorBgContainer,
				}}
				className={"text"}
			>
				<Row>
					<Col
						xs={24}
						md={12}
					>
						<Flex
							justify={"center"}
							align={"center"}
							style={{ minHeight: "100vh" }}
						>
							<Image
								src={"/assets/auth-img.png"}
								fallback={"/public/assets/auth-img.png"}
								preview={false}
							/>
						</Flex>
					</Col>
					<Col
						xs={24}
						md={12}
					>
						<Flex
							vertical={true}
							justify={"center"}
							style={{
								paddingBlock: token.paddingLG + token.paddingXS,
								paddingInline: token.paddingLG,
								height: "100%",
							}}
						>
							<div
								style={{
									maxWidth: 464,
									width: "100%",
									marginInline: "auto",
								}}
							>
								<Flex
									gap={8}
									align={"start"}
									style={{ marginBottom: token.marginSM }}
								>
									<Image
										src={"/react.svg"}
										fallback={"/public/react.svg"}
										width={40}
										height={40}
										preview={false}
									/>
									<Typography.Title level={3}>MyVacant</Typography.Title>
								</Flex>
								<Typography.Title style={{ marginBottom: token.marginSM, fontSize: 36 }}>
									Sign In to your Account
								</Typography.Title>
								<Typography.Paragraph
									type={"secondary"}
									style={{
										marginBottom: token.marginLG + token.marginXS,
										fontSize: token.fontSizeXL,
									}}
								>
									Welcome back! Please enter your details.
								</Typography.Paragraph>
								<Outlet />
							</div>
						</Flex>
					</Col>
				</Row>
			</Layout>
		</>
	)
}
