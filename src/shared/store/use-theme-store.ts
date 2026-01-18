import { create } from "zustand"
import { themeStorage } from "../utils"

interface ThemeStore {
	isDark: boolean
	toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>()((set) => ({
	isDark: themeStorage.get(),
	toggleTheme: () =>
		set((prev) => {
			const isDark = !prev.isDark
			themeStorage.set(isDark ? "dark" : "light")
			return { isDark: !prev.isDark }
		}),
}))

export { useThemeStore }
