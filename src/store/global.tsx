import { create } from 'zustand'

interface globalStoreProps {
  onOff: boolean
  setOnOff: (params: boolean) => void
}

export const globalStore = create<globalStoreProps>((set) => ({
  onOff: false,
  setOnOff: (params: boolean) => set({ onOff: params }),
}))
