import { createFileRoute, useParams } from "@tanstack/react-router"
import {
	Avatar,
	Button,
	Card,
	Descriptions,
	Space,
	Tabs,
	Typography,
	Table,
	Tag,
	Row,
	Col,
	Divider,
} from "antd"
import {
	UserOutlined,
	EditOutlined,
	DownloadOutlined,
	FileTextOutlined,
	BookOutlined,
	TeamOutlined,
	MedicineBoxOutlined,
	FileDoneOutlined,
	FilePdfOutlined,
} from "@ant-design/icons"
import { PageHeader } from "src/widgets/shared"
import { type FC } from "react"

export const Route = createFileRoute("/_layout/companies/$companyId/employees/$employeeId")({
	component: RouteComponent,
})

interface EmployeeProfile {
	id: string
	firstName: string
	lastName: string
	middleName?: string
	avatar?: string
	pinfl: string
	passportNumber: string
	birthDate: string
	totalExperience: number // в годах
	age: number
	gender: "Мужской" | "Женский"
	email?: string
	phone?: string
	department?: string
	position?: string
}

interface WorkRecord {
	id: string
	company: string
	position: string
	startDate: string
	endDate?: string
	orderNumber: string
	orderDate: string
	contractNumber?: string
	contractDate?: string
	isCurrent?: boolean
}

interface Education {
	id: string
	institution: string
	specialty: string
	degree: string
	graduationYear: string
	diplomaNumber?: string
}

interface Relative {
	id: string
	relationship: string
	firstName: string
	lastName: string
	middleName?: string
	birthDate: string
	phone?: string
}

interface SickLeave {
	id: string
	startDate: string
	endDate: string
	diagnosis: string
	doctor: string
	number: string
}

interface Contract {
	id: string
	contractNumber: string
	contractDate: string
	startDate: string
	endDate?: string
	subject: string
	amount: number
	status: "Активен" | "Завершен" | "Расторгнут"
}

// Моковые данные
const getEmployeeProfile = (employeeId: string): EmployeeProfile | null => {
	const profiles: Record<string, EmployeeProfile> = {
		emp1: {
			id: "emp1",
			firstName: "Иван",
			lastName: "Иванов",
			middleName: "Петрович",
			pinfl: "850615300123",
			passportNumber: "N1234567",
			birthDate: "1985-06-15",
			totalExperience: 15,
			age: 39,
			gender: "Мужской",
			email: "ivan.ivanov@techcorp.kz",
			phone: "+7 (777) 123-45-67",
			department: "Руководство",
			position: "Директор",
		},
		emp2: {
			id: "emp2",
			firstName: "Петр",
			lastName: "Петров",
			middleName: "Сергеевич",
			pinfl: "920811400234",
			passportNumber: "N2345678",
			birthDate: "1992-08-11",
			totalExperience: 5,
			age: 32,
			gender: "Мужской",
			email: "petr.petrov@techcorp.kz",
			phone: "+7 (777) 234-56-78",
			department: "Управление",
			position: "Менеджер",
		},
		emp3: {
			id: "emp3",
			firstName: "Анна",
			lastName: "Смирнова",
			middleName: "Александровна",
			pinfl: "950320500345",
			passportNumber: "N3456789",
			birthDate: "1995-03-20",
			totalExperience: 3,
			age: 29,
			gender: "Женский",
			email: "anna.smirnova@techcorp.kz",
			phone: "+7 (777) 345-67-89",
			department: "Продажи",
			position: "Менеджер по продажам",
		},
		emp4: {
			id: "emp4",
			firstName: "Мария",
			lastName: "Козлова",
			middleName: "Дмитриевна",
			pinfl: "980415600456",
			passportNumber: "N4567890",
			birthDate: "1998-04-15",
			totalExperience: 2,
			age: 26,
			gender: "Женский",
			email: "maria.kozlova@techcorp.kz",
			phone: "+7 (777) 456-78-90",
			department: "Продажи",
			position: "Менеджер по продажам",
		},
	}

	// Если профиль не найден, создаем базовый профиль
	if (!profiles[employeeId]) {
		const currentYear = new Date().getFullYear()
		const birthYear = 1990 + (parseInt(employeeId.replace("emp", "")) % 20)
		return {
			id: employeeId,
			firstName: "Имя",
			lastName: "Фамилия",
			middleName: "Отчество",
			pinfl: `${birthYear}${String(Math.floor(Math.random() * 1000000)).padStart(6, "0")}`,
			passportNumber: `N${String(Math.floor(Math.random() * 10000000)).padStart(7, "0")}`,
			birthDate: `${birthYear}-01-01`,
			totalExperience: 5,
			age: currentYear - birthYear,
			gender: "Мужской",
			email: `employee${employeeId}@techcorp.kz`,
			phone: `+7 (777) ${String(Math.floor(Math.random() * 10000000)).padStart(7, "0")}`,
			department: "Разработка",
			position: "Работник",
		}
	}

	return profiles[employeeId]
}

