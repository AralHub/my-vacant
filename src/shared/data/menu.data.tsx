import { FileOutlined, HomeOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"

export type MenuItem = Required<MenuProps>["items"][number]

export const menuData: MenuItem[] = [
	{
		key: "Dashboard",
		type: "group",
		label: "Dashboard",
	},
	{
		key: "/",
		icon: <HomeOutlined />,
		label: "Home",
	},
	{
		key: "Pages",
		type: "group",
		label: "Pages",
	},
	{
		key: "/vacancies",
		icon: <FileOutlined />,
		label: "Vacancies",
	},
]
