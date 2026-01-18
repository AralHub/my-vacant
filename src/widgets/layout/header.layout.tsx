import {
	BellOutlined,
	LogoutOutlined,
	MailOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons"
import {
	Avatar,
	Button,
	Flex,
	Input,
	Layout,
	Menu,
	Popover,
	Select,
	Space,
	Tag,
	theme,
	Typography,
} from "antd"
import { type FC } from "react"
import { MenuButton, ThemeButton } from "src/widgets/actions"
import { Logo } from "src/widgets/shared"

interface HeaderLayoutProps {
	main?: boolean
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ main }) => {
	const { token } = theme.useToken()

	return (
		<>
			<Layout.Header
				style={{
					height: 72,
					lineHeight: 1,
					backgroundColor: token.colorBgContainer,
					boxShadow: token.boxShadowTertiary,
					paddingInline: token.paddingLG,
					position: "sticky",
					top: 0,
					left: 0,
					bottom: 0,
					zIndex: 10,
				}}
			>
				<Flex
					style={{
						height: "100%",
					}}
					gap={8}
					align={"center"}
					justify={"space-between"}
				>
					{main ? <Logo align={"center"} /> : null}

					<Space>
						{main ? null : <MenuButton />}
						<Input
							prefix={<SearchOutlined />}
							placeholder={"Search..."}
							variant={main ? "filled" : "outlined"}
							style={{
								backgroundColor: main ? undefined : token.colorBgLayout,
								height: 40,
							}}
						/>
					</Space>
					<Space>
						<ThemeButton />
						<Select
							placeholder={"Language"}
							variant={"filled"}
							style={{
								height: 40,
							}}
						/>
						<Button
							variant={"filled"}
							color={"default"}
							shape={"circle"}
							icon={<MailOutlined />}
							size={"large"}
						/>
						<Button
							variant={"filled"}
							color={"default"}
							shape={"circle"}
							icon={<BellOutlined />}
							size={"large"}
						/>
						<Popover
							trigger={"click"}
							placement={"bottomRight"}
							styles={{
								root: { width: 300 },
							}}
							content={
								<>
									<Tag
										variant={"filled"}
										color={"blue"}
										style={{
											width: "100%",
											paddingBlock: token.paddingSM,
											paddingInline: token.padding,
										}}
									>
										<Typography.Title level={5}>Admin</Typography.Title>
										<Typography.Paragraph
											type={"secondary"}
											style={{
												fontSize: token.fontSizeSM,
											}}
										>
											+998 90 123 45 67
										</Typography.Paragraph>
									</Tag>
									<Menu
										style={{
											marginTop: token.padding,
										}}
										styles={{
											item: {
												fontWeight: 500,
											},
										}}
										items={[
											{
												key: "/profile",
												icon: <UserOutlined />,
												label: "My Profile",
											},
											{
												key: "/logout",
												icon: <LogoutOutlined />,
												danger: true,
												label: "Logout",
											},
										]}
									/>
								</>
							}
						>
							<Avatar
								size={"large"}
								style={{
									backgroundColor: token.colorPrimaryBg,
									cursor: "pointer",
								}}
								icon={<UserOutlined style={{ color: token.colorText }} />}
								src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
							/>
						</Popover>
					</Space>
				</Flex>
			</Layout.Header>
		</>
	)
}

export { HeaderLayout }
