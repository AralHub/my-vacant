import { createFileRoute, Link, useParams } from "@tanstack/react-router"
import { Avatar, Button, Card, Space, Tag, Typography, Empty, Divider } from "antd"
import { UserOutlined, PlusOutlined, ClockCircleOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { PageHeader } from "src/widgets/shared"
import { type FC } from "react"

export const Route = createFileRoute("/_layout/companies/$companyId/")({
	component: RouteComponent,
})

interface Employee {
	id: string
	firstName: string
	lastName: string
	middleName?: string
	isTemporary: boolean
	email?: string
	phone?: string
	avatar?: string
	department?: string
	startDate?: string
	slotId?: string // ID ставки, на которой работает работник
	slotNumber?: number // Номер ставки (для отображения)
}

interface Position {
	id: string
	title: string
	level: number // Иерархия: 0 - директор, 1 - менеджер, 2 - работник и т.д.
	slots: number // Количество ставок
	employees: Employee[] // Работники на этой должности
}

interface CompanyData {
	id: string
	name: string
	positions: Position[]
}

// Моковые данные для компании
const getCompanyData = (companyId: string): CompanyData | null => {
	const companies: Record<string, CompanyData> = {
		"1": {
			id: "1",
			name: "TechCorp Solutions",
			positions: [
				{
					id: "pos1",
					title: "Директор",
					level: 0,
					slots: 1,
					employees: [
						{
							id: "emp1",
							firstName: "Иван",
							lastName: "Иванов",
							middleName: "Петрович",
							isTemporary: false,
							email: "ivan.ivanov@techcorp.kz",
							phone: "+7 (777) 123-45-67",
							department: "Руководство",
							startDate: "2020-01-15",
							slotId: "slot-pos1-1",
							slotNumber: 1,
						},
					],
				},
				{
					id: "pos2",
					title: "Бухгалтер",
					level: 1,
					slots: 1,
					employees: [],
				},
				{
					id: "pos3",
					title: "Менеджер",
					level: 1,
					slots: 2,
					employees: [
						{
							id: "emp2",
							firstName: "Петр",
							lastName: "Петров",
							middleName: "Сергеевич",
							isTemporary: true,
							email: "petr.petrov@techcorp.kz",
							phone: "+7 (777) 234-56-78",
							department: "Управление",
							startDate: "2024-11-01",
							slotId: "slot-pos3-1",
							slotNumber: 1,
						},
					],
				},
				{
					id: "pos4",
					title: "Менеджер по продажам",
					level: 1,
					slots: 3,
					employees: [
						{
							id: "emp3",
							firstName: "Анна",
							lastName: "Смирнова",
							middleName: "Александровна",
							isTemporary: false,
							email: "anna.smirnova@techcorp.kz",
							phone: "+7 (777) 345-67-89",
							department: "Продажи",
							startDate: "2022-03-10",
							slotId: "slot-pos4-1",
							slotNumber: 1,
						},
						{
							id: "emp4",
							firstName: "Мария",
							lastName: "Козлова",
							middleName: "Дмитриевна",
							isTemporary: true,
							email: "maria.kozlova@techcorp.kz",
							phone: "+7 (777) 456-78-90",
							department: "Продажи",
							startDate: "2024-10-15",
							slotId: "slot-pos4-2",
							slotNumber: 2,
						},
					],
				},
				{
					id: "pos5",
					title: "Работник",
					level: 2,
					slots: 25,
					employees: [
						{
							id: "emp5",
							firstName: "Алексей",
							lastName: "Сидоров",
							middleName: "Владимирович",
							isTemporary: false,
							email: "alexey.sidorov@techcorp.kz",
							phone: "+7 (777) 567-89-01",
							department: "Разработка",
							startDate: "2021-05-20",
							slotId: "slot-pos5-1",
							slotNumber: 1,
						},
						{
							id: "emp6",
							firstName: "Дмитрий",
							lastName: "Волков",
							middleName: "Игоревич",
							isTemporary: false,
							email: "dmitry.volkov@techcorp.kz",
							phone: "+7 (777) 678-90-12",
							department: "Разработка",
							startDate: "2021-08-15",
							slotId: "slot-pos5-2",
							slotNumber: 2,
						},
						{
							id: "emp7",
							firstName: "Елена",
							lastName: "Новикова",
							middleName: "Андреевна",
							isTemporary: true,
							email: "elena.novikova@techcorp.kz",
							phone: "+7 (777) 789-01-23",
							department: "Тестирование",
							startDate: "2024-09-01",
							slotId: "slot-pos5-3",
							slotNumber: 3,
						},
						{
							id: "emp8",
							firstName: "Ольга",
							lastName: "Морозова",
							middleName: "Викторовна",
							isTemporary: false,
							email: "olga.morozova@techcorp.kz",
							phone: "+7 (777) 890-12-34",
							department: "Дизайн",
							startDate: "2022-02-10",
							slotId: "slot-pos5-4",
							slotNumber: 4,
						},
						{
							id: "emp9",
							firstName: "Сергей",
							lastName: "Лебедев",
							middleName: "Николаевич",
							isTemporary: false,
							email: "sergey.lebedev@techcorp.kz",
							phone: "+7 (777) 901-23-45",
							department: "Разработка",
							startDate: "2020-11-05",
							slotId: "slot-pos5-5",
							slotNumber: 5,
						},
						{
							id: "emp10",
							firstName: "Татьяна",
							lastName: "Соколова",
							middleName: "Сергеевна",
							isTemporary: false,
							email: "tatiana.sokolova@techcorp.kz",
							phone: "+7 (777) 012-34-56",
							department: "Маркетинг",
							startDate: "2023-01-20",
						},
						{
							id: "emp11",
							firstName: "Андрей",
							lastName: "Попов",
							middleName: "Александрович",
							isTemporary: false,
							email: "andrey.popov@techcorp.kz",
							phone: "+7 (777) 123-45-78",
							department: "Разработка",
							startDate: "2021-09-12",
						},
						{
							id: "emp12",
							firstName: "Наталья",
							lastName: "Васильева",
							middleName: "Петровна",
							isTemporary: false,
							email: "natalya.vasilyeva@techcorp.kz",
							phone: "+7 (777) 234-56-89",
							department: "HR",
							startDate: "2022-06-01",
						},
						{
							id: "emp13",
							firstName: "Игорь",
							lastName: "Семенов",
							middleName: "Дмитриевич",
							isTemporary: false,
							email: "igor.semenov@techcorp.kz",
							phone: "+7 (777) 345-67-90",
							department: "Разработка",
							startDate: "2020-04-18",
						},
						{
							id: "emp14",
							firstName: "Юлия",
							lastName: "Павлова",
							middleName: "Владимировна",
							isTemporary: false,
							email: "yulia.pavlova@techcorp.kz",
							phone: "+7 (777) 456-78-01",
							department: "Дизайн",
							startDate: "2023-03-25",
						},
						{
							id: "emp15",
							firstName: "Владимир",
							lastName: "Федоров",
							middleName: "Алексеевич",
							isTemporary: false,
							email: "vladimir.fedorov@techcorp.kz",
							phone: "+7 (777) 567-89-12",
							department: "Разработка",
							startDate: "2021-12-08",
						},
						{
							id: "emp16",
							firstName: "Екатерина",
							lastName: "Михайлова",
							middleName: "Ивановна",
							isTemporary: false,
							email: "ekaterina.mikhaylova@techcorp.kz",
							phone: "+7 (777) 678-90-23",
							department: "Маркетинг",
							startDate: "2022-08-14",
						},
						{
							id: "emp17",
							firstName: "Александр",
							lastName: "Иванов",
							middleName: "Сергеевич",
							isTemporary: false,
							email: "alexandr.ivanov@techcorp.kz",
							phone: "+7 (777) 789-01-34",
							department: "Разработка",
							startDate: "2020-07-22",
						},
						{
							id: "emp18",
							firstName: "Марина",
							lastName: "Кузнецова",
							middleName: "Андреевна",
							isTemporary: false,
							email: "marina.kuznetsova@techcorp.kz",
							phone: "+7 (777) 890-12-45",
							department: "Тестирование",
							startDate: "2023-05-30",
						},
						{
							id: "emp19",
							firstName: "Роман",
							lastName: "Степанов",
							middleName: "Викторович",
							isTemporary: false,
							email: "roman.stepanov@techcorp.kz",
							phone: "+7 (777) 901-23-56",
							department: "Разработка",
							startDate: "2021-03-17",
						},
						{
							id: "emp20",
							firstName: "Виктория",
							lastName: "Орлова",
							middleName: "Николаевна",
							isTemporary: false,
							email: "viktoria.orlova@techcorp.kz",
							phone: "+7 (777) 012-34-67",
							department: "HR",
							startDate: "2022-11-03",
						},
						{
							id: "emp21",
							firstName: "Максим",
							lastName: "Андреев",
							middleName: "Петрович",
							isTemporary: false,
							email: "maxim.andreev@techcorp.kz",
							phone: "+7 (777) 123-45-89",
							department: "Разработка",
							startDate: "2020-10-11",
						},
						{
							id: "emp22",
							firstName: "Анастасия",
							lastName: "Макарова",
							middleName: "Дмитриевна",
							isTemporary: false,
							email: "anastasia.makarova@techcorp.kz",
							phone: "+7 (777) 234-56-90",
							department: "Дизайн",
							startDate: "2023-07-19",
						},
						{
							id: "emp23",
							firstName: "Артем",
							lastName: "Николаев",
							middleName: "Игоревич",
							isTemporary: false,
							email: "artem.nikolaev@techcorp.kz",
							phone: "+7 (777) 345-67-01",
							department: "Разработка",
							startDate: "2021-06-28",
						},
						{
							id: "emp24",
							firstName: "Дарья",
							lastName: "Захарова",
							middleName: "Александровна",
							isTemporary: false,
							email: "darya.zakharova@techcorp.kz",
							phone: "+7 (777) 456-78-12",
							department: "Маркетинг",
							startDate: "2022-04-05",
						},
						{
							id: "emp25",
							firstName: "Павел",
							lastName: "Зайцев",
							middleName: "Владимирович",
							isTemporary: false,
							email: "pavel.zaytsev@techcorp.kz",
							phone: "+7 (777) 567-89-23",
							department: "Разработка",
							startDate: "2020-12-16",
						},
						{
							id: "emp26",
							firstName: "Кристина",
							lastName: "Соловьева",
							middleName: "Сергеевна",
							isTemporary: false,
							email: "kristina.soloveva@techcorp.kz",
							phone: "+7 (777) 678-90-34",
							department: "Тестирование",
							startDate: "2023-09-08",
						},
						{
							id: "emp27",
							firstName: "Никита",
							lastName: "Борисов",
							middleName: "Андреевич",
							isTemporary: false,
							email: "nikita.borisov@techcorp.kz",
							phone: "+7 (777) 789-01-45",
							department: "Разработка",
							startDate: "2021-11-24",
						},
						{
							id: "emp28",
							firstName: "Алина",
							lastName: "Яковлева",
							middleName: "Петровна",
							isTemporary: false,
							email: "alina.yakovleva@techcorp.kz",
							phone: "+7 (777) 890-12-56",
							department: "HR",
							startDate: "2022-09-13",
						},
						{
							id: "emp29",
							firstName: "Денис",
							lastName: "Григорьев",
							middleName: "Николаевич",
							isTemporary: false,
							email: "denis.grigoriev@techcorp.kz",
							phone: "+7 (777) 901-23-67",
							department: "Разработка",
							startDate: "2020-08-29",
						},
						{
							id: "emp30",
							firstName: "Валерия",
							lastName: "Романова",
							middleName: "Игоревна",
							isTemporary: false,
							email: "valeria.romanova@techcorp.kz",
							phone: "+7 (777) 012-34-78",
							department: "Дизайн",
							startDate: "2023-02-17",
						},
						{
							id: "emp31",
							firstName: "Илья",
							lastName: "Воробьев",
							middleName: "Александрович",
							isTemporary: false,
							email: "ilya.vorobev@techcorp.kz",
							phone: "+7 (777) 123-45-90",
							department: "Разработка",
							startDate: "2021-04-06",
						},
						{
							id: "emp32",
							firstName: "Полина",
							lastName: "Сергеева",
							middleName: "Дмитриевна",
							isTemporary: false,
							email: "polina.sergeeva@techcorp.kz",
							phone: "+7 (777) 234-56-01",
							department: "Маркетинг",
							startDate: "2022-12-21",
						},
						{
							id: "emp33",
							firstName: "Константин",
							lastName: "Тихонов",
							middleName: "Викторович",
							isTemporary: true,
							email: "konstantin.tikhonov@techcorp.kz",
							phone: "+7 (777) 345-67-12",
							department: "Разработка",
							startDate: "2024-10-20",
							slotId: "slot-pos5-21",
							slotNumber: 21,
						},
						{
							id: "emp34",
							firstName: "Анжела",
							lastName: "Белова",
							middleName: "Алексеевна",
							isTemporary: true,
							email: "anzhela.belova@techcorp.kz",
							phone: "+7 (777) 456-78-23",
							department: "Тестирование",
							startDate: "2024-11-05",
							slotId: "slot-pos5-22",
							slotNumber: 22,
						},
						{
							id: "emp35",
							firstName: "Руслан",
							lastName: "Медведев",
							middleName: "Сергеевич",
							isTemporary: true,
							email: "ruslan.medvedev@techcorp.kz",
							phone: "+7 (777) 567-89-34",
							department: "Разработка",
							startDate: "2024-09-15",
							slotId: "slot-pos5-23",
							slotNumber: 23,
						},
					],
				},
			],
		},
		"2": {
			id: "2",
			name: "FinanceHub",
			positions: [
				{
					id: "pos1",
					title: "Директор",
					level: 0,
					slots: 1,
					employees: [
						{
							id: "emp1",
							firstName: "Сергей",
							lastName: "Кузнецов",
							middleName: "Александрович",
							isTemporary: false,
							email: "sergey.kuznetsov@financehub.kz",
							phone: "+7 (701) 111-22-33",
							department: "Руководство",
							startDate: "2019-03-01",
							slotId: "slot-fh-pos1-1",
							slotNumber: 1,
						},
					],
				},
				{
					id: "pos2",
					title: "Финансовый менеджер",
					level: 1,
					slots: 3,
					employees: [
						{
							id: "emp2",
							firstName: "Елена",
							lastName: "Белова",
							middleName: "Викторовна",
							isTemporary: false,
							email: "elena.belova@financehub.kz",
							phone: "+7 (701) 222-33-44",
							department: "Финансы",
							startDate: "2021-06-15",
							slotId: "slot-fh-pos2-1",
							slotNumber: 1,
						},
						{
							id: "emp3",
							firstName: "Александр",
							lastName: "Чернов",
							middleName: "Игоревич",
							isTemporary: true,
							email: "alexandr.chernov@financehub.kz",
							phone: "+7 (701) 333-44-55",
							department: "Финансы",
							startDate: "2024-10-10",
							slotId: "slot-fh-pos2-2",
							slotNumber: 2,
						},
					],
				},
			],
		},
	}

	return companies[companyId] || null
}

const PositionCard: FC<{ position: Position }> = ({ position }) => {
	const { title, slots, employees } = position
	const employeeCount = employees.length
	const vacantSlots = slots - employeeCount
	const permanentEmployees = employees.filter((emp) => !emp.isTemporary)
	const temporaryEmployees = employees.filter((emp) => emp.isTemporary)
	const { companyId } = Route.useParams()

	return (
		<Card
			title={
				<Space>
					<Typography.Text strong={true} style={{ fontSize: 16 }}>
						{title}
					</Typography.Text>
					<Tag color={"blue"}>
						{employeeCount} {employeeCount === 1 ? "работник" : employeeCount < 5 ? "работника" : "работников"} / {slots} {slots === 1 ? "ставка" : slots < 5 ? "ставки" : "ставок"}
					</Tag>
				</Space>
			}
		>
			<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
				{/* Постоянные работники */}
				{permanentEmployees.map((employee, index) => (
					<div key={employee.id}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
							<Space align={"start"} style={{ flex: 1 }}>
								<Avatar
									src={employee.avatar}
									icon={<UserOutlined />}
									size={"default"}
									style={{ backgroundColor: "#1890ff" }}
								/>
								<div style={{ flex: 1 }}>
									<Space align={"center"} style={{ marginBottom: 4 }}>
										<Typography.Text strong={true} style={{ fontSize: 14 }}>
											{employee.lastName} {employee.firstName} {employee.middleName || ""}
										</Typography.Text>
										{employee.slotNumber && (
											<Tag color={"default"} style={{ margin: 0 }}>
												Ставка {employee.slotNumber}
											</Tag>
										)}
									</Space>
									{employee.department && (
										<div>
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												{employee.department}
											</Typography.Text>
										</div>
									)}
									<Space size={"small"} style={{ marginTop: 4, flexWrap: "wrap" }}>
										{employee.email && (
											<Space size={4}>
												<MailOutlined style={{ fontSize: 12, color: "#8c8c8c" }} />
												<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
													{employee.email}
												</Typography.Text>
											</Space>
										)}
										{employee.phone && (
											<Space size={4}>
												<PhoneOutlined style={{ fontSize: 12, color: "#8c8c8c" }} />
												<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
													{employee.phone}
												</Typography.Text>
											</Space>
										)}
										{employee.startDate && (
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												С {new Date(employee.startDate).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}
											</Typography.Text>
										)}
									</Space>
								</div>
							</Space>
							<Link to={"/companies/$companyId/employees/$employeeId"} params={{ employeeId: employee.id, companyId: companyId }}>
								<Button type={"link"} size={"small"}>
									Посмотреть профиль
								</Button>
							</Link>
						</div>
						{index < permanentEmployees.length - 1 && <Divider style={{ margin: "12px 0" }} />}
					</div>
				))}

				{/* Временные работники */}
				{temporaryEmployees.length > 0 && permanentEmployees.length > 0 && (
					<Divider style={{ margin: "16px 0" }} />
				)}
				{temporaryEmployees.map((employee, index) => (
					<div key={employee.id}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
							<Space align={"start"} style={{ flex: 1 }}>
								<Avatar
									src={employee.avatar}
									icon={<ClockCircleOutlined />}
									size={"default"}
									style={{ backgroundColor: "#faad14" }}
								/>
								<div style={{ flex: 1 }}>
									<Space align={"center"} style={{ marginBottom: 4 }} wrap={true}>
										<Typography.Text strong={true} style={{ fontSize: 14 }}>
											{employee.lastName} {employee.firstName} {employee.middleName || ""}
										</Typography.Text>
										{employee.slotNumber && (
											<Tag color={"default"} style={{ margin: 0 }}>
												Ставка {employee.slotNumber}
											</Tag>
										)}
										<Tag color={"orange"} icon={<ClockCircleOutlined />} style={{ margin: 0 }}>
											временно работает на этой должности
										</Tag>
									</Space>
									{employee.department && (
										<div>
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												{employee.department}
											</Typography.Text>
										</div>
									)}
									<Space size={"small"} style={{ marginTop: 4, flexWrap: "wrap" }}>
										{employee.email && (
											<Space size={4}>
												<MailOutlined style={{ fontSize: 12, color: "#8c8c8c" }} />
												<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
													{employee.email}
												</Typography.Text>
											</Space>
										)}
										{employee.phone && (
											<Space size={4}>
												<PhoneOutlined style={{ fontSize: 12, color: "#8c8c8c" }} />
												<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
													{employee.phone}
												</Typography.Text>
											</Space>
										)}
										{employee.startDate && (
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												С {new Date(employee.startDate).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}
											</Typography.Text>
										)}
									</Space>
								</div>
							</Space>
							<Space orientation={"vertical"} align={"end"}>
								<Link to={"/companies/$companyId/employees/$employeeId"} params={{ employeeId: employee.id, companyId: companyId }}>
									<Button type={"link"} size={"small"}>
										Посмотреть профиль
									</Button>
								</Link>
								<Button type={"primary"} size={"small"} icon={<PlusOutlined />} danger={false}>
									Опубликовать вакансию
								</Button>
							</Space>
						</div>
						{index < temporaryEmployees.length - 1 && <Divider style={{ margin: "12px 0" }} />}
					</div>
				))}

				{/* Свободные места */}
				{vacantSlots > 0 && (
					<>
						{Array.from({ length: vacantSlots }).map((_, index) => (
							<div key={`vacant-${index}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<Space>
									<Avatar icon={<UserOutlined />} size={"small"} style={{ backgroundColor: "#d9d9d9" }} />
									<Typography.Text type={"secondary"}>Пусто</Typography.Text>
								</Space>
								<Button type={"primary"} size={"small"} icon={<PlusOutlined />}>
									Опубликовать вакансию
								</Button>
							</div>
						))}
					</>
				)}

				{/* Если нет работников и нет ставок */}
				{employeeCount === 0 && slots === 0 && (
					<Empty description={"Нет данных"} image={Empty.PRESENTED_IMAGE_SIMPLE} />
				)}
			</Space>
		</Card>
	)
}

function RouteComponent() {
	const { companyId } = useParams({ from: "/_layout/companies/$companyId/" })
	const companyData = getCompanyData(companyId)

	if (!companyData) {
		return (
			<>
				<PageHeader title={"Компания не найдена"} />
			</>
		)
	}

	// Сортируем должности по уровню иерархии
	const sortedPositions = [...companyData.positions].sort((a, b) => a.level - b.level)

	return (
		<>
			<PageHeader
				title={companyData.name}
				breadcrumb={[
					{ title: "Компании", path: "/" },
					{ title: companyData.name },
				]}
			/>
			<Space orientation={"vertical"} size={"large"} style={{ width: "100%" }}>
				{sortedPositions.map((position) => (
					<PositionCard key={position.id} position={position} />
				))}
			</Space>
		</>
	)
}
