import { create } from "zustand"

interface MenuStore {
	collapsed: boolean
	toggleCollapsed: () => void
}

const useMenuStore = create<MenuStore>()((set) => ({
	collapsed: false,
	toggleCollapsed: () => set((prev) => ({ collapsed: !prev.collapsed })),
}))

export { useMenuStore }
