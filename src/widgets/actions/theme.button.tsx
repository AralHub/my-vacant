import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import { forwardRef } from "react"
import { useThemeStore } from "src/shared/store"

export interface ThemeButtonProps extends ButtonProps {
	className?: string
}

const ThemeButton = forwardRef<HTMLButtonElement, ThemeButtonProps>(
	({ className, ...props }, ref) => {
		const { isDark, toggleTheme } = useThemeStore()

		return (
			<Button
				ref={ref}
				className={className}
				variant={"filled"}
				color={"default"}
				shape={"circle"}
				icon={isDark ? <SunOutlined /> : <MoonOutlined />}
				onClick={toggleTheme}
				size={"large"}
				{...props}
			/>
		)
	}
)
ThemeButton.displayName = "ThemeButton"

export { ThemeButton }
