import { LockOutlined, PhoneOutlined } from "@ant-design/icons"
import { createFileRoute } from "@tanstack/react-router"
import { Button, Checkbox, ConfigProvider, Form, type FormProps, Input } from "antd"

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
})

function RouteComponent() {
	const [form] = Form.useForm()
	const navigate = Route.useNavigate()

	const onFinish: FormProps["onFinish"] = () => {
		navigate({
			to: "/",
			replace: true,
		})
	}

	return (
		<Form
			name={"login-form"}
			layout={"vertical"}
			labelCol={{
				style: {
					display: "none",
				},
			}}
			requiredMark={false}
			autoCapitalize={"off"}
			form={form}
			onFinish={onFinish}
		>
			<Form.Item
				name={"phone_number"}
				label={"Phone number"}
				rules={[{ required: true }]}
			>
				<Input
					style={{
						backgroundColor: "rgb(245 245 245)",
						height: 56,
						borderRadius: 14,
					}}
					prefix={<PhoneOutlined style={{ marginRight: 8 }} />}
					placeholder={"Phone number"}
				/>
			</Form.Item>
			<Form.Item
				name={"password"}
				label={"Password"}
				rules={[{ required: true }]}
			>
				<Input.Password
					style={{
						backgroundColor: "rgb(245 245 245)",
						height: 56,
						borderRadius: 14,
					}}
					prefix={<LockOutlined style={{ marginRight: 8 }} />}
					placeholder={"Password"}
				/>
			</Form.Item>
			<Form.Item
				name={"remember"}
				initialValue={false}
				valuePropName={"checked"}
			>
				<ConfigProvider
					theme={{
						token: {
							controlInteractiveSize: 18,
						},
					}}
				>
					<Checkbox children={"Remember me"} />
				</ConfigProvider>
			</Form.Item>
			<Form.Item>
				<Button
					type={"primary"}
					block={true}
					style={{
						height: 52,
						borderRadius: 10,
						fontWeight: 500,
					}}
					htmlType={"submit"}
				>
					Sign In
				</Button>
			</Form.Item>
		</Form>
	)
}