const getWorkRecords = (_employeeId: string): WorkRecord[] => {
	return [
		{
			id: "wr1",
			company: "TechCorp Solutions",
			position: "Директор",
			startDate: "2020-01-15",
			orderNumber: "Приказ №12",
			orderDate: "2020-01-10",
			contractNumber: "Трудовой договор № 2",
			contractDate: "2020-01-15",
			isCurrent: true,
		},
		{
			id: "wr2",
			company: "IT Solutions Ltd",
			position: "Заместитель директора",
			startDate: "2015-03-01",
			endDate: "2019-12-31",
			orderNumber: "Приказ №45",
			orderDate: "2015-02-25",
		},
		{
			id: "wr3",
			company: "TechStart",
			position: "Менеджер проектов",
			startDate: "2010-06-01",
			endDate: "2015-02-28",
			orderNumber: "Приказ №78",
			orderDate: "2010-05-25",
		},
	]
}

const getEducation = (_employeeId: string): Education[] => {
	return [
		{
			id: "edu1",
			institution: "Казахский национальный университет им. аль-Фараби",
			specialty: "Информационные системы",
			degree: "Магистр",
			graduationYear: "2007",
			diplomaNumber: "ДПЛ №123456",
		},
		{
			id: "edu2",
			institution: "Казахский национальный университет им. аль-Фараби",
			specialty: "Прикладная информатика",
			degree: "Бакалавр",
			graduationYear: "2005",
			diplomaNumber: "ДПЛ №654321",
		},
	]
}

const getRelatives = (_employeeId: string): Relative[] => {
	return [
		{
			id: "rel1",
			relationship: "Супруг(а)",
			firstName: "Мария",
			lastName: "Иванова",
			middleName: "Сергеевна",
			birthDate: "1987-03-20",
			phone: "+7 (777) 111-22-33",
		},
		{
			id: "rel2",
			relationship: "Сын",
			firstName: "Алексей",
			lastName: "Иванов",
			middleName: "Иванович",
			birthDate: "2010-09-15",
		},
		{
			id: "rel3",
			relationship: "Дочь",
			firstName: "Анна",
			lastName: "Иванова",
			middleName: "Ивановна",
			birthDate: "2013-05-10",
		},
	]
}

const getSickLeaves = (_employeeId: string): SickLeave[] => {
	return [
		{
			id: "sl1",
			startDate: "2024-03-01",
			endDate: "2024-03-10",
			diagnosis: "ОРВИ",
			doctor: "Иванова А.А.",
			number: "БЛ-2024-001234",
		},
		{
			id: "sl2",
			startDate: "2023-11-15",
			endDate: "2023-11-20",
			diagnosis: "Грипп",
			doctor: "Петров П.П.",
			number: "БЛ-2023-005678",
		},
	]
}

const getContracts = (_employeeId: string): Contract[] => {
	return [
		{
			id: "c1",
			contractNumber: "ГПД-2024-001",
			contractDate: "2024-01-15",
			startDate: "2024-01-15",
			endDate: "2024-12-31",
			subject: "Разработка веб-приложения",
			amount: 5000000,
			status: "Активен",
		},
		{
			id: "c2",
			contractNumber: "ГПД-2023-045",
			contractDate: "2023-06-01",
			startDate: "2023-06-01",
			endDate: "2023-12-31",
			subject: "Консультационные услуги",
			amount: 3000000,
			status: "Завершен",
		},
	]
}

