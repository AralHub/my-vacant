import { createFileRoute, Outlet } from "@tanstack/react-router"
import {
	ContentLayout,
	FooterLayout,
	HeaderLayout,
	InnerLayout,
	MainLayout, SidebarLayout,
} from "src/widgets/layout"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<SidebarLayout />
				<InnerLayout>
					<HeaderLayout />
					<ContentLayout>
						<Outlet />
					</ContentLayout>
					<FooterLayout />
				</InnerLayout>
			</MainLayout>
		</>
	)
}
