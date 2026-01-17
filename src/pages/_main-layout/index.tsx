import { PlusOutlined } from "@ant-design/icons"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "antd"
import { PageHeader } from "src/widgets/shared"

export const Route = createFileRoute("/_main-layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<PageHeader
				title={"Companies"}
				extra={
					<Button
						type={"primary"}
						icon={<PlusOutlined />}
						children={"Add"}
					/>
				}
			/>
		</>
	)
}
