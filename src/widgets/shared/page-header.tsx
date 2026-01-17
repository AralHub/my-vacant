import { RightOutlined } from "@ant-design/icons"
import { Breadcrumb, type BreadcrumbProps, Flex, Space, Typography } from "antd"
import { type FC, type ReactNode } from "react"

interface PageHeaderProps {
	title: string
	breadcrumb?: BreadcrumbProps["items"]
	extra?: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ title, breadcrumb, extra }) => {
	return (
		<>
			<Flex
				align={"center"}
				gap={8}
				justify={"space-between"}
			>
				<Typography.Title level={3}>{title}</Typography.Title>

				{extra ? (
					<Space>{extra}</Space>
				) : breadcrumb ? (
					<Breadcrumb
						styles={{
							separator: {
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							},
						}}
						separator={<RightOutlined style={{ fontSize: 10 }} />}
						items={breadcrumb}
					/>
				) : null}
			</Flex>
		</>
	)
}

export { PageHeader }