const WorkBookTab: FC<{ employeeId: string }> = ({ employeeId }) => {
	const records = getWorkRecords(employeeId)
	const currentRecord = records.find((r) => r.isCurrent)
	const pastRecords = records.filter((r) => !r.isCurrent)

	const columns = [
		{
			title: "#",
			key: "index",
			width: 50,
			render: (_: unknown, __: unknown, index: number) => index + 1,
		},
		{
			title: "Дата начала работы",
			dataIndex: "startDate",
			key: "startDate",
			render: (date: string) => `${new Date(date).toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" })} г.`,
		},
		{
			title: "Должность",
			key: "position",
			render: (_: unknown, record: WorkRecord) => (
				<Typography.Text>
					{"Принят на должность: "}
					<strong>{record.position}</strong>
				</Typography.Text>
			),
		},
		{
			title: "Договор",
			key: "contract",
			render: (_: unknown, record: WorkRecord) => {
				if (record.contractNumber && record.contractDate) {
					return (
						<Typography.Text>
							{record.contractNumber} от {new Date(record.contractDate).toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" })}
						</Typography.Text>
					)
				}
				return "-"
			},
		},
		{
			title: "Приказ",
			key: "order",
			render: (_: unknown, record: WorkRecord) => (
				<Typography.Text>
					{record.orderNumber} от {new Date(record.orderDate).toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" })}
				</Typography.Text>
			),
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: () => (
				<Button type={"primary"} size={"small"}>
					{"Проверить ЭЦП"}
				</Button>
			),
		},
	]

	const currentYear = new Date().getFullYear()
	const years = [currentYear - 2, currentYear - 1, currentYear, currentYear + 1, currentYear + 2]
	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	]

	return (
		<Space direction={"vertical"} size={"large"} style={{ width: "100%" }}>
			{currentRecord && (
				<div>
					<Typography.Title level={5} style={{ marginBottom: 16 }}>
						{"Текущее место работы"}
					</Typography.Title>
					<Table
						columns={columns}
						dataSource={[currentRecord]}
						rowKey={"id"}
						pagination={false}
						bordered={true}
					/>
				</div>
			)}

			{pastRecords.length > 0 && (
				<div>
					<Typography.Title level={5} style={{ marginBottom: 16 }}>
						{"Предыдущие места работы"}
					</Typography.Title>
					<Table
						columns={columns}
						dataSource={pastRecords}
						rowKey={"id"}
						pagination={false}
						bordered={true}
					/>
				</div>
			)}

			<Divider />

			<div>
				<Typography.Title level={5} style={{ marginBottom: 16 }}>
					{"Сведения о заработной плате"}
				</Typography.Title>
				<Space direction={"vertical"} size={"middle"} style={{ width: "100%" }}>
					{years.map((year) => (
						<Card key={year} size={"small"}>
							<Space direction={"vertical"} size={"small"} style={{ width: "100%" }}>
								<Typography.Text strong={true} style={{ fontSize: 16 }}>
									{year}
								</Typography.Text>
								<Space wrap={true}>
									{months.map((month) => (
										<Button key={month} size={"small"} type={"default"}>
											{month}
										</Button>
									))}
								</Space>
							</Space>
						</Card>
					))}
				</Space>
			</div>
		</Space>
	)
}

const EducationTab: FC<{ employeeId: string }> = ({ employeeId }) => {
	const education = getEducation(employeeId)

	return (
		<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
			{education.map((edu) => (
				<Card key={edu.id}>
					<Descriptions column={1} size={"small"}>
						<Descriptions.Item label={"Учебное заведение"}>{edu.institution}</Descriptions.Item>
						<Descriptions.Item label={"Специальность"}>{edu.specialty}</Descriptions.Item>
						<Descriptions.Item label={"Степень"}>{edu.degree}</Descriptions.Item>
						<Descriptions.Item label={"Год окончания"}>{edu.graduationYear}</Descriptions.Item>
						{edu.diplomaNumber && (
							<Descriptions.Item label={"Номер диплома"}>{edu.diplomaNumber}</Descriptions.Item>
						)}
					</Descriptions>
				</Card>
			))}
		</Space>
	)
}

const RelativesTab: FC<{ employeeId: string }> = ({ employeeId }) => {
	const relatives = getRelatives(employeeId)

	const columns = [
		{
			title: "Степень родства",
			dataIndex: "relationship",
			key: "relationship",
		},
		{
			title: "ФИО",
			key: "name",
			render: (_: unknown, record: Relative) =>
				`${record.lastName} ${record.firstName} ${record.middleName || ""}`,
		},
		{
			title: "Дата рождения",
			dataIndex: "birthDate",
			key: "birthDate",
			render: (date: string) => new Date(date).toLocaleDateString("ru-RU"),
		},
		{
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (phone?: string) => phone || "-",
		},
	]

	return <Table columns={columns} dataSource={relatives} rowKey={"id"} pagination={false} />
}

const SickLeaveTab: FC<{ employeeId: string }> = ({ employeeId }) => {
	const sickLeaves = getSickLeaves(employeeId)

	const columns = [
		{
			title: "Номер",
			dataIndex: "number",
			key: "number",
		},
		{
			title: "Период",
			key: "period",
			render: (_: unknown, record: SickLeave) =>
				`${new Date(record.startDate).toLocaleDateString("ru-RU")} - ${new Date(record.endDate).toLocaleDateString("ru-RU")}`,
		},
		{
			title: "Диагноз",
			dataIndex: "diagnosis",
			key: "diagnosis",
		},
		{
			title: "Врач",
			dataIndex: "doctor",
			key: "doctor",
		},
	]

	return <Table columns={columns} dataSource={sickLeaves} rowKey={"id"} pagination={false} />
}

const ContractTab: FC<{ employeeId: string }> = ({ employeeId }) => {
	const contracts = getContracts(employeeId)

	const columns = [
		{
			title: "Номер договора",
			dataIndex: "contractNumber",
			key: "contractNumber",
		},
		{
			title: "Дата договора",
			dataIndex: "contractDate",
			key: "contractDate",
			render: (date: string) => new Date(date).toLocaleDateString("ru-RU"),
		},
		{
			title: "Период",
			key: "period",
			render: (_: unknown, record: Contract) =>
				`${new Date(record.startDate).toLocaleDateString("ru-RU")} - ${record.endDate ? new Date(record.endDate).toLocaleDateString("ru-RU") : "бессрочно"}`,
		},
		{
			title: "Предмет",
			dataIndex: "subject",
			key: "subject",
		},
		{
			title: "Сумма",
			dataIndex: "amount",
			key: "amount",
			render: (amount: number) => `${amount.toLocaleString("ru-RU")} ₸`,
		},
		{
			title: "Статус",
			dataIndex: "status",
			key: "status",
			render: (status: string) => {
				const color = status === "Активен" ? "green" : status === "Завершен" ? "blue" : "red"
				return <Tag color={color}>{status}</Tag>
			},
		},
	]

	return <Table columns={columns} dataSource={contracts} rowKey={"id"} pagination={false} />
}

const CVTab: FC = () => {
	return (
		<Card>
			<Space orientation={"vertical"} size={"large"} style={{ width: "100%" }}>
				<div>
					<Typography.Title level={4}>{"Личная информация"}</Typography.Title>
					<Typography.Paragraph>
						{"Опытный руководитель с более чем 15-летним стажем в IT-индустрии. Специализируюсь на управлении командами разработки, стратегическом планировании и внедрении инновационных технологических решений."}
					</Typography.Paragraph>
				</div>

				<Divider />

				<div>
					<Typography.Title level={4}>{"Профессиональные навыки"}</Typography.Title>
					<Space wrap={true}>
						<Tag>{"Управление проектами"}</Tag>
						<Tag>{"Стратегическое планирование"}</Tag>
						<Tag>{"Командообразование"}</Tag>
						<Tag>{"Бюджетирование"}</Tag>
						<Tag>{"Переговоры"}</Tag>
						<Tag>{"Agile/Scrum"}</Tag>
					</Space>
				</div>

				<Divider />

				<div>
					<Typography.Title level={4}>{"Достижения"}</Typography.Title>
					<ul>
						<li>{"Успешно запустил 50+ IT-проектов"}</li>
						<li>{"Увеличил прибыль компании на 200% за 3 года"}</li>
						<li>{"Сформировал команду из 100+ специалистов"}</li>
						<li>{"Внедрил систему управления проектами, повысив эффективность на 40%"}</li>
					</ul>
				</div>

				<Divider />

				<div>
					<Typography.Title level={4}>{"Языки"}</Typography.Title>
					<Space orientation={"vertical"}>
						<Typography.Text>{"Казахский - Родной"}</Typography.Text>
						<Typography.Text>{"Русский - Свободно"}</Typography.Text>
						<Typography.Text>{"Английский - Продвинутый (C1)"}</Typography.Text>
					</Space>
				</div>
			</Space>
		</Card>
	)
}

function RouteComponent() {
	const { companyId, employeeId } = useParams({
		from: "/_layout/companies/$companyId/employees/$employeeId",
	})
	const profile = getEmployeeProfile(employeeId)

	if (!profile) {
		return (
			<>
				<PageHeader title={"Работник не найден"} />
			</>
		)
	}

	const tabItems = [
		{
			key: "workbook",
			label: (
				<Space>
					<BookOutlined />
					Трудовая книжка
				</Space>
			),
			children: <WorkBookTab employeeId={employeeId} />,
		},
		{
			key: "education",
			label: (
				<Space>
					<FileTextOutlined />
					Образование
				</Space>
			),
			children: <EducationTab employeeId={employeeId} />,
		},
		{
			key: "relatives",
			label: (
				<Space>
					<TeamOutlined />
					Родственники
				</Space>
			),
			children: <RelativesTab employeeId={employeeId} />,
		},
		{
			key: "sickleave",
			label: (
				<Space>
					<MedicineBoxOutlined />
					Больничный лист
				</Space>
			),
			children: <SickLeaveTab employeeId={employeeId} />,
		},
		{
			key: "contract",
			label: (
				<Space>
					<FileDoneOutlined />
					Гражданско-правовой договор
				</Space>
			),
			children: <ContractTab employeeId={employeeId} />,
		},
		{
			key: "cv",
			label: (
				<Space>
					<FilePdfOutlined />
					{"CV/Объективка"}
				</Space>
			),
			children: <CVTab />,
		},
	]

	return (
		<>
			<PageHeader
				title={`${profile.lastName} ${profile.firstName} ${profile.middleName || ""}`}
				breadcrumb={[
					{ title: "Компании", path: "/" },
					{ title: "TechCorp Solutions", path: `/companies/${companyId}` },
					{ title: `${profile.lastName} ${profile.firstName}` },
				]}
			/>

			<Row gutter={[24, 24]} style={{ marginTop: 24 }}>
				<Col xs={24} lg={16}>
					<Card>
						<Row gutter={[24, 24]}>
							<Col xs={24} sm={6}>
								<Avatar
									src={profile.avatar}
									icon={<UserOutlined />}
									size={150}
									style={{ backgroundColor: "#1890ff", width: 150, height: 150 }}
								/>
							</Col>
							<Col xs={24} sm={18}>
								<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
									<Typography.Title level={2} style={{ margin: 0, textTransform: "uppercase" }}>
										{profile.lastName} {profile.firstName} {profile.middleName || ""}
									</Typography.Title>

									<Space orientation={"vertical"} size={"small"} style={{ width: "100%" }}>
										<Typography.Text>
											<strong>{"ПИНФЛ: "}</strong>
											{profile.pinfl}
										</Typography.Text>
										<Typography.Text>
											<strong>{"Дата рождения: "}</strong>
											{new Date(profile.birthDate).toLocaleDateString("ru-RU", {
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											})}
										</Typography.Text>
										<Typography.Text>
											<strong>{"Возраст: "}</strong>
											{profile.age}
										</Typography.Text>
										<Typography.Text>
											<strong>{"Пол: "}</strong>
											{profile.gender}
										</Typography.Text>
										<Typography.Text>
											<strong>{"Номер паспорта: "}</strong>
											{profile.passportNumber}
										</Typography.Text>
										<Typography.Text>
											<strong>{"Общий стаж: "}</strong>
											{profile.totalExperience} {profile.totalExperience === 1 ? "год" : profile.totalExperience < 5 ? "года" : "лет"}
										</Typography.Text>
									</Space>

									<Button type={"primary"} icon={<EditOutlined />} style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}>
										{"Обновить данные"}
									</Button>
								</Space>
							</Col>
						</Row>
					</Card>
				</Col>

				<Col xs={24} lg={8}>
					<Card>
						<Space orientation={"vertical"} style={{ width: "100%" }} size={"middle"}>
							<Button type={"primary"} icon={<DownloadOutlined />} block={true} size={"large"}>
								{"Скачать справку с места работы"}
							</Button>
							<Button type={"primary"} icon={<DownloadOutlined />} block={true} size={"large"}>
								{"Скачать выписку из трудовой"}
							</Button>
							<Button type={"primary"} icon={<DownloadOutlined />} block={true} size={"large"}>
								{"Скачать CV/Объективку"}
							</Button>
						</Space>
					</Card>
				</Col>

				<Col xs={24}>
					<Card>
						<Tabs items={tabItems} defaultActiveKey={"workbook"} />
					</Card>
				</Col>
			</Row>
		</>
	)
}
