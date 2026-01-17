import { PlusOutlined, TeamOutlined, UserOutlined, BankOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Button, Card, Col, Row, Statistic, Typography, Avatar, Tag, Space, Progress } from "antd"
import { PageHeader } from "src/widgets/shared"
import { type FC } from "react"

export const Route = createFileRoute("/_main-layout/")({
	component: RouteComponent,
})

interface Company {
	id: string
	name: string
	logo?: string
	industry?: string
	totalPositions: number
	filledPositions: number
	temporaryPositions: number
	employees: number
	location?: string
}

// Моковые данные для примера
const mockCompanies: Company[] = [
	{
		id: "1",
		name: "TechCorp Solutions",
		industry: "IT",
		totalPositions: 25,
		filledPositions: 18,
		temporaryPositions: 3,
		employees: 32,
		location: "Алматы",
	},
	{
		id: "2",
		name: "FinanceHub",
		industry: "Финансы",
		totalPositions: 15,
		filledPositions: 12,
		temporaryPositions: 2,
		employees: 20,
		location: "Астана",
	},
	{
		id: "3",
		name: "RetailMax",
		industry: "Розничная торговля",
		totalPositions: 40,
		filledPositions: 35,
		temporaryPositions: 0,
		employees: 45,
		location: "Алматы",
	},
	{
		id: "4",
		name: "MediCare Group",
		industry: "Здравоохранение",
		totalPositions: 30,
		filledPositions: 22,
		temporaryPositions: 5,
		employees: 38,
		location: "Шымкент",
	},
	{
		id: "5",
		name: "EduTech Innovations",
		industry: "Образование",
		totalPositions: 20,
		filledPositions: 15,
		temporaryPositions: 0,
		employees: 22,
		location: "Алматы",
	},
	{
		id: "6",
		name: "Logistics Pro",
		industry: "Логистика",
		totalPositions: 35,
		filledPositions: 28,
		temporaryPositions: 4,
		employees: 42,
		location: "Астана",
	},
]

const CompanyCard: FC<{ company: Company }> = ({ company }) => {
	const { name, industry, totalPositions, filledPositions, temporaryPositions, employees, location } = company
	const vacantPositions = totalPositions - filledPositions - temporaryPositions
	const fillPercentage = totalPositions > 0 ? Math.round(((filledPositions + temporaryPositions) / totalPositions) * 100) : 0
	// Если есть свободные ставки, учитываем только занятые в соотношении
	const positionsForRatio = vacantPositions > 0 ? (filledPositions + temporaryPositions) : totalPositions
	const employeeToPositionRatio = `${employees}/${positionsForRatio}`

	return (

		<Card
			hoverable={true}
			style={{ height: "100%" }}
			actions={[
				<Link key={"view"} to={"/companies/$companyId"} params={{ companyId: company.id }}>
					<Button type={"link"}>
						Подробнее
					</Button>
				</Link>,
			]}
		>
			<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
				<Space align={"center"} style={{ width: "100%", justifyContent: "space-between" }}>
					<Space>
						<Avatar
							size={48}
							icon={<BankOutlined />}
							style={{ backgroundColor: "#1890ff" }}
						/>
						<div>
							<Typography.Title level={5} style={{ margin: 0 }}>
								{name}
							</Typography.Title>
							{location && (
								<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
									{location}
								</Typography.Text>
							)}
						</div>
					</Space>
					{industry && <Tag color={"blue"}>{industry}</Tag>}
				</Space>

				<Row gutter={16}>
					<Col span={8}>
						<Statistic
							title={"Свободно"}
							value={vacantPositions}
							prefix={<UserOutlined />}
							styles={{
								content: { color: "#52c41a" }
							}}
						/>
					</Col>
					<Col span={8}>
						<Statistic
							title={"Временно"}
							value={temporaryPositions}
							prefix={<ClockCircleOutlined />}
							styles={{
								content: { color: "#faad14" }
							}}
						/>
					</Col>
					<Col span={8}>
						<Statistic
							title={"Занято"}
							value={filledPositions}
							prefix={<TeamOutlined />}
							styles={{
								content: { color: "#1890ff" }
							}}
						/>
					</Col>
				</Row>

				<div>
					<Space style={{ width: "100%", justifyContent: "space-between", marginBottom: 4 }}>
						<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
							Заполненность ставок
						</Typography.Text>
						<Typography.Text strong={true}>{fillPercentage}%</Typography.Text>
					</Space>
					<Progress
						percent={fillPercentage}
						strokeColor={{
							"0%": "#108ee9",
							"100%": "#87d068",
						}}
						showInfo={false}
					/>
				</div>

				<Row gutter={16}>
					<Col span={12}>
						<Statistic
							title={"Всего ставок"}
							value={totalPositions}
							styles={{
								content: { fontSize: 16 }
							}}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title={"Работников/ставку"}
							value={employeeToPositionRatio}
							styles={{
								content: { fontSize: 16 }
							}}
						/>
					</Col>
				</Row>
			</Space>
		</Card>
	)
}

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
			<Row gutter={[16, 16]}>
				{mockCompanies.map((company) => (
					<Col key={company.id} xs={24} sm={12} lg={8} xl={6}>
						<CompanyCard company={company} />
					</Col>
				))}
			</Row>
		</>
	)
}
