import Cookies from "js-cookie"

export const tokenStorage = {
	get: (type: "access" | "refresh" = "access") =>
		Cookies.get(`${type}-token`) || null,
	set: (token: string, type: "access" | "refresh", remember?: boolean) => {
		Cookies.set(`${type}-token`, token, {
			expires: remember ? 60 : 30,
		})
	},
	remove: () => {
		Cookies.remove("access-token")
		Cookies.remove("refresh-token")
	},
}

export const langStorage = {
	get: (): string => {
		const lang = Cookies.get("lang")
			if (!lang) return "UZ"
			if (!["EN", "RU", "UZ", "QQ"].includes(lang)) return "UZ"
		return lang.toUpperCase()
	},
	set: (lang: string) => {
		Cookies.set("lang", lang.toUpperCase(), {
			expires: 30,
		})
	},
	clear(): void {
		Cookies.remove("lang")
	},
}

export const themeStorage = {
	get: () => Cookies.get("theme") === "dark",
	set: (theme: string) => {
		Cookies.set("theme", theme, {
			expires: 30,
		})
	},
	remove: () => {
		Cookies.remove("theme")
	},
}
